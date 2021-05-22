import React, { useState } from 'react';
import {View, Text,ImageBackground, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import { useNavigation } from '@react-navigation/native';

function Song({id, title, image, artists, icon, url, route, playlist}){
    const [like,setLike]=useState(false)
    const navigation = useNavigation();
    if(icon=="plus"){
        return(
            <React.Fragment>
                <View style={styles.subSongContainer}>
                    <ImageBackground 
                        style={styles.imgSong}
                        source={image}>
                    </ImageBackground> 
                    <View style={styles.subLabelContainer}>
                        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.labelSongTitle}>{title}</Text>
                        <Text style={styles.labelSongArtist}>{artists}</Text>
                    </View>
                    <View style={styles.songOption}>
                        <ImageBackground 
                            style={styles.imgAdd}
                            source={require('../../../assets/add.png')}>
                        </ImageBackground> 
                    </View>
                </View>
            </React.Fragment>
        );
    } else {
        // dhyan se coding kra kr, code ki line nhi dikhti ek
        // yahan hum agar song ka url nhi h toh use hta dete h
        if(!url) return null 

        return(
                <View style={styles.subSongContainer}>
                    <TouchableOpacity style={{display:"flex",flexDirection:"row"}} onPress={()=> {
                        if(route=='queue'){
                            navigation.pop(1);
                            navigation.push('Music Player',{id,title,artists,image,url, playlist}) 
                        } else navigation.push('Music Player',{id,title,artists,image,url, playlist})}}>  
                        <ImageBackground
                            style={styles.imgSong}
                            source={image}>
                        </ImageBackground> 
                        <View style={styles.subLabelContainer}>
                            <Text numberOfLines={1} ellipsizeMode='tail' style={styles.labelSongTitle}>{title}</Text>
                            <Text style={styles.labelSongArtist}>{artists}</Text>
                        </View>
                    </TouchableOpacity> 
                    <View style={styles.songOption}>
                        <TouchableOpacity onPress={()=> setLike(!like)}>
                            {like ?  
                                <ImageBackground 
                                    style={styles.imgHeart}
                                    source={require('../../../assets/heartfill.png')}>
                                </ImageBackground> :                            
                                <ImageBackground 
                                    style={styles.imgHeart}
                                    source={require('../../../assets/heartempty.png')}>
                                </ImageBackground> 
                            }
                        </TouchableOpacity>
                        <ImageBackground 
                            style={styles.imgOption}
                            source={require('../../../assets/option.png')}>
                        </ImageBackground> 
                    </View>
                </View>
        );
    }

}

export default Song;