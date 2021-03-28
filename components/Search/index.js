import React from 'react';
import {View, Text,StatusBar,ScrollView,TextInput,Image} from 'react-native';
import {styles} from './styles';
import AppNavigator from '../Navbar';
import search from '../../assets/search1.png';
import GenreLabel from '../shared/SearchGenreLabel';

function Search() {
  return (
    <React.Fragment>
      <StatusBar backgroundColor="#1B0536" />
      <ScrollView style={styles.wrapper}>
        <Text style={styles.heading}>Search</Text>
        <Image
          style={styles.SearchIcon}
          source={search}
        />
        <TextInput
          style={styles.SearchInput}
          placeholder="Song or Artist..."
          placeholderTextColor="#E9D5E1"
          >
        </TextInput>
        <View style={styles.container}>
          <GenreLabel
            text="EDM"
            image={require('../../assets/edm.png')}></GenreLabel>
          <GenreLabel
            text="ROCK"
            image={require('../../assets/rock.png')}></GenreLabel>
          <GenreLabel
            text="JAZZ"
            image={require('../../assets/jazz.png')}></GenreLabel>
          <GenreLabel
            text="DUBSTEP"
            image={require('../../assets/dubstep.png')}></GenreLabel>
          <GenreLabel
            text="R&B"
            image={require('../../assets/r&b.png')}></GenreLabel>
          <GenreLabel
            text="TECHNO"
            image={require('../../assets/techno.png')}></GenreLabel>
          <GenreLabel
            text="COUNTRY"
            image={require('../../assets/country.png')}></GenreLabel>
          <GenreLabel
            text="ELECTRO"
            image={require('../../assets/electro.png')}></GenreLabel>
          <GenreLabel
            text="INDIE ROCK"
            image={require('../../assets/indierock.png')}></GenreLabel>
          <GenreLabel
            text="POP"
            image={require('../../assets/pop.png')}></GenreLabel>
        </View>
      </ScrollView>
      <AppNavigator></AppNavigator>
    </React.Fragment>
  );
}

export default Search;
