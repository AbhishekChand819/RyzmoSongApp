import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  subSongContainer:{
    display:"flex",
    flexDirection:'row',
  },
  subLabelContainer:{
    display:"flex",
    flexDirection:'column',
    marginLeft:15,
    marginTop:4,
    marginBottom:20,
  },
  imgSong: {
    width: 50,
    height: 51,
  },
  labelSongTitle:{
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    lineHeight: 20,
    color: '#FFFFFF',
    alignItems: 'center',
  },
  labelSongArtist:{
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 13,
    lineHeight: 20,
    color: '#C4C4C4',
    alignItems: 'center',
  },
  imgAdd: {
    width: 23,
    height: 23,
    marginTop: 14,
    marginLeft: 45,
  },
  imgHeart: {
    width: 23,
    height: 23,
    marginTop: 14,
    marginLeft: 55,
  },
  imgOption: {
    width: 5,
    height: 23,
    marginTop: 14,
    marginLeft: 23,
  }
});

