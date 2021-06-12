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
    color: '#FFFFFF',
    marginBottom: 15,
    marginTop: 10,
    marginLeft: 20,
  },
  headerContainer:{
    display:"flex",
    flexDirection:'row',
    marginRight: 20,
    marginTop:5
  },
  labelText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 24,
    lineHeight: 29,
    color: '#FFFFFF',
    paddingTop: 10,
    // backgroundColor:"pink"
  },
  playlistDetail:{
    marginLeft:23
  },
  subTextContainer:{
    display:"flex",
    flexDirection:'row',
    marginBottom:20,
  },
  labelSubText:{
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    lineHeight: 29,
    color: '#C4C4C4',
    alignItems: 'center',
    marginBottom: 2,
  },
  SearchIcon:{
    position: "absolute",
    width: 23,
    height: 23,
    left: 40,
    top: 74,
    zIndex:1
  },
  SearchInput:{
    width: "90%",
    height: 52,
    marginLeft: 20,
    fontFamily: "Montserrat-Medium",
    backgroundColor:"#6225AC",
    borderRadius:10,
    fontSize: 15,
    paddingLeft:55,
    color:"#E9D5E1"
  },
  imgPlayBtn:{
    width: 59,
    height: 59,
  },
  LibraryContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft:23,
    marginRight:30
  },
  nolikedSongs:{
    fontFamily: "Montserrat-SemiBold",
    fontSize: 18,
    color: "#FFFFFF",
    // marginTop:10
  },
  pillsContainer:{
    display:"flex",
    flexDirection:"row",
    flexWrap: 'wrap',
    marginLeft: 20,
  },
  pillBoxActive:{
    paddingHorizontal:15,
    height:35,
    marginRight:15,
    backgroundColor:"#EE008F",
    borderRadius:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pillBoxInActive:{
    paddingHorizontal:15,
    height:35,
    marginRight:15,
    borderWidth:2,
    borderColor:"#FFFFFF",
    borderRadius:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pillText:{
    fontFamily: "Montserrat-SemiBold",
    fontSize: 13,
    color: "#FFFFFF",
    marginBottom:3
  }
});
