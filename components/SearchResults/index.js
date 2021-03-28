import React from 'react';
import {View, Text,StatusBar,ScrollView,TextInput,Image} from 'react-native';
import {styles} from './styles';
import AppNavigator from '../Navbar';
import BackIcon from '../../assets/Back.png';
import CrossIcon from '../../assets/close.png';
import Song from "../shared/Song"

function SearchResults() {
  return (
    <React.Fragment>
      <StatusBar backgroundColor="#1B0536" />
      <ScrollView style={styles.wrapper}>
        <Image
          style={styles.BackIcon}
          source={BackIcon}
        />
        <Image
          style={styles.CrossIcon}
          source={CrossIcon}
        />
        <TextInput
          value="Hawayein"
          style={styles.SearchInput}
          >
        </TextInput>
        <View style={styles.container}>
            <Song
                title="Hawayein (From 'Jab Har...'"
                image={require('../../assets/song.jpg')}
                artists="Arjit Singh">
            </Song>
            <Song
                title="Hawayein (From 'Jab Har...'"
                image={require('../../assets/album2.jpg')}
                artists="Arjit Singh">
            </Song>
            <Song
                title="Hawayein (From 'Jab Har...'"
                image={require('../../assets/album1.jpg')}
                artists="Arjit Singh">
            </Song>
        </View>
      </ScrollView>
      <AppNavigator></AppNavigator>
    </React.Fragment>
  );
}

export default SearchResults;
