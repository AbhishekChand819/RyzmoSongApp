import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';
import {styles} from './styles';
import AppNavigator from '../Navbar';
import search from '../../assets/search1.png';
import GenreLabel from '../shared/SearchGenreLabel';
import {url} from '../../constants';
import Song from '../shared/Song';
import { useDebouncedCallback } from 'use-debounce';

function Search({navigation}) {
  const [topGenres, setTopGenres] = useState([]);
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    fetch(`${url}/genres`)
      .then(res => res.json())
      .then(res => setTopGenres(res));
  }, []);

  const debounced = useDebouncedCallback(
    (value) => {
      handleSearch(value);
    },
    600
  );

  const handleSearch = async text => {
    if (text.length > 0) {
      setLoading(true);
      fetch(`${url}/search/${text}`)
        .then(res => res.json())
        .then(res => {
          setSearchResults(res);
          setLoading(false);
        });
    } else {
      setSearchResults(null);
    }
  };

  const genreImages = {
    rock:'https://townsquare.media/site/366/files/2021/02/gene_simmons_kiss_fans.jpg',
    'r&b': 'https://www.liveabout.com/thmb/WJLOYVnKQ_kcpGQ3FCPZrPhivZ0=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-10305878021-5bad03d4c9e77c0025482597.jpg',
    pop: 'https://pyxis.nymag.com/v1/imgs/7e3/e4f/a79402462e2e60f8991e7528a024706d82-12-eoy-songs.rhorizontal.w1100.jpg',
    edm: 'https://i.ytimg.com/vi/DBW-Rq4iEhQ/maxresdefault.jpg',
    latin: 'https://static.billboard.com/files/media/influential-latin-musicians-juan-gabriel-billboard-650-compressed.jpg',
    rap: 'https://i.dailymail.co.uk/i/pix/2017/09/26/10/08F09E8D00000514-4920738-image-a-1_1506419178390.jpg',
    bollywood:'https://curlytales.com/wp-content/uploads/2017/07/bollywood-e1505475571564.jpg',
    dance:'https://res-1.cloudinary.com/istd/image/upload/c_lfill,dpr_1,g_auto,h_416,w_792/f_auto,q_auto/v1/dance%20genre%20images/tap/tap_genre_faculty_image_3_klffoi'
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
          onChangeText={(value) => debounced(value)}></TextInput>
{loading && 
<View style={styles.container}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(index => (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginBottom: 10,
                }}>
                <View style={{width: 50, height: 45, backgroundColor: "#6425B1", opacity: 0.5}}></View>
                <View
                  style={{
                    display: 'flex',
                    width: '80%',
                    flexDirection: 'column',
                    marginLeft: 15
                  }}>
                  <View
                    style={{
                      display: 'flex',
                      height: 17,
                      marginTop: 6,
                      backgroundColor: "#6425B1",
                      opacity: 0.5
                    }}></View>
                  <View
                    style={{
                      display: 'flex',
                      width: '30%',
                      height: 12,
                      marginTop: 5,
                      backgroundColor: "#6425B1",
                      opacity: 0.5
                    }}></View>
                </View>
              </View>
          ))
        }
</View>}

        {searchResults ? (
          <View style={styles.container}>
            {searchResults.length > 0 ? searchResults.map(song => (
              <Song
                id={song.track_id}
                key={song.track_id}
                title={song.track_name}
                image={song.artist_image}
                artists={song.track_artist}
                url={song.track_preview}
              />
            )) : <View>
              <Text style={styles.noResultsFound}>No Results Found ...</Text>
              </View>}
          </View>
        ) : (
          <View style={styles.genreContainer}>
            {topGenres.map((genre, index) => (
            <TouchableOpacity key={index}
              onPress={() => {
                navigation.push('Playlist', {
                  title: genre.genre.toUpperCase(),
                  endpoint: `/genre/${genre.genre}`,
                  img: genreImages[genre.genre],
                });
              }}>
              <GenreLabel
                key={index}
                text={genre.genre.toUpperCase()}
                image={genreImages[genre.genre]}></GenreLabel>
            </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
      <AppNavigator activeRoute='Search'></AppNavigator>
    </React.Fragment>
  );
}

export default Search;
