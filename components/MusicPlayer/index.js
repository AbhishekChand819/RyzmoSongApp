import { useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import React from 'react';
import { View, StatusBar, Text, ScrollView, ImageBackground, TouchableOpacity,Modal } from 'react-native';
import { styles } from './styles';
import Song from "../shared/Song"
import { url } from "../../constants"
import SkeletonPlaceholder  from 'react-native-skeleton-placeholder';

import TrackPlayer from 'react-native-track-player';

import { useState,useRef } from 'react';

function MusicPlayer() {
    const [isPlaying, setisPlaying] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [currentTime, setcurrentTime] = useState(0);
    const [songTitle,setSongTitle] = useState('')
    const [songArtist,setSongArtist] = useState('')
    const [songImg,setSongImg] = useState('')
    const [songQueue,setSongQueue] = useState([])
    const route = useRoute();
    const isMounted = useRef(false);
    async function getInfo(){
        let info = await TrackPlayer.getPosition()
        info = Math.floor(info)
        setcurrentTime(info);
    }
    useEffect(async () => {
        let response = await fetch(`${url}/recommend/song/${route.params.title}`);
        let skipped = 0;
        response = await response.json();
        setSongQueue(response)
        response.map(async (song,index) => {
            if(song.track_preview.length>1){
                await TrackPlayer.add({
                    id: index+2-skipped,
                    url: song.track_preview,
                    title: song.track_name,
                    artist: song.track_artist,
                    artwork: {"uri": song.artist_image}
                });
            } else skipped++;
        })
    }, []);
    useEffect(async() => {
        isMounted.current = true;
        const listener = TrackPlayer.addEventListener(
            'playback-track-changed',
            async (data) => {
                const track = await TrackPlayer.getTrack(data.nextTrack);
                if(track){
                    setSongTitle(track.title);
                    setSongArtist(track.artist);
                    setSongImg(track.artwork);
                }
            }
        );
        TrackPlayer.updateOptions({
            stopWithApp: true,
          });
        TrackPlayer.reset();
        await TrackPlayer.add({
                id: 1,
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
                <View style={styles.imageWrapper}>
                    <ImageBackground
                    style={styles.imgBackground}
                    source={songImg}
                    key={songTitle}
                    imageStyle={{ borderRadius: 200 }}/>
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => null}>
                    <View style={styles.queueWrapper}>
                        <TouchableOpacity onPress={() => {setModalVisible(false)}}>
                            <View style={styles.closeButton}>
                                <Text style={styles.closeButtonText}>Close</Text>
                                <ImageBackground
                                    style={styles.QueueClose}
                                    source={require('../../assets/close.png')}>
                                </ImageBackground>
                            </View>
                        </TouchableOpacity>
                        {songQueue.length < 1 ? [1,2,3,4,5,6,7,8,9,10,11,12].map((index)=>
                            <SkeletonPlaceholder key={index} speed={2000} backgroundColor='#6425B1' highlightColor="#B62EAD">
                                <View style={{display:"flex",flexDirection:'row',marginBottom:10}}>
                                    <View style={{ width:50,height:45}}></View>
                                    <View style={{display:'flex',width:"80%",flexDirection:'column',marginLeft:15}}>
                                        <View style={{display:'flex',height:17,marginTop:6}}></View>
                                        <View style={{display:'flex',width:"30%",height:12,marginTop:5}}></View>
                                    </View>
                                </View>
                            </SkeletonPlaceholder>) 
                        : songQueue.map(songQ => {
                            return <Song
                                key={songQ.track_id}
                                title={songQ.track_name}
                                image={songQ.artist_image.length>1 ? {uri : songQ.artist_image} : require('../../assets/album5.jpg')}
                                artists={songQ.track_artist}
                                url={songQ.track_preview}
                                route='queue'/>
                        })}
                    </View>
                </Modal>
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
                    <TouchableOpacity onPress={async () => {
                        const curr = await TrackPlayer.getCurrentTrack();
                        if(curr>=1) TrackPlayer.skipToPrevious() }}>
                        <ImageBackground
                            style={styles.SongOptionBackward}
                            source={require('../../assets/backward.png')}>
                        </ImageBackground>
                    </TouchableOpacity>
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
                    <TouchableOpacity onPress={async () => {
                        const len = await TrackPlayer.getQueue();
                        const curr = await TrackPlayer.getCurrentTrack();
                        if(len.length >= curr) TrackPlayer.skipToNext()}}>
                        <ImageBackground
                            style={styles.SongOptionForward}
                            source={require('../../assets/forward.png')}>
                        </ImageBackground>
                    </TouchableOpacity>
                    <ImageBackground
                        style={styles.SongOptionRepeat}
                        source={require('../../assets/repeat.png')}>
                    </ImageBackground>
                </View>
                <View style={styles.SongMenuPanel}>
                    <TouchableOpacity onPress={() => {setModalVisible(true)}}>
                    <ImageBackground
                        style={styles.SongMenuPlaylist}
                        source={require('../../assets/playlist.png')}>
                    </ImageBackground>
                    </TouchableOpacity>
                    <ImageBackground
                        style={styles.SongMenuHeart}
                        source={require('../../assets/heartfill.png')}>
                    </ImageBackground>
                </View>
            </ScrollView>
        </React.Fragment>
    );
}

export default MusicPlayer;
