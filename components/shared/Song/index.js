import React from 'react';
import {View, Text,ImageBackground, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import { useNavigation } from '@react-navigation/native';

function Song({title, image, artists, icon, url}){
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
                        <Text style={styles.labelSongTitle}>{title}</Text>
                        <Text style={styles.labelSongArtist}>{artists}</Text>
                    </View>
                    <ImageBackground 
                        style={styles.imgAdd}
                        source={require('../../../assets/add.png')}>
                    </ImageBackground> 
                </View>
            </React.Fragment>
        );
    } else {
        return(
            <TouchableOpacity onPress={()=> navigation.push('Music Player',{title,artists,image,url})}>
                <View style={styles.subSongContainer}>
                    <ImageBackground
                        style={styles.imgSong}
                        source={image}>
                    </ImageBackground> 
                    <View style={styles.subLabelContainer}>
                        <Text style={styles.labelSongTitle}>{title}</Text>
                        <Text style={styles.labelSongArtist}>{artists}</Text>
                    </View>
                    <ImageBackground 
                        style={styles.imgHeart}
                        source={require('../../../assets/heart.png')}>
                    </ImageBackground> 
                    <ImageBackground 
                        style={styles.imgOption}
                        source={require('../../../assets/option.png')}>
                    </ImageBackground> 
                </View>
            </TouchableOpacity>
        );
    }

}

export default Song;