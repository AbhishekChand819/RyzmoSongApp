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
    lineHeight: 27,
    color: '#FFFFFF',
    marginBottom: 15,
    marginTop: 40,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 40,
  },
  buttonWrapper: {
    width: '65%',
    display: 'flex',
    alignItems: 'center',
    marginTop: 45,
  },
});
