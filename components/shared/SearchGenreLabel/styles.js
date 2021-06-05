import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 80,
    width: 155,
    borderRadius: 5,
    marginTop:32
  },
  banner: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
    opacity: 0.7
  },
  label: {
    position: 'absolute',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelText: {
    backgroundColor: '#FFFFFF',
    fontFamily: 'Montserrat-Medium',
    fontSize: 15,
    height: 22,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: '#EE008F',
    alignItems: 'center',
  },
});
