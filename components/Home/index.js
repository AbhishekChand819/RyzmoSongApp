import React from 'react';
import {View, StatusBar, Text, ScrollView, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import AppNavigator from '../Navbar';
import TrackLabel from '../shared/TrackLabel';
import { useEffect } from 'react';
import { useState } from 'react';
import { url } from "../../constants"
import { useNavigation } from '@react-navigation/native';
import SkeletonPlaceholder  from 'react-native-skeleton-placeholder';

function HomeSection({ heading, songs, navigateTo, endpoint }) {
  const navigation = useNavigation();

  const genreImages={
    "rock": require("../../assets/rock.png"),
    "r&b": require("../../assets/r&b.png"),
    "pop": require("../../assets/pop.png"),
    "edm": require("../../assets/edm.png"),
    "latin": require("../../assets/latin.png"),
    "rap": require("../../assets/rap.png")
  };

  return (
    <View style={{ paddingBottom: 20 }}>
      <Text style={styles.labelText}>{heading}</Text>
      <ScrollView
        horizontal={true}
        overScrollMode="never"
        style={styles.container}
        showsHorizontalScrollIndicator={false}
      >
        {songs.length < 1 ? [1,2,3].map((index)=>
          <SkeletonPlaceholder key={index} speed={2000} backgroundColor='#6425B1' highlightColor="#B62EAD">
            <View style={{ width:160,height:150,borderRadius:10,marginRight:20}}></View>
            <View style={{width:140,height:15,marginTop:10,borderRadius:10}}></View>
            <View style={{width:60,height:10,marginTop:5,borderRadius:10}}></View>
          </SkeletonPlaceholder>
        ) : songs.map((song, index) => {
          if(endpoint === 'genre') {
            return (
              <TouchableOpacity key={index} onPress={() => {
                navigation.push(navigateTo, { 
                  title: song.toUpperCase(),
                  endpoint: `/${endpoint}/${song}`,
                  img: genreImages[song]
                });
              }}> 
                <TrackLabel
                  text={song.toUpperCase()}
                  image={genreImages[song]}
                  gradient={
                    index%3==0 ? ['rgba(238, 255, 255, 0)', '#0137C7'] : 
                    index%3==1 ?['rgba(238, 0, 143, 0)', '#D708F9'] : 
                    ['rgba(255, 255, 255, 0)', '#00FFA3'] 
                  }type="home"
                  navigation={navigation}
                />
              </TouchableOpacity>
            ); 
          } else if(endpoint === 'lang') {
            const { displayName, lang, img } = song;
            return (
              <TouchableOpacity key={index} onPress={() => {
                navigation.push(navigateTo, { 
                  title: displayName,
                  endpoint: `/${endpoint}/${lang}`,
                  img
                });
              }}> 
                <TrackLabel
                  text={displayName}
                  image={img}
                  gradient={
                    index%3==0 ? ['rgba(238, 255, 255, 0)', '#0137C7'] : 
                    index%3==1 ?['rgba(238, 0, 143, 0)', '#D708F9'] : 
                    ['rgba(255, 255, 255, 0)', '#00FFA3'] 
                  }type="home"
                  navigation={navigation}
                />
              </TouchableOpacity>
            );
          } else {
            let { track_name, track_preview, track_artist, artist_image, playlist_name } = song;
            if(endpoint === 'playlist') {
              track_artist = playlist_name;
            }
            return (
              <TouchableOpacity key={index} onPress={() => {
                navigation.push(navigateTo, navigateTo === 'Music Player' ? { 
                  title: track_name,
                  artists: track_artist,
                  image: artist_image.length > 1 ? { uri : artist_image } : require('../../assets/album5.jpg'),
                  url: track_preview
                } : {
                  title: track_artist,
                  endpoint: `/${endpoint}/${track_artist}`,
                  img: artist_image.length > 1 ? { uri: artist_image } : require('../../assets/album5.jpg')
                });
              }}>
                <TrackLabel
                  text={track_artist}
                  image={artist_image.length > 1 ? { uri : artist_image } : require('../../assets/album5.jpg')}
                  gradient={
                    index%3==0 ? ['rgba(238, 255, 255, 0)', '#0137C7'] : 
                    index%3==1 ?['rgba(238, 0, 143, 0)', '#D708F9'] : 
                    ['rgba(255, 255, 255, 0)', '#00FFA3'] 
                  }
                  type="home"
                  navigation={navigation} 
                />
              </TouchableOpacity>
            );
          }
        })}
      </ScrollView>
    </View>
  );
}

function Home() {
  const navigation = useNavigation();
  const [topArtists, setTopArtists] = useState([]);
  const [topSongs, setTopSongs] = useState([]);
  const [topGenres, setTopGenres] = useState([]);
  const [topPlaylists, setTopPlaylists] = useState([]);
  const [recommendedSongs, setRecommendedSongs] = useState([]);

  const musicByLangs=[
    {"displayName":"English","lang":"en","img": {uri : 'https://www.nme.com/wp-content/uploads/2017/12/GettyImages-626378200_anne_marie_1000.jpg'}},
    {"displayName":"Hindi","lang":"hi","img":{uri : 'https://i.tribune.com.pk/media/images/2061982-kumarsanupadamshri-1569064850/2061982-kumarsanupadamshri-1569064850.jpg'}},
    {"displayName":"Italian","lang":"it","img":{uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe48Y6OMPNh69CVmLojFg-Qx8AkDbCsdD8SQ&usqp=CAU'}},
    {"displayName":"Spanish","lang":"es","img":{uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpxDkfSJI0J1H8VPAOXKOalxTxelKXpQctFDN4UqRQTg0Qqy7ffybrtjGFOobTfKoKIbg&usqp=CAU'}},
    {"displayName":"French","lang":"fr","img":{uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMKFTKqWjW03-Fyr6h8dkJuXerH9W334lcSQ&usqp=CAU'}}
  ];

  useEffect(async () => {
    fetch(`${url}/top/songs`).then(res => res.json()).then(res => setTopSongs(res));
    fetch(`${url}/top/artists`).then(res => res.json()).then(res => setTopArtists(res));
    fetch(`${url}/genres`).then(res => res.json()).then(res => setTopGenres(res));
    fetch(`${url}/top/playlists`).then(res => res.json()).then(res => setTopPlaylists(res));
    fetch(`${url}/recommend/123`).then(res => res.json()).then(res => setRecommendedSongs(res));
  }, []);

  return (
    <React.Fragment>
      <StatusBar backgroundColor="#1B0536" />
      <ScrollView
        style={styles.wrapper}
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}>

        {
          recommendedSongs.length > 0 && <HomeSection 
            heading="Recommended for you"
            songs={recommendedSongs}
            navigateTo="Music Player"
          />
        }

        <HomeSection 
          heading="Trending Songs"
          songs={topSongs}
          navigateTo="Music Player"
        />

        <HomeSection 
          heading="Emerging Artists"
          songs={topArtists}
          navigateTo="Playlist"
          endpoint="artist"
        />

        <HomeSection 
          heading="Explore Genres"
          songs={topGenres}
          navigateTo="Playlist"
          endpoint="genre"
        />

        <HomeSection 
          heading="Top Playlist"
          songs={topPlaylists}
          navigateTo="Playlist"
          endpoint="playlist"
        />

        <HomeSection 
          heading="Discover Languages"
          songs={musicByLangs}
          navigateTo="Playlist"
          endpoint="lang"
        />

      </ScrollView>
      <AppNavigator navigation={navigation}></AppNavigator>
    </React.Fragment>
  );
}

export default Home;
