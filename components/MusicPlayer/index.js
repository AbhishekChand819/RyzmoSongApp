import {useRoute} from '@react-navigation/native';
import {useEffect} from 'react';
import React from 'react';
import {
  View,
  StatusBar,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {styles} from './styles';
import Song from '../shared/Song';
import {url, notificationImage} from '../../constants';

import TrackPlayer from 'react-native-track-player';
import { useTrackPlayerEvents, TrackPlayerEvents, STATE_PLAYING } from 'react-native-track-player';
import {useState, useRef} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const events = [
  TrackPlayerEvents.REMOTE_PAUSE,
  TrackPlayerEvents.REMOTE_PLAY
];

function MusicPlayer() {
  const [isPlaying, setisPlaying] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentTime, setcurrentTime] = useState(0);
  const [songTitle, setSongTitle] = useState('');
  const [songArtist, setSongArtist] = useState('');
  const [songImg, setSongImg] = useState('');
  const currentSongId = useRef('');
  const [songQueue, setSongQueue] = useState([]);
  const loop = useRef(false);
  const [like, setLike] = useState(false);

  useTrackPlayerEvents(events, (event) => {
    if (event.type === TrackPlayerEvents.REMOTE_PLAY) {
      setisPlaying(true);
    }
    if (event.type === TrackPlayerEvents.REMOTE_PAUSE) {
      setisPlaying(false);
    }
  });

  const route = useRoute();
  const isMounted = useRef(false);
  async function getInfo() {
    let info = await TrackPlayer.getPosition();
    info = Math.floor(info);
    if(info > 28 && loop.current) TrackPlayer.seekTo(0);
    setcurrentTime(info);
  }
  const shuffleArray = array => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };
  const shuffle = async () => {
    const queue = await TrackPlayer.getQueue();
    const shuffledQueue = shuffleArray(queue);
    setSongQueue(shuffledQueue);
    console.log("............", shuffledQueue)
    TrackPlayer.destroy();
    await TrackPlayer.setupPlayer({}).then(async () => {});
    await TrackPlayer.add(shuffledQueue);
    await TrackPlayer.play();
  };
  useEffect(async () => {
    if (!route.params.playlist) {
      let response = await fetch(`${url}/recommend/song/${route.params.title} - ${route.params.artists}`);
      response = await response.json();
      setSongQueue(response);
      response.map(async song => {
        if (song.track_preview.length > 1) {
          await TrackPlayer.add({
            id: song.track_id,
            url: song.track_preview,
            title: song.track_name,
            artist: song.track_artist,
            artwork: notificationImage,
            artist_image: song.artist_image,
          });
        }
      });
    }
  }, []);
  useEffect(async () => {
    isMounted.current = true;
    const listener = TrackPlayer.addEventListener(
      'playback-track-changed',
      async data => {
        const track = await TrackPlayer.getTrack(data.nextTrack);
        if (track) {
          currentSongId.current = track.id;
          setSongTitle(track.title);
          setSongArtist(track.artist);
          setSongImg(track.artist_image);
        }
      },
    );

    TrackPlayer.updateOptions({
      stopWithApp: true,
      notificationCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
      ],
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
      ],
      compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
      ]
    });

    await TrackPlayer.reset();
    if(!route.params.playlist){
      await TrackPlayer.add({
        id: route.params.id,
        url: route.params.url,
        title: route.params.title,
        artist: route.params.artists,
        artwork: notificationImage,
        artist_image: route.params.image
      });
    }
    const liked = await AsyncStorage.getItem(route.params.id);
    setLike(liked !== null);

    currentSongId.current = route.params.id;
    if (route.params.playlist) {
      const newPlaylist = route.params.playlist.songs.filter(song => song.track_preview.length > 1);
      const newQueue = newPlaylist.map(song => {
        return {
          id: song.track_id,
          url: song.track_preview,
          title: song.track_name,
          artist: song.track_artist,
          artwork: notificationImage,
          artist_image: song.artist_image
        }
      })
      await TrackPlayer.reset();
      await TrackPlayer.add(newQueue);
      await TrackPlayer.skip(currentSongId.current);

      setSongQueue(newPlaylist);
    }

    TrackPlayer.play();
    let myInterval = setInterval(() => {
      if (isMounted.current) getInfo();
    }, 1000);

    const user_id = await AsyncStorage.getItem('user_id')
    await fetch(`${url}/record`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id,
        track_id: route.params.id
      })
    });

    return () => {
      isMounted.current = false;
      clearInterval(myInterval);
      listener.remove();
    };
  }, [route]);

  return (
    <React.Fragment>
      <StatusBar backgroundColor="#1B0536" />
      <ScrollView
        style={styles.wrapper}
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}>
        <View style={styles.imageWrapper}>
          <ImageBackground
            style={styles.imgBackground}
            source={{uri: songImg}}
            key={songTitle}
            imageStyle={{borderRadius: 200}}
          />
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => null}>
          <ScrollView
            style={styles.queueWrapper}
            overScrollMode="never"
            showsHorizontalScrollIndicator={false}>
            <View style={styles.queueHeader}>
              <View style={{display: 'flex', flexDirection: 'column'}}>
                <Text style={styles.closeButtonText}>{route.params.playlist ? `Playing from: ${route.params.playlist.name}` : `Recommended For You`}</Text>
                <View style={styles.dividerQueue}></View>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                }}>
                <View style={styles.closeButton}>
                  <ImageBackground
                    style={styles.QueueClose}
                    source={require('../../assets/close.png')}></ImageBackground>
                </View>
              </TouchableOpacity>
            </View>
            {songQueue.length < 1
              ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(index => (
                <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginBottom: 10,
                }}>
                <View style={{width: 50, height: 45, backgroundColor: "#6425B1", opacity: 0.5}}></View>
                <View
                  style={{
                    display: 'flex',
                    width: '80%',
                    flexDirection: 'column',
                    marginLeft: 15
                  }}>
                  <View
                    style={{
                      display: 'flex',
                      height: 17,
                      marginTop: 6,
                      backgroundColor: "#6425B1",
                      opacity: 0.5
                    }}></View>
                  <View
                    style={{
                      display: 'flex',
                      width: '30%',
                      height: 12,
                      marginTop: 5,
                      backgroundColor: "#6425B1",
                      opacity: 0.5
                    }}></View>
                </View>
              </View>
                ))
              : songQueue.map(songQ => 
                songQ.track_id ?(
                    <Song
                      isPlaying={currentSongId.current === songQ.track_id}
                      id={songQ.track_id}
                      key={songQ.track_id}
                      title={songQ.track_name}
                      image={songQ.artist_image}
                      artists={songQ.track_artist}
                      url={songQ.track_preview}
                      route="queue"
                    />
                  ) : (  
                    <Song
                    isPlaying={currentSongId.current === songQ.id}
                    id={songQ.id}
                    key={songQ.id}
                    title={songQ.title}
                    image={songQ.artist_image}
                    artists={songQ.artist}
                    url={songQ.url}
                    route="queue"
                  />)
                )}
          </ScrollView>
        </Modal>
        <Text style={styles.SongTitle} numberOfLines={1} ellipsizeMode="tail">
          {songTitle}
        </Text>
        <Text style={styles.SongArtist}>{songArtist}</Text>
        <View style={styles.SongBar}>
          <View
            style={[
              styles.SongBarFill,
              {width: (currentTime / 30) * 100 + '%'},
            ]}></View>
        </View>
        <View style={styles.SongTimeLable}>
          <Text style={styles.SongStartTime}>
            {currentTime < 10 ? '0:0' + currentTime : '0:' + currentTime}
          </Text>
          <Text style={styles.SongEndTime}>0:30</Text>
        </View>
        <View style={styles.SongOptionPanel}>
          <TouchableOpacity onPress={shuffle}>
            <ImageBackground
              style={styles.SongOptionShuffle}
              source={require('../../assets/shuffle.png')}></ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => TrackPlayer.skipToPrevious()}>
            <ImageBackground
              style={styles.SongOptionBackward}
              source={require('../../assets/backward.png')}></ImageBackground>
          </TouchableOpacity>
          {isPlaying ? (
            <TouchableOpacity
              onPress={() => {
                setisPlaying(false);
                TrackPlayer.pause();
              }}>
              <ImageBackground
                style={styles.SongOptionPause}
                source={require('../../assets/pause.png')}></ImageBackground>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setisPlaying(true);
                TrackPlayer.play();
              }}>
              <ImageBackground
                style={styles.SongOptionPause}
                source={require('../../assets/playbtn.png')}></ImageBackground>
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={() => TrackPlayer.skipToNext()}>
            <ImageBackground
              style={styles.SongOptionForward}
              source={require('../../assets/forward.png')}></ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => loop.current = !loop.current}>
            <ImageBackground
              style={styles.SongOptionRepeat}
              source={
                loop.current
                  ? require('../../assets/repeatfill.png')
                  : require('../../assets/repeat.png')
              }></ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.SongMenuPanel}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
            }}>
            <ImageBackground
              style={styles.SongMenuPlaylist}
              source={require('../../assets/playlist.png')}></ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={async () => {
              if (!like) {
                await AsyncStorage.setItem(
                  route.params.id,
                  JSON.stringify({
                    track_name: route.params.title,
                    track_artist: route.params.artists,
                    artist_image: route.params.image,
                    track_preview: route.params.url,
                  }),
                );
              } else {
                await AsyncStorage.removeItem(route.params.id);
              }
              setLike(!like);
            }}>
            {like ? (
              <ImageBackground
                style={{
                  width: 23,
                  height: 23,
                }}
                source={require('../../assets/heartfill.png')}></ImageBackground>
            ) : (
              <ImageBackground
                style={{
                  width: 23,
                  height: 23,
                }}
                source={require('../../assets/heartempty.png')}></ImageBackground>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </React.Fragment>
  );
}

export default MusicPlayer;
