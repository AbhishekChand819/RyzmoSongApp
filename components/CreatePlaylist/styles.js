import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    backgroundColor: '#1B0536',
    height: '100%',
  },
  heading: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 26,
    lineHeight: 25,
    color: '#FFFFFF',
    marginBottom: 15,
    marginTop: 20,
    marginLeft: 20,
  },
  NameInput:{
    width: "90%",
    height: 52,
    marginLeft: 20,
    fontFamily: "Montserrat-Medium",
    backgroundColor:"#6225AC",
    borderRadius:10,
    fontSize: 15,
    paddingLeft:25,
    color:"#E9D5E1"
  },
  PlaylistSongContainer:{
    margin:10,
    backgroundColor:"#000000",
    padding:15
  },
  SongContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:"space-evenly",
    marginTop:20
  },
  SearchIcon:{
    position: "absolute",
    width: 23,
    height: 23,
    left: 35,
    top: 29,
    zIndex:1
  },
  SearchInput:{
    width: "100%",
    height: 52,
    fontFamily: "Montserrat-Medium",
    borderWidth:2,
    borderColor:"#FFFFFF",
    borderRadius:10,
    fontSize: 15,
    paddingLeft:55,
    color:"#FFFFFF",
  }
});
