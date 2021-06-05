import React from 'react';
import {View, ImageBackground, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';

function TrackLabel({text, image, gradient, subtext}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imgBackground}
        source={
            image.length > 1 ? 
              {uri: image} : 
              require('../../../assets/album5.jpg')
        }
        imageStyle={{borderRadius: 10}}>
        <LinearGradient
          colors={gradient}
          style={styles.linearGradient}></LinearGradient>
      </ImageBackground>
      <Text style={styles.titleText} numberOfLines={1} ellipsizeMode="tail">
        {text}
      </Text>
      <Text style={styles.labelText}>{subtext}</Text>
    </View>
  );
}

export default TrackLabel;
