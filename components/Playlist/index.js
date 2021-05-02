import React from 'react';
import { View, StatusBar, Text, ScrollView, ImageBackground } from 'react-native';
import { styles } from './styles';
import AppNavigator from '../Navbar';
import LinearGradient from 'react-native-linear-gradient';
import Song from "../shared/Song"
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useState } from 'react';
import { url } from "../../constants"
import { useRoute } from '@react-navigation/native';


function Playlist() {
    const navigation = useNavigation();
    const [songs, setSongs] = useState([]);
    const route = useRoute();
    useEffect(async () => {
        let response = await fetch(`${url}${route.params.endpoint}`);
        response = await response.json();
        setSongs(response);
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
                    source={route.params.img}
                    imageStyle={{ borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}>
                    <LinearGradient
                        colors={['rgba(255, 255, 255, 0)', '#00FFA3']}
                        style={styles.linearGradient}></LinearGradient>
                </ImageBackground>
                <View style={styles.container}>
                    <View style={styles.playlistHeadingContainer}>
                        <View style={styles.playlistDetail}>
                            <Text style={styles.labelText}>{route.params.title}</Text>
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
                    {songs.length < 1 ? <Text>Loading...</Text> : songs.map(song => {
                        return <Song
                            key={song.track_id}
                            title={song.track_name}
                            image={song.artist_image.length>1 ? {uri : song.artist_image} : require('../../assets/album5.jpg')}
                            artists={song.track_artist}
                            url={song.track_preview}
                        />
                    })}
                </View>
            </ScrollView>
            <AppNavigator></AppNavigator>
        </React.Fragment>
    );
}

export default Playlist;
