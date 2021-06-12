import {StyleSheet,Dimensions} from 'react-native';

var {width,height} = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    backgroundColor: '#1B0536',
    paddingTop:30
  },
  queueWrapper:{
    display: 'flex',
    backgroundColor: '#1B0536',
    marginLeft:30,
    marginRight:30,
    height:"100%",
    maxHeight:Dimensions.get('window').height,
  },
  queueHeader:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginTop:15,
    marginBottom:20,
  },
  dividerQueue:{
    backgroundColor:"white",
    height:2,
    borderRadius:10,
    marginTop:7,
    width:"105%"
  },
  closeButton:{
    borderRadius:10,
    padding:14,
    paddingTop:5,
    backgroundColor:"rgba(87, 19, 171, 0.6)"
  },
  closeButtonText:{
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 20,
    color: '#FFFFFF',
    textTransform:"capitalize",
    width:250
  },
  QueueClose:{
    width:12,
    height:12,
    marginTop:8
  },
  imageWrapper:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  imgBackground: {
    width: 330,
    height: 330,
  },
  SongTitle:{
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 28,
    color: '#FFFFFF',
    marginLeft:30,
    marginRight:30,
    marginTop:20,
    textAlign:"center",
    width:"84%"
  },
  SongArtist:{
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 20,
    color: '#B17AF5',
    marginTop:5,
    textAlign:"center"
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
    marginVertical:15,
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
    alignItems:"center",
    alignSelf:"center",
    justifyContent:"space-around",
    width:"50%",
    marginTop:40,
    borderRadius:30,
    backgroundColor:"rgba(87, 19, 171, 0.6)"
  },
  SongMenuPlaylist:{
    width:26,
    height:26,
    marginVertical:22,
  },
  SongMenuHeart:{
    width:25,
    height:25,
    marginVertical:22,
  },
});

