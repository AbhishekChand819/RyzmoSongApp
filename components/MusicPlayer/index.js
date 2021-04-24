import { useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import React from 'react';
import { View, StatusBar, Text, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { styles } from './styles';

import SoundPlayer from "react-native-sound-player"
import { useState } from 'react';

function MusicPlayer() {
    const [isPlaying, setisPlaying] = useState(true);
    const [currentTime, setcurrentTime] = useState(0);
    const route = useRoute();
    async function getInfo(){
        let info = await SoundPlayer.getInfo()
        info = Math.floor(info.currentTime)
        setcurrentTime(info);
    }
    useEffect(async() => {
        SoundPlayer.playUrl(route.params.url);
        SoundPlayer.setVolume(100);
        let myInterval = setInterval(()=>{
            getInfo();
        },1000)
        return () => clearInterval(myInterval)
    }, [])

    return (
        <React.Fragment>
            <StatusBar backgroundColor="#1B0536" />
            <ScrollView
                style={styles.wrapper}
                overScrollMode="never"
                showsHorizontalScrollIndicator={false}>
                <ImageBackground
                    style={styles.imgBackground}
                    source={route.params.image}
                    imageStyle={{ borderRadius: 200 }}>
                </ImageBackground>
                <Text style={styles.SongTitle}>{route.params.title}</Text>
                <Text style={styles.SongArtist}>{route.params.artists}</Text>
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
                        <TouchableOpacity onPress={() => { setisPlaying(false); SoundPlayer.pause() }}>
                            <ImageBackground
                                style={styles.SongOptionPause}
                                source={require('../../assets/pause.png')}>
                            </ImageBackground>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => { setisPlaying(true); SoundPlayer.play() }}>
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
