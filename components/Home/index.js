import React from 'react';
import {View, StatusBar, Text, ScrollView} from 'react-native';
import {styles} from './styles';
import AppNavigator from '../Navbar';
import TrackLabel from '../shared/TrackLabel';
import { useEffect } from 'react';
import { useState } from 'react';
import { url } from "../../constants"

function Home({navigation}) {
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
        <View style={{paddingTop: 10}}>
          <Text style={styles.labelText}>Artists you should listen</Text>
          <ScrollView
            horizontal={true}
            overScrollMode="never"
            style={styles.container}
            showsHorizontalScrollIndicator={false}>
            {topArtists.length < 1 ? <Text>Loading...</Text> : topArtists.map((topArtist,index) => {
              return <TrackLabel
                        text={topArtist.track_artist}
                        image={topArtist.artist_image.length>1 ? {uri : topArtist.artist_image} : require('../../assets/album5.jpg')}
                        gradient={index%3==0 ? ['rgba(238, 0, 143, 0)', '#D708F9']: index%3==1 ? ['rgba(255, 255, 255, 0)', '#00FFA3'] :['rgba(238, 255, 255, 0)', '#0137C7'] }
                        type="home"
                        navigation={navigation}></TrackLabel>
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
              console.log(topGenre)
              // const path = ;
              return <TrackLabel
                        text={topGenre.toUpperCase()}
                        image={genreImages[topGenre]}
                        gradient={index%3==0 ? ['rgba(238, 0, 143, 0)', '#D708F9']: index%3==1 ? ['rgba(255, 255, 255, 0)', '#00FFA3'] :['rgba(238, 255, 255, 0)', '#0137C7'] }
                        type="home"
                        navigation={navigation}></TrackLabel>
            })}
          </ScrollView>
        </View>
        <View style={{paddingTop: 20, paddingBottom: 20}}>
          <Text style={styles.labelText}>Top Songs by Year</Text>
          <ScrollView
            horizontal={true}
            overScrollMode="never"
            style={styles.container}
            showsHorizontalScrollIndicator={false}>
            <TrackLabel
              text="Year 2020"
              image={require('../../assets/neha.png')}
              gradient={['rgba(238, 0, 143, 0)', '#D708F9']}
              type="home"></TrackLabel>
            <TrackLabel
              text="Year 2019"
              image={require('../../assets/arijit.png')}
              gradient={['rgba(255, 255, 255, 0)', '#00FFA3']}
              type="home"></TrackLabel>
            <TrackLabel
              text="Year 2018"
              image={require('../../assets/edsheeran.png')}
              gradient={['rgba(238, 255, 255, 0)', '#0137C7']}
              type="home"></TrackLabel>
          </ScrollView>
        </View>
      </ScrollView>
      <AppNavigator navigation={navigation}></AppNavigator>
    </React.Fragment>
  );
}

export default Home;
