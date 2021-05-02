import { useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import React from 'react';
import { View, StatusBar, Text, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { url } from "../../constants"

import TrackPlayer from 'react-native-track-player';

import { useState,useRef } from 'react';

function MusicPlayer() {
    const [isPlaying, setisPlaying] = useState(true);
    const [currentTime, setcurrentTime] = useState(0);
    const [songTitle,setSongTitle] = useState('')
    const [songArtist,setSongArtist] = useState('')
    const [songImg,setSongImg] = useState('')
    const route = useRoute();
    const isMounted = useRef(false);
    async function getInfo(){
        let info = await TrackPlayer.getPosition()
        info = Math.floor(info)
        setcurrentTime(info);
    }
    useEffect(async () => {
        let response = await fetch(`${url}/recommend/song/${route.params.title}`);
        response = await response.json();
        response.map(async (song) => {
            if(song.track_preview.length>1)
                await TrackPlayer.add({
                    id: song.track_name,
                    url: song.track_preview,
                    title: song.track_name,
                    artist: song.track_artist,
                    artwork: {"uri": song.artist_image}
                });
        })
    }, []);
    useEffect(async() => {
        isMounted.current = true;
        const listener = TrackPlayer.addEventListener(
            'playback-track-changed',
            async (data) => {
                const track = await TrackPlayer.getTrack(data.nextTrack);
                setSongTitle(track.title);
                setSongArtist(track.artist);
                setSongImg(track.artwork);
            }
        );
        TrackPlayer.updateOptions({
            stopWithApp: true,
          });
        TrackPlayer.reset();
        await TrackPlayer.add({
                id: route.params.title,
                url: route.params.url,
                title: route.params.title,
                artist: route.params.artists,
                artwork: route.params.image
            });
        TrackPlayer.play();
        let myInterval = setInterval(()=>{
            if(isMounted.current) getInfo();
        },1000)
        return () => {isMounted.current =false; 
            clearInterval(myInterval);
            listener.remove()
        }
    }, [route])

    return (
        <React.Fragment>
            <StatusBar backgroundColor="#1B0536" />
            <ScrollView
                style={styles.wrapper}
                overScrollMode="never"
                showsHorizontalScrollIndicator={false}>
                <ImageBackground
                    style={styles.imgBackground}
                    source={songImg}
                    key={songTitle}
                    imageStyle={{ borderRadius: 200 }}/>
                <Text style={styles.SongTitle}>{songTitle}</Text>
                <Text style={styles.SongArtist}>{songArtist}</Text>
                <View style={styles.SongBar}>
                    <View style={[styles.SongBarFill, {width:(currentTime/30)*100 + "%"}]}></View>
                </View>
                <View style={styles.SongTimeLable}>
                    <Text style={styles.SongStartTime}>{currentTime<10? "0:0"+ currentTime : "0:"+currentTime}</Text>
                    <Text style={styles.SongEndTime}>0:30</Text>
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
                    {isPlaying ?
                        <TouchableOpacity onPress={() => { setisPlaying(false); TrackPlayer.pause() }}>
                            <ImageBackground
                                style={styles.SongOptionPause}
                                source={require('../../assets/pause.png')}>
                            </ImageBackground>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => { setisPlaying(true); TrackPlayer.play() }}>
                            <ImageBackground
                                style={styles.SongOptionPause}
                                source={require('../../assets/playbtn.png')}>
                            </ImageBackground>
                        </TouchableOpacity>
                    }
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
