import React, {useState,useEffect} from 'react';
import {View, Text, StatusBar, ScrollView,ImageBackground, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import AppNavigator from '../Navbar';
import TrackLabel from '../shared/TrackLabel';
import {useNavigation, useRoute} from '@react-navigation/native';
import Song from '../shared/Song';
import AsyncStorage from '@react-native-async-storage/async-storage';


function Library() {
  const navigation = useNavigation();
  const [songs, setSongs] = useState([]);
  const route = useRoute();
  useEffect(async () => {
      const keys = await AsyncStorage.getAllKeys();
      let songs = await AsyncStorage.multiGet(keys);
      songs = songs.filter(song => song[0]!="user_id") 
        songs = songs.map(song => {
        song = {...JSON.parse(song[1]), track_id: song[0]};
        return song;
      });
      setSongs(songs);
  }, []);
  return (
    <React.Fragment>
      <StatusBar backgroundColor="#1B0536" />
      <ScrollView style={styles.wrapper}>
        <View style={styles.headerContainer}>
            <View style={styles.playlistDetail}>
              <Text style={styles.labelText}>Favourites</Text>
              <View style={styles.subTextContainer}>
                <Text style={styles.labelSubText}>{songs.length} Songs &bull; </Text>
                <Text style={styles.labelSubText}>{songs.length/2} Minutes</Text>
              </View>
            </View>
          <TouchableOpacity
                style={{marginTop: 5, marginLeft: 'auto'}}
                onPress={() => {
                  if (songs.length > 0) {
                    navigation.push('Music Player', {
                      id: songs[0].track_id,
                      title: songs[0].track_name,
                      artists: songs[0].track_artist,
                      image: songs[0].artist_image,
                      url: songs[0].track_preview,
                      playlist: {name: "Favourites", songs},
                    });
                  }
                }}>
                <ImageBackground
                  style={styles.imgPlayBtn}
                  source={require('../../assets/playbtn.png')}></ImageBackground>
            </TouchableOpacity>
        </View>

        {/* <View style={styles.pillsContainer}>
          <View style={styles.pillBoxActive}>
            <Text style={styles.pillText}>Playlist</Text>
          </View>
          <View style={styles.pillBoxInActive}>
            <Text style={styles.pillText}>Artists</Text>
          </View>
          <View style={styles.pillBoxInActive}>
            <Text style={styles.pillText}>Languages</Text>
          </View>
        </View> */}

        <View style={styles.LibraryContainer}>
        {songs.length > 0 ?
        songs.map(song => {
                return (
                  <Song
                    key={song.track_id}
                    id={song.track_id}
                    title={song.track_name}
                    image={song.artist_image}
                    artists={song.track_artist}
                    url={song.track_preview}
                  />
                );
              }): <Text style={styles.nolikedSongs}>No liked Songs . . .</Text>}
          {/* <TouchableOpacity
                    onPress={() => {
                      navigation.push(
                        'Playlist',
                            {
                              title: "Liked Songs",
                              endpoint: `likedsongs`,
                              img: 'https://i.imgur.com/6MTTsDh.png',
                            },
                      );
            }}>
            <TrackLabel
              text="Liked Songs"
              offlineLabel
              image='https://i.imgur.com/6MTTsDh.png'
              gradient={['rgba(238, 0, 143, 0)', '#EE008F']}
              type="library"/>
          </TouchableOpacity> */}
          {/* <TrackLabel
            text="Dua Lipa"
            offlineLabel
            image={require('../../assets/dualipa.png')}
            gradient={['rgba(238, 0, 143, 0)', '#D708F9']}
            type="library"></TrackLabel> */}
        </View>
      </ScrollView>
      <AppNavigator activeRoute='Favourites'></AppNavigator>
    </React.Fragment>
  );
}

export default Library;
