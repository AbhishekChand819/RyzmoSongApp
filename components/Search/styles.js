import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    backgroundColor: '#1B0536',
    height: '100%',
  },
  heading: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 26,
    lineHeight: 25,
    color: '#FFFFFF',
    marginBottom: 15,
    marginTop: 20,
    marginLeft: 30,
  },
  SearchIcon:{
    position: "absolute",
    width: 23,
    height: 23,
    left: 50,
    top: 74,
    zIndex:1
  },
  SearchInput:{
    width: "84%",
    height: 52,
    marginLeft: 30,
    fontFamily: "Montserrat-Medium",
    backgroundColor:"#6225AC",
    borderRadius:10,
    fontSize: 15,
    paddingLeft:55,
    color:"#E9D5E1"
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:"space-evenly",
    marginTop:10,
    marginLeft:10,
    marginRight:10
  },
});