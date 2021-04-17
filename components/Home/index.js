import React from 'react';
import {View, StatusBar, Text, ScrollView} from 'react-native';
import {styles} from './styles';
import AppNavigator from '../Navbar';
import TrackLabel from '../shared/TrackLabel';

function Home({navigation}) {
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
            <TrackLabel
              text="Dua Lipa"
              image={require('../../assets/dualipa.png')}
              gradient={['rgba(238, 0, 143, 0)', '#D708F9']}
              type="home"
              navigation={navigation}></TrackLabel>
            <TrackLabel
              text="JuiceWRLD"
              image={require('../../assets/juicewrld.png')}
              gradient={['rgba(255, 255, 255, 0)', '#00FFA3']}
              type="home"
              navigation={navigation}></TrackLabel>
            <TrackLabel
              text="Eminem"
              image={require('../../assets/eminem.png')}
              gradient={['rgba(238, 255, 255, 0)', '#0137C7']}
              type="home"
              navigation={navigation}></TrackLabel>
          </ScrollView>
        </View>
        <View style={{paddingTop: 20}}>
          <Text style={styles.labelText}>Top Genres</Text>
          <ScrollView
            horizontal={true}
            overScrollMode="never"
            style={styles.container}
            showsHorizontalScrollIndicator={false}>
            <TrackLabel
              text="Pop"
              image={require('../../assets/pop.png')}
              gradient={['rgba(238, 0, 143, 0)', '#D708F9']}
              type="home"
              ></TrackLabel>
            <TrackLabel
              text="Electro"
              image={require('../../assets/electro.png')}
              gradient={['rgba(255, 255, 255, 0)', '#00FFA3']}
              type="home"></TrackLabel>
            <TrackLabel
              text="Dubstep"
              image={require('../../assets/dubstep.png')}
              gradient={['rgba(238, 255, 255, 0)', '#0137C7']}
              type="home"></TrackLabel>
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
