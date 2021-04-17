import { useRoute } from '@react-navigation/native';
import React from 'react';
import {View, StatusBar, Text, ScrollView,ImageBackground} from 'react-native';
import {styles} from './styles';
import TrackPlayer, {
    useTrackPlayerProgress,
    usePlaybackState,
    useTrackPlayerEvents
  } from "react-native-track-player";

function MusicPlayer() {
    const route = useRoute();
    const start = async () => {
        // Set up the player
        await TrackPlayer.setupPlayer({});

        // Add a track to the queue
        await TrackPlayer.add({
            id: 'trackId',
            url:'https://cdns-preview-c.dzcdn.net/stream/c-cae4a814e972d68fe00695271871ef40-3.mp3',
            title: 'Track Title',
            artist: 'Track Artist',
            // artwork: require('track.png')
        });
    
        // Start playing it
        await TrackPlayer.play();

    };
    start();
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
            <Text style={styles.SongTitle}>{route.params.title}</Text>
            <Text style={styles.SongArtist}>{route.params.artists}</Text>
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
