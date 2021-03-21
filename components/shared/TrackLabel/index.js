import React from 'react';
import {View, ImageBackground, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';

function TrackLabel({text, image, gradient}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imgBackground}
        // source={require('../../../assets/album1.jpg')}
        source={image}
        imageStyle={{borderRadius: 10}}>
        <LinearGradient
          //   colors={['rgba(238, 0, 143, 0)', '#D708F9']}
          colors={gradient}
          style={styles.linearGradient}></LinearGradient>
      </ImageBackground>
      <Text style={styles.titleText}>{text}</Text>
      <Text style={styles.labelText}>50 Songs</Text>
    </View>
  );
}

export default TrackLabel;
