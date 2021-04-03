import React from 'react';
import {View, Text,StatusBar,ScrollView,TextInput,Image} from 'react-native';
import {styles} from './styles';
import AppNavigator from '../Navbar';
import search from '../../assets/search1.png';
import TrackLabel from '../shared/TrackLabel';

function Library() {
  return (
    <React.Fragment>
      <StatusBar backgroundColor="#1B0536" />
      <ScrollView style={styles.wrapper}>
        <Text style={styles.heading}>Library</Text>
        <Image
          style={styles.SearchIcon}
          source={search}
        />
        <TextInput
          style={styles.SearchInput}
          placeholder="Search in Playlist..."
          placeholderTextColor="#E9D5E1"
          >
        </TextInput>
        <View style={styles.pillsContainer}>
            <View style={styles.pillBoxActive}>
                <Text style={styles.pillText}>Playlist</Text>
            </View>
            <View style={styles.pillBoxInActive}>
                <Text style={styles.pillText}>Artists</Text>
            </View>
            <View style={styles.pillBoxInActive}>
                <Text style={styles.pillText}>Albums</Text>
            </View>
        </View>
        <View style={styles.LibraryContainer}>
            <TrackLabel
                text="Create a playlist"
                image={require('../../assets/plus.png')}
                type='create'></TrackLabel>
            <TrackLabel
                text="Dua Lipa"
                image={require('../../assets/dualipa.png')}
                gradient={['rgba(238, 0, 143, 0)', '#D708F9']}
                type='library'></TrackLabel>
            <TrackLabel
                text="Year 2019"
                image={require('../../assets/arijit.png')}
                gradient={['rgba(255, 255, 255, 0)', '#00FFA3']}
                type='library'></TrackLabel>
            <TrackLabel
                text="Year 2018"
                image={require('../../assets/edsheeran.png')}
                gradient={['rgba(238, 255, 255, 0)', '#0137C7']}
                type='library'></TrackLabel>
            <TrackLabel
                text="JuiceWRLD"
                image={require('../../assets/juicewrld.png')}
                gradient={['rgba(255, 255, 255, 0)', '#00FFA3']}
                type='library'></TrackLabel>
            <TrackLabel
                text="Eminem"
                image={require('../../assets/eminem.png')}
                gradient={['rgba(238, 255, 255, 0)', '#0137C7']}
                type='library'></TrackLabel>
        </View>
      </ScrollView>
      <AppNavigator></AppNavigator>
    </React.Fragment>
  );
}

export default Library;
