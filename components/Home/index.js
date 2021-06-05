import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, StatusBar} from 'react-native';
import {styles} from './styles';
import AppNavigator from '../Navbar';
import TrackLabel from '../shared/TrackLabel';
import {useEffect} from 'react';
import {useState} from 'react';
import {url} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

function HomeSection({heading, songs, navigateTo, endpoint}) {
  const navigation = useNavigation();

  const genreImages = {
    rock:'https://townsquare.media/site/366/files/2021/02/gene_simmons_kiss_fans.jpg',
    'r&b': 'https://www.liveabout.com/thmb/WJLOYVnKQ_kcpGQ3FCPZrPhivZ0=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-10305878021-5bad03d4c9e77c0025482597.jpg',
    pop: 'https://pyxis.nymag.com/v1/imgs/7e3/e4f/a79402462e2e60f8991e7528a024706d82-12-eoy-songs.rhorizontal.w1100.jpg',
    edm: 'https://lh3.googleusercontent.com/proxy/doDJMZT0pjUD2FOrv-lhId87x9o0fnDVFLac3EnoIhpPr4jgq2cKgbepEZ0r_lvS1M4nxXqEcraA9-_p7kwu0G6RStTHoQ3bYA',
    latin: 'https://static.billboard.com/files/media/influential-latin-musicians-juan-gabriel-billboard-650-compressed.jpg',
    rap: 'https://i.dailymail.co.uk/i/pix/2017/09/26/10/08F09E8D00000514-4920738-image-a-1_1506419178390.jpg',
  };

  return (
    <View style={{paddingBottom: 20}}>
      <Text style={styles.labelText}>{heading}</Text>
      <ScrollView
        horizontal={true}
        overScrollMode="never"
        style={styles.container}
        showsHorizontalScrollIndicator={false}>
        {songs.length < 1
          ? [1, 2, 3].map(index => (
              <View key={index} style={{marginTop: 15}}>
                <View
                  style={{
                    width: 160,
                    height: 150,
                    borderRadius: 10,
                    marginRight: 20,
                    backgroundColor: '#6425B1',
                  }}></View>
                <View
                  style={{
                    width: 140,
                    height: 15,
                    marginTop: 10,
                    borderRadius: 10,
                    backgroundColor: '#6425B1',
                  }}></View>
                <View
                  style={{
                    width: 60,
                    height: 10,
                    marginTop: 5,
                    borderRadius: 10,
                    backgroundColor: '#6425B1',
                  }}></View>
              </View>
            ))
          : songs.map((song, index) => {
              if (endpoint === 'genre') {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      navigation.push(navigateTo, {
                        title: song.toUpperCase(),
                        endpoint: `/${endpoint}/${song}`,
                        img: genreImages[song],
                      });
                    }}>
                    <TrackLabel
                      text={song.toUpperCase()}
                      image={genreImages[song]}
                      gradient={
                        index % 4 == 3
                          ? ['rgba(238, 255, 255, 0)', '#0137C7']
                          : index % 4 == 1
                          ? ['rgba(238, 255, 255, 0)', '#D708F9']
                          : index % 4 == 2
                          ? ['rgba(238, 255, 255, 0)', '#fcff47']
                          : ['rgba(255, 255, 255, 0)', '#00FFA3']
                      }
                      type="home"
                      navigation={navigation}
                      subtext={'30 Songs'}
                    />
                  </TouchableOpacity>
                );
              } else if (endpoint === 'lang') {
                const {displayName, lang, img} = song;
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      navigation.push(navigateTo, {
                        title: displayName,
                        endpoint: `/${endpoint}/${lang}`,
                        img,
                      });
                    }}>
                    <TrackLabel
                      text={displayName}
                      image={img}
                      gradient={
                        index % 4 == 2
                          ? ['rgba(238, 255, 255, 0)', '#0137C7']
                          : index % 4 == 0
                          ? ['rgba(238, 255, 255, 0)', '#D708F9']
                          : index % 4 == 3
                          ? ['rgba(238, 255, 255, 0)', '#fcff47']
                          : ['rgba(255, 255, 255, 0)', '#00FFA3']
                      }
                      type="home"
                      navigation={navigation}
                      subtext={'30 Songs'}
                    />
                  </TouchableOpacity>
                );
              } else {
                let {
                  track_id,
                  track_name,
                  track_preview,
                  track_artist,
                  artist_image,
                  playlist_name,
                } = song;
                if (endpoint === 'playlist') {
                  track_artist = playlist_name;
                }

                // Dhyan diya kro jab code kr rhe ho toh
                // Yahan hum empty gaane hta rhe h
                if (!track_preview && navigateTo === 'Music Player')
                  return null;

                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      navigation.push(
                        navigateTo,
                        navigateTo === 'Music Player'
                          ? {
                              id: track_id,
                              title: track_name,
                              artists: track_artist,
                              image: artist_image,
                              url: track_preview,
                            }
                          : {
                              title: track_artist,
                              endpoint: `/${endpoint}/${track_artist}`,
                              img: artist_image,
                            },
                      );
                    }}>
                    <TrackLabel
                      text={
                        navigateTo === 'Music Player'
                          ? track_name
                          : track_artist
                      }
                      image={artist_image}
                      gradient={
                        heading == 'Trending Songs'
                          ? index % 4 == 1
                            ? ['rgba(238, 255, 255, 0)', '#0137C7']
                            : index % 4 == 2
                            ? ['rgba(238, 255, 255, 0)', '#D708F9']
                            : index % 4 == 0
                            ? ['rgba(238, 255, 255, 0)', '#fcff47']
                            : ['rgba(255, 255, 255, 0)', '#00FFA3']
                          : index % 4 == 0
                          ? ['rgba(238, 255, 255, 0)', '#0137C7']
                          : index % 4 == 2
                          ? ['rgba(238, 255, 255, 0)', '#D708F9']
                          : index % 4 == 3
                          ? ['rgba(238, 255, 255, 0)', '#fcff47']
                          : ['rgba(255, 255, 255, 0)', '#00FFA3']
                      }
                      type="home"
                      navigation={navigation}
                      subtext={
                        endpoint === 'playlist' || endpoint === 'artist'
                          ? '30 Songs'
                          : track_artist
                      }
                    />
                  </TouchableOpacity>
                );
              }
            })}
      </ScrollView>
    </View>
  );
}

function Home() {
  const navigation = useNavigation();
  const [topArtists, setTopArtists] = useState([]);
  const [topSongs, setTopSongs] = useState([]);
  const [topGenres, setTopGenres] = useState([]);
  const [topPlaylists, setTopPlaylists] = useState([]);
  const [recommendedSongs, setRecommendedSongs] = useState([]);

  const musicByLangs = [
    {
      displayName: 'English',
      lang: 'en',
      img: 'https://www.nme.com/wp-content/uploads/2017/12/GettyImages-626378200_anne_marie_1000.jpg',
    },
    {
      displayName: 'Hindi',
      lang: 'hi',
      img: 'https://i.tribune.com.pk/media/images/2061982-kumarsanupadamshri-1569064850/2061982-kumarsanupadamshri-1569064850.jpg',
    },
    {
      displayName: 'Italian',
      lang: 'it',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe48Y6OMPNh69CVmLojFg-Qx8AkDbCsdD8SQ&usqp=CAU',
    },
    {
      displayName: 'Spanish',
      lang: 'es',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpxDkfSJI0J1H8VPAOXKOalxTxelKXpQctFDN4UqRQTg0Qqy7ffybrtjGFOobTfKoKIbg&usqp=CAU',
    },
    {
      displayName: 'French',
      lang: 'fr',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMKFTKqWjW03-Fyr6h8dkJuXerH9W334lcSQ&usqp=CAU',
    },
  ];

  useEffect(async () => {
    const user_id = await AsyncStorage.getItem('user_id')
    fetch(`${url}/top/songs`)
      .then(res => res.json())
      .then(res => setTopSongs(res));
    fetch(`${url}/top/artists`)
      .then(res => res.json())
      .then(res => setTopArtists(res));
    fetch(`${url}/genres`)
      .then(res => res.json())
      .then(res => setTopGenres(res));
    fetch(`${url}/top/playlists`)
      .then(res => res.json())
      .then(res => setTopPlaylists(res));
    fetch(`${url}/recommend/${user_id}`)
      .then(res => res.json())
      .then(res => setRecommendedSongs(res));
  }, []);

  return (
    <React.Fragment>
      <StatusBar backgroundColor="#1B0536" />
      <ScrollView
        style={styles.wrapper}
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}>
        <LinearGradient
          colors={['#D708F9', 'rgba(255, 255, 255, 0)']}
          style={{
            width: '100%',
            top: 0,
            height: 250,
            position: 'absolute',
            opacity: 0.25,
          }}></LinearGradient>

        <View style={{paddingLeft: 15, paddingTop: 10}}>
          {recommendedSongs.length > 0 && (
            <HomeSection
              heading="Recommended for you"
              songs={recommendedSongs}
              navigateTo="Music Player"
            />
          )}

          <HomeSection
            heading="Trending Songs"
            songs={topSongs}
            navigateTo="Music Player"
          />

          <HomeSection
            heading="Emerging Artists"
            songs={topArtists}
            navigateTo="Playlist"
            endpoint="artist"
          />

          <HomeSection
            heading="Explore Genres"
            songs={topGenres}
            navigateTo="Playlist"
            endpoint="genre"
          />

          <HomeSection
            heading="Popular Albums"
            songs={topPlaylists}
            navigateTo="Playlist"
            endpoint="playlist"
          />

          <HomeSection
            heading="Discover Languages"
            songs={musicByLangs}
            navigateTo="Playlist"
            endpoint="lang"
          />
        </View>
      </ScrollView>
      <AppNavigator activeRoute='Home'></AppNavigator>
    </React.Fragment>
  );
}

export default Home;
