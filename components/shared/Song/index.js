import React from 'react';
import {View, Text,ImageBackground} from 'react-native';
import {styles} from './styles';

function Song({title, image, artists}){
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
                    style={styles.imgHeart}
                    source={require('../../../assets/heart.png')}>
                </ImageBackground> 
                <ImageBackground 
                    style={styles.imgOption}
                    source={require('../../../assets/option.png')}>
                </ImageBackground> 
            </View>
        </React.Fragment>
    );
}

export default Song;