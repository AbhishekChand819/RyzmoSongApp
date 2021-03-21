import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import ArtistLabel from '../../shared/ArtistLabel';
import Button from '../../shared/Button';

function Screen2() {
  return (
    <React.Fragment>
      <View style={styles.wrapper}>
        <Text style={styles.heading}>
          Choose 3 or more artists {'\n'}you like.
        </Text>
        <View style={styles.container}>
          <ArtistLabel
            text="Arijit Singh"
            image={require('../../../assets/arijit.png')}></ArtistLabel>
          <ArtistLabel
            text="Juice WRLD"
            image={require('../../../assets/juicewrld.png')}></ArtistLabel>
          <ArtistLabel
            text="Dua Lipa"
            image={require('../../../assets/dualipa.png')}></ArtistLabel>
          <ArtistLabel
            text="Udit Narayan"
            image={require('../../../assets/udit.png')}></ArtistLabel>
          <ArtistLabel
            text="Neha Kakkar"
            image={require('../../../assets/neha.png')}></ArtistLabel>
          <ArtistLabel
            text="Roddy Ricch"
            image={require('../../../assets/roddy.png')}></ArtistLabel>
          <ArtistLabel
            text="Billie Eilish"
            image={require('../../../assets/billie.png')}></ArtistLabel>
          <ArtistLabel
            text="Ed Sheeran"
            image={require('../../../assets/edsheeran.png')}></ArtistLabel>
          <ArtistLabel
            text="Marshmello"
            image={require('../../../assets/marshmello.png')}></ArtistLabel>
          <ArtistLabel
            text="Eminem"
            image={require('../../../assets/eminem.png')}></ArtistLabel>
          <ArtistLabel
            text="Kishore Kumar"
            image={require('../../../assets/kishore.png')}></ArtistLabel>
        </View>
        <View style={styles.buttonWrapper}>
          <Button type="primary" text="Next" />
        </View>
      </View>
    </React.Fragment>
  );
}

export default Screen2;
