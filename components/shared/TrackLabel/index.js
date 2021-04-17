import React from 'react';
import {View, ImageBackground, Text,Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';

function TrackLabel({text, image, gradient,type,navigation}) {
  if(type=="home"){
    return (
      <TouchableOpacity onPress={()=> navigation.push('Playlist')}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.imgBackground}
          source={image}
          imageStyle={{borderRadius: 10}}>
          <LinearGradient
            colors={gradient}
            style={styles.linearGradient}></LinearGradient>
        </ImageBackground>
        <Text style={styles.titleText}>{text}</Text>
        <Text style={styles.labelText}>50 Songs</Text>
      </View>
      </TouchableOpacity>
    );
  } else if(type=="library") {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.imgBackgroundMedium}
          source={image}
          imageStyle={{borderRadius: 10}}>
          <LinearGradient
            colors={gradient}
            style={styles.linearGradientMedium}></LinearGradient>
        </ImageBackground>
        <Text style={styles.titleText}>{text}</Text>
      </View>
    );
  } else if(type=="create") {
    return (
    <View>
      <View style={styles.createContainer}>
        <Image
          style={styles.imgBackgroundCreate}
          source={image}>
        </Image>
      </View>
      <Text style={styles.titleText}>{text}</Text>
    </View>
    );
  }

}

export default TrackLabel;
