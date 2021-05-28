import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginRight: 12,
    marginTop: 15,
  },
  linearGradient: {
    width: '100%',
    height: 150,
    opacity: 0.3,
    borderRadius: 10,
  },
  imgBackground: {
    width: 160,
    height: 150,
    borderRadius: 10,
    marginBottom: 11,
  },
  linearGradientMedium: {
    width: '100%',
    height: 120,
    opacity: 0.75,
    borderRadius: 10,
  },
  imgBackgroundMedium: {
    width: 160,
    height: 120,
    borderRadius: 10,
    marginBottom: 11,
  },
  createContainer: {
    width: 160,
    height: 120,
    borderWidth: 1.5,
    borderRadius: 10,
    borderStyle: 'dashed',
    borderColor: '#EDEDED',
    marginRight: 20,
    marginTop: 15,
    marginBottom: 11,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgBackgroundCreate: {
    width: 28,
    height: 28,
    borderRadius: 10,
    alignContent: 'center',
  },
  titleText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    lineHeight: 15,
    color: '#FFFFFF',
    alignItems: 'center',
    marginBottom: 2,
    width: 160,
  },
  labelText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 11,
    lineHeight: 13,
    color: '#C4C4C4',
    alignItems: 'center',
  },
});
