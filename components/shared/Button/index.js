import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './styles';

function Button({text, type, onpress}) {
  return type === 'primary' ? (
    <View style={styles.primaryButton}>
      <Text style={styles.primaryText}>{text}</Text>
    </View>
  ) : (
    <View style={styles.secondaryButton}>
      <Text style={styles.secondaryText}>{text}</Text>
    </View>
  );
}

export default Button;
