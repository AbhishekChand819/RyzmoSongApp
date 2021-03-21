import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    height: 90,
    width: 90,
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    margin: 15,
  },
  banner: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
  },
  labelText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: '#FFFFFF',
    height: 25,
  },
});
