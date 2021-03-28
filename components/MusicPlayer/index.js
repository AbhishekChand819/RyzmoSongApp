import React from 'react';
import {View, StatusBar, Text, ScrollView,ImageBackground} from 'react-native';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Song from "../shared/Song"

function MusicPlayer() {
  return (
    <React.Fragment>
      <StatusBar backgroundColor="#1B0536" />
      <ScrollView
        style={styles.wrapper}
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}>
            <ImageBackground
                style={styles.imgBackground}
                source={require('../../assets/song.jpg')}
                imageStyle={{borderRadius: 200}}>
            </ImageBackground>
            <Text style={styles.SongTitle}>Hawayein</Text>
            <Text style={styles.SongArtist}>Arijit Singh</Text>
            <View style={styles.SongBar}>
                <View style={styles.SongBarFill}></View>
            </View>
            <View style={styles.SongTimeLable}>
                <Text style={styles.SongStartTime}>1:05</Text>
                <Text style={styles.SongEndTime}>2:36</Text>
            </View>
            <View style={styles.SongOptionPanel}>
                <ImageBackground
                    style={styles.SongOptionShuffle}
                    source={require('../../assets/shuffle.png')}>
                </ImageBackground>
                <ImageBackground
                    style={styles.SongOptionBackward}
                    source={require('../../assets/backward.png')}>
                </ImageBackground>
                <ImageBackground
                    style={styles.SongOptionPause}
                    source={require('../../assets/pause.png')}>
                </ImageBackground>
                <ImageBackground
                    style={styles.SongOptionForward}
                    source={require('../../assets/forward.png')}>
                </ImageBackground>
                <ImageBackground
                    style={styles.SongOptionRepeat}
                    source={require('../../assets/repeat.png')}>
                </ImageBackground>
            </View>
            <View style={styles.SongMenuPanel}>
                <ImageBackground
                    style={styles.SongMenuQueue}
                    source={require('../../assets/queue.png')}>
                </ImageBackground>
                <ImageBackground
                    style={styles.SongMenuPlaylist}
                    source={require('../../assets/playlist.png')}>
                </ImageBackground>
                <ImageBackground
                    style={styles.SongMenuHeart}
                    source={require('../../assets/heart.png')}>
                </ImageBackground>
            </View>
            </ScrollView>
    </React.Fragment>
  );
}

export default MusicPlayer;
