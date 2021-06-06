import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#1B0536',
    height: '100%',
  },
  banner:{
    height:"45%"
  },
  icon: {
    position:"absolute",
    top:"45%"
  },
  heading: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 28,
    color: '#FFFFFF',
    marginTop:50
  },
  text: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    lineHeight: 25,
    textAlign: 'center',
    color: '#D3D3D3',
    marginTop:15
  },
  buttonContainer: {
    marginTop:55,
    width: '100%'
  },
  buttonWrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginTop:20
  },
});
