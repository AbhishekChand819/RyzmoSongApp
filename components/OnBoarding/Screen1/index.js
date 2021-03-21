import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import GenreLabel from '../../shared/GenreLabel';
import Button from '../../shared/Button';

function Screen1() {
  return (
    <React.Fragment>
      <View style={styles.wrapper}>
        <Text style={styles.heading}>What music do you like?</Text>
        <View style={styles.container}>
          <GenreLabel
            text="EDM"
            image={require('../../../assets/edm.png')}></GenreLabel>
          <GenreLabel
            text="ROCK"
            image={require('../../../assets/rock.png')}></GenreLabel>
          <GenreLabel
            text="JAZZ"
            image={require('../../../assets/jazz.png')}></GenreLabel>
          <GenreLabel
            text="DUBSTEP"
            image={require('../../../assets/dubstep.png')}></GenreLabel>
          <GenreLabel
            text="R&B"
            image={require('../../../assets/r&b.png')}></GenreLabel>
          <GenreLabel
            text="TECHNO"
            image={require('../../../assets/techno.png')}></GenreLabel>
          <GenreLabel
            text="COUNTRY"
            image={require('../../../assets/country.png')}></GenreLabel>
          <GenreLabel
            text="ELECTRO"
            image={require('../../../assets/electro.png')}></GenreLabel>
          <GenreLabel
            text="INDIE ROCK"
            image={require('../../../assets/indierock.png')}></GenreLabel>
          <GenreLabel
            text="POP"
            image={require('../../../assets/pop.png')}></GenreLabel>
        </View>
        <View style={styles.buttonWrapper}>
          <Button type="primary" text="Next" />
        </View>
      </View>
    </React.Fragment>
  );
}

export default Screen1;
