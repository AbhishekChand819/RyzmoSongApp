import React, {useState} from 'react';
import {View, Text, StatusBar, ScrollView, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import AppNavigator from '../Navbar';
import TrackLabel from '../shared/TrackLabel';
import {useNavigation} from '@react-navigation/native';
import Song from '../shared/Song';

function Library() {
  const navigation = useNavigation();

  return (
    <React.Fragment>
      <StatusBar backgroundColor="#1B0536" />
      <ScrollView style={styles.wrapper}>
        <Text style={styles.heading}>Library</Text>
        <View style={styles.pillsContainer}>
          <View style={styles.pillBoxActive}>
            <Text style={styles.pillText}>Playlist</Text>
          </View>
          <View style={styles.pillBoxInActive}>
            <Text style={styles.pillText}>Artists</Text>
          </View>
          <View style={styles.pillBoxInActive}>
            <Text style={styles.pillText}>Languages</Text>
          </View>
        </View>

        <View style={styles.LibraryContainer}>
          <TouchableOpacity
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
          </TouchableOpacity>
          <TrackLabel
            text="Dua Lipa"
            offlineLabel
            image={require('../../assets/dualipa.png')}
            gradient={['rgba(238, 0, 143, 0)', '#D708F9']}
            type="library"></TrackLabel>
        </View>
      </ScrollView>
      <AppNavigator activeRoute='Library'></AppNavigator>
    </React.Fragment>
  );
}

export default Library;
