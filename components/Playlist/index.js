import React from 'react';
import { View, StatusBar, Text, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import AppNavigator from '../Navbar';
import LinearGradient from 'react-native-linear-gradient';
import Song from "../shared/Song"
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useState } from 'react';
import { url } from "../../constants"
import { useRoute } from '@react-navigation/native';
import SkeletonPlaceholder  from 'react-native-skeleton-placeholder';

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
                        <TouchableOpacity onPress={() => {
                            if(songs.length > 0) {
                                navigation.push('Music Player', {
                                    id: songs[0].track_id,
                                    title: songs[0].track_name,
                                    artists: songs[0].track_artist,
                                    image: songs[0].artist_image.length>1 ? {uri : songs[0].artist_image} : require('../../assets/album5.jpg'),
                                    url: songs[0].track_preview, 
                                    playlist: songs
                                });
                            }
                        }}>
                            <ImageBackground
                                style={styles.imgPlayBtn}
                                source={require('../../assets/playbtn.png')}>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    {songs.length < 1 ? [1,2,3,4,5,6].map((index)=>
                        <SkeletonPlaceholder key={index} speed={2000} backgroundColor='#6425B1' highlightColor="#B62EAD">
                        <View style={{display:"flex",flexDirection:'row',marginBottom:10}}>
                            <View style={{ width:50,height:45}}></View>
                            <View style={{display:'flex',width:"80%",flexDirection:'column',marginLeft:15}}>
                                <View style={{display:'flex',height:17,marginTop:6}}></View>
                                <View style={{display:'flex',width:"30%",height:12,marginTop:5}}></View>
                            </View>
                        </View>
                        </SkeletonPlaceholder>) 
                    : songs.map(song => {
                        return <Song
                            key={song.track_id}
                            id={song.track_id}
                            title={song.track_name}
                            image={song.artist_image.length>1 ? {uri : song.artist_image} : require('../../assets/album5.jpg')}
                            artists={song.track_artist}
                            url={song.track_preview}
                            playlist={songs}
                        />
                    })}
                </View>
            </ScrollView>
            <AppNavigator navigation={navigation}></AppNavigator>
        </React.Fragment>
    );
}

export default Playlist;
