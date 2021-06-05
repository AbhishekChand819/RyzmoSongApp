import React, {useEffect} from 'react';
import {View, Text, Image, StatusBar, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Button from '../shared/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

function About() {
  const navigation = useNavigation();

  useEffect(async () => {
    const user_id = await AsyncStorage.getItem('user_id');
    if(user_id) {
      navigation.reset({
        index: 0,
        routes: [{name: 'Home'}],
      });
    }
  }, [])

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
          <TouchableOpacity style={styles.buttonWrapper} onPress={() => navigation.push('Register')} activeOpacity={0.5}>
            <Button type="primary" text="Sign Up" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonWrapper} onPress={() => navigation.push('Login')} activeOpacity={0.5}>
            <Button type="secondary" text="Login" />
          </TouchableOpacity>
        </View>
      </View>
    </React.Fragment>
  );
}

export default About;
