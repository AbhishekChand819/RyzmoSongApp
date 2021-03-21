import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#1B0536',
    height: '100%',
  },
  heading: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 26,
    lineHeight: 25,
    color: '#FFFFFF',
    marginBottom: 15,
    marginTop: 50,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 23,
  },
  buttonWrapper: {
    width: '65%',
    display: 'flex',
    alignItems: 'center',
    marginTop: 50,
  },
});
