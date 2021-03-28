import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    backgroundColor: '#1B0536',
  },
  imgBackground: {
    width: 300,
    height: 300,
    marginLeft:45,
    marginTop:30,
  },
  SongTitle:{
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 32,
    color: '#FFFFFF',
    marginTop:20,
    marginLeft:118,
  },
  SongArtist:{
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 20,
    color: '#B17AF5',
    marginTop:5,
    marginLeft:140,
  },
  SongBar:{
    width: "80%",
    height: 4,
    backgroundColor:"#5713AB",
    marginLeft:40,
    marginRight:40,
    marginTop:40,
  },
  SongBarFill:{
    width: "40%",
    height: 4,
    backgroundColor:"#EE008F",
  },
  SongTimeLable:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
  },
  SongStartTime:{
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: '#FFFFFF',
    marginTop:5,
    marginLeft:40,
  },
  SongEndTime:{
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: '#FFFFFF',
    marginTop:5,
    marginRight:40,
  },
  SongOptionPanel:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:15
  },
  SongOptionShuffle:{
    width:26,
    height:32,
    marginLeft:40,
    marginVertical:15
  },
  SongOptionBackward:{
    width:18,
    height:18,
    marginVertical:22
  },
  SongOptionPause:{
    width:65,
    height:65
  },
  SongOptionForward:{
    width:18,
    height:18,
    marginVertical:22
  },
  SongOptionRepeat:{
    width:22,
    height:22,
    marginRight:40,
    marginVertical:20
  },
  SongMenuPanel:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:55,
    marginLeft:30,
    marginRight:30,
    borderRadius:30,
    backgroundColor:"rgba(87, 19, 171, 0.6)"
  },
  SongMenuQueue:{
    width:20,
    height:20,
    marginVertical:22,
    marginLeft:40,
  },
  SongMenuPlaylist:{
    width:26,
    height:26,
    marginVertical:22
  },
  SongMenuHeart:{
    width:25,
    height:25,
    marginVertical:22,
    marginRight:40,
  },
});

