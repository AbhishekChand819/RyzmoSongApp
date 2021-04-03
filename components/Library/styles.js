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
  LibraryContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:"space-evenly",
    marginTop:10,
    marginLeft: 20,
  },
  pillsContainer:{
    display:"flex",
    flexDirection:"row",
    flexWrap: 'wrap',
    marginTop:20,
    marginLeft: 20,
  },
  pillBoxActive:{
    width:90,
    height:35,
    marginRight:15,
    backgroundColor:"#EE008F",
    borderRadius:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pillBoxInActive:{
    width:80,
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
