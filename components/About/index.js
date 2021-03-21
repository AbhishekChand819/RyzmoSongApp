import React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import {styles} from './styles';
import Button from '../shared/Button';

function About() {
  return (
    <React.Fragment>
      <StatusBar backgroundColor="#1B0536" />
      <View style={styles.wrapper}>
        <Image
          style={styles.banner}
          source={require('../../assets/home-banner.png')}
        />

        <Image
          style={styles.icon}
          source={require('../../assets/home-icon-2.png')}
        />
        <Text style={styles.heading}>Ryzmo</Text>
        <Text style={styles.text}>
          Listen to a huge {'\n'}collection of songs based on {'\n'}your choices
          and taste.
        </Text>

        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <Button type="primary" text="Sign Up" />
          </View>
          <View style={styles.buttonWrapper}>
            <Button type="secondary" text="Login" />
          </View>
        </View>
      </View>
    </React.Fragment>
  );
}

export default About;
