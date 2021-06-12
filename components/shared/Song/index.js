import React, {useState} from 'react';
import {View, Text, ImageBackground,Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';

function Song({id, title, image, artists, icon, url, route, isPlaying, playlistName}) {
  const [like, setLike] = useState(false);

  useEffect(async () => {
    const liked = await AsyncStorage.getItem(id);
    setLike(liked !== null);
  }, [id]);

  const navigation = useNavigation();
  if (icon == 'plus') {
    return (
      <React.Fragment>
        <View style={styles.subSongContainer}>
          <ImageBackground
            style={styles.imgSong}
            source={{uri: image}}></ImageBackground>
          <View style={styles.subLabelContainer}>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.labelSongTitle}>
              {title}
            </Text>
            <Text style={styles.labelSongArtist}>{artists}</Text>
          </View>
          <View style={styles.songOption}>
            <ImageBackground
              style={styles.imgAdd}
              source={require('../../../assets/add.png')}></ImageBackground>
          </View>
        </View>
      </React.Fragment>
    );
  } else {
    // dhyan se coding kra kr, code ki line nhi dikhti ek
    // yahan hum agar song ka url nhi h toh use hta dete h
    if (!url) return null;

    return (
      <View style={styles.subSongContainer}>
        <TouchableOpacity
          style={{display: 'flex', flexDirection: 'row'}}
          onPress={() => {
            if (route == 'queue') {
              navigation.pop(1);
              navigation.push('Music Player', {
                id,
                title,
                artists,
                image,
                url
              });
            } else
              navigation.push('Music Player', {
                id,
                title,
                artists,
                image,
                url
              });
          }}>
          <ImageBackground
            style={styles.imgSong}
            source={image.length > 1 ? 
              {uri: image} : 
              require('../../../assets/album5.jpg')}></ImageBackground>
          <View style={styles.subLabelContainer}>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.labelSongTitle}>
              {title}
            </Text>
            <Text 
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.labelSongArtist}>
              {artists}
              &nbsp;&nbsp;{isPlaying &&
              <Image style={{width: 15, height:15}} source={require('../../../assets/audio.png')}/>}
              &nbsp;{playlistName && `(${playlistName})`}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.songOption}>
          <TouchableOpacity
            onPress={async () => {
              if (!like) {
                await AsyncStorage.setItem(
                  id,
                  JSON.stringify({
                    track_name:title,
                    track_artist:artists,
                    artist_image:image,
                    track_preview:url,
                  }),
                );
              } else {
                await AsyncStorage.removeItem(id);
              }
              setLike(!like);
            }}>
            {like ? (
              <ImageBackground
                style={styles.imgHeart}
                source={require('../../../assets/heartfill.png')}></ImageBackground>
            ) : (
              <ImageBackground
                style={styles.imgHeart}
                source={require('../../../assets/heartempty.png')}></ImageBackground>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Song;
