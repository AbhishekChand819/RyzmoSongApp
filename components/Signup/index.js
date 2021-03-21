import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from './styles';
import Button from '../shared/Button';

function Signup() {
  return (
    <React.Fragment>
      <View style={styles.wrapper}>
        <Image style={styles.icon} source={require('../../assets/logo.png')} />
        <Text style={styles.heading}>Welcome back,</Text>
        <Text style={styles.text}>Sign up to continue</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <Button type="primary" text="Sign In" />
          </View>
        </View>
        <Text style={{color: '#FFFFFF'}}>
          Already have an account?
          <Text style={{color: '#EE008F'}}> Sign In</Text>
        </Text>
        <Text style={{color: '#D3D3D3', textAlign: 'center'}}>
          By clicking Sign In, you agree to our{' '}
          <Text style={{color: '#EE008F', textDecorationLine: 'underline'}}>
            Terms
          </Text>{' '}
          and that you have read our{' '}
          <Text style={{color: '#EE008F', textDecorationLine: 'underline'}}>
            Data Use policy
          </Text>
        </Text>
      </View>
    </React.Fragment>
  );
}

export default Signup;
