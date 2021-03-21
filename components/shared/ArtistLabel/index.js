import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from './styles';

export default function ArtistLabel({text, image}) {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Image style={styles.banner} source={image} />
      </View>
      <Text style={styles.labelText}>{text}</Text>
    </View>
  );
}
