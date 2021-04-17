import React from 'react';
import { View, StatusBar, Text, ScrollView, ImageBackground } from 'react-native';
import { styles } from './styles';
import AppNavigator from '../Navbar';
import LinearGradient from 'react-native-linear-gradient';
import Song from "../shared/Song"
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useState } from 'react';

function Playlist() {
    const navigation = useNavigation();
    const [songs, setSongs] = useState([]);
    useEffect(async () => {
        let response = await fetch('https://b0ea0abf15b6.ngrok.io/top/songs');
        response = await response.json();
        setSongs(response);
        // console.log('### response', response);
    }, []);
    return (
        <React.Fragment>
            <StatusBar backgroundColor="#1B0536" />
            <ScrollView
                style={styles.wrapper}
                overScrollMode="never"
                showsHorizontalScrollIndicator={false}>
                <ImageBackground
                    style={styles.imgBackground}
                    source={require('../../assets/album3.jpg')}
                    imageStyle={{ borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}>
                    <LinearGradient
                        colors={['rgba(255, 255, 255, 0)', '#00FFA3']}
                        style={styles.linearGradient}></LinearGradient>
                </ImageBackground>
                <View style={styles.container}>
                    <View style={styles.playlistHeadingContainer}>
                        <View style={styles.playlistDetail}>
                            <Text style={styles.labelText}>EDM 2020's</Text>
                            <View style={styles.subTextContainer}>
                                <Text style={styles.labelSubText}>42 Songs  &bull;  </Text>
                                <Text style={styles.labelSubText}>102 Hours</Text>
                            </View>
                        </View>
                        <ImageBackground
                            style={styles.imgPlayBtn}
                            source={require('../../assets/playbtn.png')}>
                        </ImageBackground>
                    </View>
                    {songs.length < 1 ? <Text>Loading...</Text> : songs.map(song =>
                        <Song
                            key={song.id}
                            title={song.track_name}
                            image={require('../../assets/album5.jpg')}
                            artists={song.track_artist}
                            url="https://cdns-preview-c.dzcdn.net/stream/c-cae4a814e972d68fe00695271871ef40-3.mp3"
                        />
                    )}
                </View>
            </ScrollView>
            <AppNavigator></AppNavigator>
        </React.Fragment>
    );
}

export default Playlist;
