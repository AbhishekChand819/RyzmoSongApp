import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  subSongContainer:{
    display:"flex",
    flexDirection:'row',
    marginBottom:15,
    // backgroundColor:"black"
  },
  subLabelContainer:{
    display:"flex",
    flexDirection:'column',
    marginLeft:15,
    marginTop:2,
  },
  imgSong: {
    width: 50,
    height: 45,
  },
  labelSongTitle:{
    display:"flex",
    width:200,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: '#FFFFFF',
  },
  labelSongArtist:{
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 13,
    color: '#C4C4C4',
  },
  songOption:{
    display:"flex",
    flexDirection:"row",
    marginLeft:"auto",
    marginTop:9
  },
  imgAdd: {
    width: 23,
    height: 23,
  },
  imgHeart: {
    width: 23,
    height: 23,
  },
  imgOption: {
    width: 5,
    height: 23,
    marginLeft:20,
  }
});

