import React from 'react';
import {
  View,
  StatusBar,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Song from '../shared/Song';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {useState} from 'react';
import {url} from '../../constants';
import {useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


function Playlist() {
  const navigation = useNavigation();
  const [songs, setSongs] = useState([]);
  const route = useRoute();
  useEffect(async () => {
    if(route.params.endpoint == "likedsongs"){
      const keys = await AsyncStorage.getAllKeys();
      let songs = await AsyncStorage.multiGet(keys);
      songs = songs.map(song => {
        song = {...JSON.parse(song[1]), track_id: song[0]};
        return song;
      });
      setSongs(songs);
      console.log(songs)
    } else {
      let response = await fetch(`${url}${route.params.endpoint}`);
      response = await response.json(); 
      setSongs(response);
    }
  }, []);

  return (
    <React.Fragment>
      <StatusBar backgroundColor="#1B0536" />
      <ScrollView
        style={styles.wrapper}
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}>
        {/* <ImageBackground
              style={styles.imgHeart}
              source={require('../../assets/heartfill.png')}>
        </ImageBackground> */}
        <ImageBackground
          style={styles.imgBackground}
          source={{uri: route.params.img}}
          imageStyle={{
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
          }}>
          <LinearGradient
            colors={['rgba(255, 255, 255, 0)', '#00FFA3']}
            style={styles.linearGradient}></LinearGradient>
        </ImageBackground>
        <View style={styles.container}>
          <View style={styles.playlistHeadingContainer}>
            <View style={styles.playlistDetail}>
              <Text style={styles.labelText}>{route.params.title}</Text>
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
                    playlist: {name: route.params.title, songs},
                  });
                }
              }}>
              <ImageBackground
                style={styles.imgPlayBtn}
                source={require('../../assets/playbtn.png')}></ImageBackground>
            </TouchableOpacity>
          </View>
          {songs.length < 1
            ? [1, 2, 3, 4].map(index => (
                <View
                  key={index}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginBottom: 10,
                  }}>
                  <View
                    style={{
                      width: 50,
                      height: 45,
                      backgroundColor: '#6425B1',
                    }}></View>
                  <View
                    style={{
                      display: 'flex',
                      width: '80%',
                      flexDirection: 'column',
                      marginLeft: 15,
                    }}>
                    <View
                      style={{
                        display: 'flex',
                        height: 17,
                        marginTop: 6,
                        backgroundColor: '#6425B1',
                      }}></View>
                    <View
                      style={{
                        display: 'flex',
                        width: '30%',
                        height: 12,
                        marginTop: 5,
                        backgroundColor: '#6425B1',
                      }}></View>
                  </View>
                </View>
              ))
            : songs.map(song => {
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
              })}
        </View>
      </ScrollView>
    </React.Fragment>
  );
}

export default Playlist;
