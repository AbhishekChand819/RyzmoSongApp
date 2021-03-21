import React from 'react';
import {Text, TouchableHighlight} from 'react-native';

import {styles} from './styles';

function Button({text, type, onpress}) {
  return type === 'primary' ? (
    <TouchableHighlight style={styles.primaryButton} onPress={onpress}>
      <Text style={styles.primaryText}>{text}</Text>
    </TouchableHighlight>
  ) : (
    <TouchableHighlight style={styles.secondaryButton} onPress={onpress}>
      <Text style={styles.secondaryText}>{text}</Text>
    </TouchableHighlight>
  );
}

export default Button;
