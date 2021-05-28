import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import {styles} from './styles';
import AppNavigator from '../Navbar';
import search from '../../assets/search1.png';
import GenreLabel from '../shared/SearchGenreLabel';
import {url} from '../../constants';
import Song from '../shared/Song';

function Search({navigation}) {
  const [topGenres, setTopGenres] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(async () => {
    fetch(`${url}/genres`)
      .then(res => res.json())
      .then(res => setTopGenres(res));
  }, []);

  const handleSearch = async text => {
    console.log(text);
    if (text.length > 0) {
      fetch(`${url}/search/${text}`)
        .then(res => res.json())
        .then(res => setSearchResults(res));
    } else {
      setSearchResults([]);
    }
  };

  const genreImages = {
    rock: require('../../assets/rock.png'),
    'r&b': require('../../assets/r&b.png'),
    pop: require('../../assets/pop.png'),
    edm: require('../../assets/edm.png'),
    latin: require('../../assets/latin.png'),
    rap: require('../../assets/rap.png'),
  };

  return (
    <React.Fragment>
      <StatusBar backgroundColor="#1B0536" />
      <ScrollView style={styles.wrapper}>
        <Text style={styles.heading}>Search</Text>
        <Image style={styles.SearchIcon} source={search} />
        <TextInput
          style={styles.SearchInput}
          placeholder="Song or Artist..."
          placeholderTextColor="#E9D5E1"
          onChangeText={text => handleSearch(text)}></TextInput>
        {searchResults.length > 0 ? (
          <View style={styles.container}>
            {searchResults.map(song => (
              <Song
                key={song.track_id}
                title={song.track_name}
                image={
                  song.artist_image.length > 1
                    ? {uri: song.artist_image}
                    : require('../../assets/album5.jpg')
                }
                artists={song.track_artist}
                url={song.track_preview}
              />
            ))}
          </View>
        ) : (
          <View style={styles.genreContainer}>
            {topGenres.map((genre, index) => (
              <GenreLabel
                key={index}
                text={genre.toUpperCase()}
                image={genreImages[genre]}></GenreLabel>
            ))}
          </View>
        )}
      </ScrollView>
      <AppNavigator navigation={navigation}></AppNavigator>
    </React.Fragment>
  );
}

export default Search;
