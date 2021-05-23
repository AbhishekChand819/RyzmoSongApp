import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    backgroundColor: '#1B0536',
  },
  container: {
    marginLeft:22,
    marginRight:22
  },
  subTextContainer:{
    display:"flex",
    flexDirection:'row',
    marginBottom:20,
  },
  playlistHeadingContainer:{
    display:"flex",
    flexDirection:'row',
  },
  labelText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 24,
    lineHeight: 29,
    color: '#FFFFFF',
    paddingTop: 10,
    // backgroundColor:"pink"
  },
  labelSubText:{
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    lineHeight: 29,
    color: '#C4C4C4',
    alignItems: 'center',
    marginBottom: 2,
  },
  linearGradient: {
    width: '100%',
    height: 265,
    opacity: 0.75,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  imgBackground: {
    width: "100%",
    height: 265,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    marginBottom: 11,
  },
  imgSong: {
    width: 50,
    height: 51,
  },
  imgPlayBtn:{
    width: 59,
    height: 59,
  }
});

