import React from 'react';
import {View, StatusBar, Text, ScrollView,ImageBackground} from 'react-native';
import {styles} from './styles';
import AppNavigator from '../Navbar';
import LinearGradient from 'react-native-linear-gradient';
import Song from "../shared/Song"

function Playlist() {
  return (
    <React.Fragment>
      <StatusBar backgroundColor="#1B0536" />
      <ScrollView
        style={styles.wrapper}
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}>
            <ImageBackground
                style={styles.imgBackground}
                source={require('../../assets/album3.jpg')}
                imageStyle={{borderBottomLeftRadius: 40, borderBottomRightRadius:40}}>
                <LinearGradient
                    colors={['rgba(255, 255, 255, 0)', '#00FFA3']}
                style={styles.linearGradient}></LinearGradient>
            </ImageBackground>
            <View style={styles.container}>
                <View style={styles.playlistHeadingContainer}>
                    <View style={styles.playlistDetail}> 
                        <Text style={styles.labelText}>EDM 2020's</Text>
                        <View style={styles.subTextContainer}>
                            <Text style={styles.labelSubText}>42 Songs  &bull;  </Text>
                            <Text style={styles.labelSubText}>102 Hours</Text>
                        </View>
                    </View>
                    <ImageBackground 
                            style={styles.imgPlayBtn}
                            source={require('../../assets/playbtn.png')}>
                    </ImageBackground> 
                </View>
                <Song
                    title="Hawayein (From 'Jab Har.....'"
                    image={require('../../assets/album5.jpg')}
                    artists="Arjit Singh">
                </Song>
                <Song
                    title="Hawayein (From 'Jab Har...'"
                    image={require('../../assets/album2.jpg')}
                    artists="Arjit Singh">
                </Song>
                <Song
                    title="Hawayein (From 'Jab Har...'"
                    image={require('../../assets/album1.jpg')}
                    artists="Arjit Singh">
                </Song>
            </View>
      </ScrollView>
      <AppNavigator></AppNavigator>
    </React.Fragment>
  );
}

export default Playlist;
