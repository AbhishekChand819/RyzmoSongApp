import React from 'react';
import {View, Text,StatusBar,ScrollView,TextInput,Image} from 'react-native';
import {styles} from './styles';
import AppNavigator from '../Navbar';
import search from '../../assets/search1.png';
import Song from "../shared/Song"

function CreatePlaylist() {
  return (
    <React.Fragment>
      <StatusBar backgroundColor="#1B0536" />
      <ScrollView style={styles.wrapper}>
        <Text style={styles.heading}>Create a Playlist</Text>
        <TextInput
          style={styles.NameInput}
          placeholder="Enter the Playlist Name..."
          placeholderTextColor="#FFFFFF"
          >
        </TextInput>
        <View style={styles.PlaylistSongContainer}>
            <Image
            style={styles.SearchIcon}
            source={search}
            />
            <TextInput
            style={styles.SearchInput}
            placeholder="Song or Artist..."
            placeholderTextColor="#FFFFFF"
            >
            </TextInput>
            <View style={styles.SongContainer}>
                <Song
                    title="Hawayein (From 'Jab Har...'"
                    image={require('../../assets/song.jpg')}
                    artists="Arjit Singh"
                    icon="plus">
                </Song>
                <Song
                    title="Hawayein (From 'Jab Har...'"
                    image={require('../../assets/album2.jpg')}
                    artists="Arjit Singh"
                    icon="plus">
                </Song>
                <Song
                    title="Hawayein (From 'Jab Har...'"
                    image={require('../../assets/album1.jpg')}
                    artists="Arjit Singh"
                    icon="plus">
                </Song>
                <Song
                    title="Hawayein (From 'Jab Har...'"
                    image={require('../../assets/album1.jpg')}
                    artists="Arjit Singh"
                    icon="plus">
                </Song>
                <Song
                    title="Hawayein (From 'Jab Har...'"
                    image={require('../../assets/album2.jpg')}
                    artists="Arjit Singh"
                    icon="plus">
                </Song>
                <Song
                    title="Hawayein (From 'Jab Har...'"
                    image={require('../../assets/song.jpg')}
                    artists="Arjit Singh"
                    icon="plus">
                </Song>
                <Song
                    title="Hawayein (From 'Jab Har...'"
                    image={require('../../assets/album2.jpg')}
                    artists="Arjit Singh"
                    icon="plus">
                </Song>
            </View>
        </View>
      </ScrollView>
      <AppNavigator></AppNavigator>
    </React.Fragment>
  );
}

export default CreatePlaylist;
