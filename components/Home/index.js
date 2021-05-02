import React from 'react';
import {View, StatusBar, Text, ScrollView, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import AppNavigator from '../Navbar';
import TrackLabel from '../shared/TrackLabel';
import { useEffect } from 'react';
import { useState } from 'react';
import { url } from "../../constants"
import { useNavigation } from '@react-navigation/native';

function Home() {
  const navigation = useNavigation();
  const [topArtists, setTopArtists] = useState([]);
  const [topGenres, setTopGenres] = useState([]);
  const genreImages={
    "rock": require("../../assets/rock.png"),
    "r&b": require("../../assets/r&b.png"),
    "pop": require("../../assets/pop.png"),
    "edm": require("../../assets/edm.png"),
    "latin": require("../../assets/latin.png"),
    "rap": require("../../assets/rap.png")
  }
  const musicByLangs=[
    {"displayName":"English","lang":"en","img": {uri : 'https://www.nme.com/wp-content/uploads/2017/12/GettyImages-626378200_anne_marie_1000.jpg'}},
    {"displayName":"Hindi","lang":"hi","img":{uri : 'https://i.tribune.com.pk/media/images/2061982-kumarsanupadamshri-1569064850/2061982-kumarsanupadamshri-1569064850.jpg'}},
    {"displayName":"Italian","lang":"it","img":{uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe48Y6OMPNh69CVmLojFg-Qx8AkDbCsdD8SQ&usqp=CAU'}},
    {"displayName":"Spanish","lang":"es","img":{uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpxDkfSJI0J1H8VPAOXKOalxTxelKXpQctFDN4UqRQTg0Qqy7ffybrtjGFOobTfKoKIbg&usqp=CAU'}},
    {"displayName":"French","lang":"fr","img":{uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMKFTKqWjW03-Fyr6h8dkJuXerH9W334lcSQ&usqp=CAU'}}
  ]

  useEffect(async () => {
      let response = await fetch(`${url}/top/artists`);
      let response2 = await fetch(`${url}/genres`);
      response = await response.json();
      response2 = await response2.json();
      setTopArtists(response);
      setTopGenres(response2);
  }, []);
  return (
    <React.Fragment>
      <StatusBar backgroundColor="#1B0536" />
      <ScrollView
        style={styles.wrapper}
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}>
        <View>
          <Text style={styles.labelText}>Artists you should listen</Text>
          <ScrollView
            horizontal={true}
            overScrollMode="never"
            style={styles.container}
            showsHorizontalScrollIndicator={false}>
            {topArtists.length < 1 ? <Text>Loading...</Text> : topArtists.map((topArtist,index) => {
              return <TouchableOpacity onPress={()=> navigation.push('Playlist',{title:topArtist.track_artist,endpoint:`/artist/${topArtist.track_artist}`,img:topArtist.artist_image.length>1 ? {uri : topArtist.artist_image} : require('../../assets/album5.jpg')})}>
                <TrackLabel
                          text={topArtist.track_artist}
                          image={topArtist.artist_image.length>1 ? {uri : topArtist.artist_image} : require('../../assets/album5.jpg')}
                          gradient={index%3==0 ? ['rgba(238, 0, 143, 0)', '#D708F9']: index%3==1 ? ['rgba(255, 255, 255, 0)', '#00FFA3'] :['rgba(238, 255, 255, 0)', '#0137C7'] }
                          type="home"
                          navigation={navigation}>
                </TrackLabel>
              </TouchableOpacity>
                })}
          </ScrollView>
        </View>
        <View style={{paddingTop: 20}}>
          <Text style={styles.labelText}>Top Genres</Text>
          <ScrollView
            horizontal={true}
            overScrollMode="never"
            style={styles.container}
            showsHorizontalScrollIndicator={false}>
            {topGenres.length < 1 ? <Text>Loading...</Text> : topGenres.map((topGenre,index) => {
              return <TouchableOpacity onPress={()=> navigation.push('Playlist',{title:topGenre.toUpperCase(),endpoint:`/genre/${topGenre}`,img:genreImages[topGenre]})}> 
                <TrackLabel
                        text={topGenre.toUpperCase()}
                        image={genreImages[topGenre]}
                        gradient={index%3==0 ? ['rgba(238, 255, 255, 0)', '#0137C7'] : index%3==1 ?['rgba(238, 0, 143, 0)', '#D708F9'] :['rgba(255, 255, 255, 0)', '#00FFA3'] }
                        type="home"
                        navigation={navigation}/>
                </TouchableOpacity>
            })}
          </ScrollView>
        </View>
        <View style={{paddingTop: 20, paddingBottom: 20}}>
          <Text style={styles.labelText}>Discover Languages</Text>
          <ScrollView
            horizontal={true}
            overScrollMode="never"
            style={styles.container}
            showsHorizontalScrollIndicator={false}>
            {musicByLangs.length < 1 ? <Text>Loading...</Text> : musicByLangs.map((musicByLang,index) => {
              return <TouchableOpacity onPress={()=> navigation.push('Playlist',{title:musicByLang.displayName,endpoint:`/lang/${musicByLang.lang}`,img:musicByLang.img})}>
                <TrackLabel
                        text={musicByLang.displayName}
                        image={musicByLang.img}
                        gradient={index%3==0 ? ['rgba(238, 0, 143, 0)', '#D708F9']: index%3==1 ? ['rgba(255, 255, 255, 0)', '#00FFA3'] :['rgba(238, 255, 255, 0)', '#0137C7'] }
                        type="home"
                        navigation={navigation}/>
                </TouchableOpacity>
            })}
          </ScrollView>
        </View>
      </ScrollView>
      <AppNavigator navigation={navigation}></AppNavigator>
    </React.Fragment>
  );
}

export default Home;
