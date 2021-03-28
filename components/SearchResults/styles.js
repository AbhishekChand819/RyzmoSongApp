import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    backgroundColor: '#1B0536',
    height: '100%',
  },
  BackIcon:{
    position: "absolute",
    width: 18,
    height: 14,
    left: 20,
    top: 18,
    zIndex:1
  },
  CrossIcon:{
    position: "absolute",
    width: 14,
    height: 14,
    right: 20,
    top: 18,
    zIndex:1
  },
  SearchInput:{
    width: "100%",
    height: 52,
    fontFamily: "Montserrat-Medium",
    backgroundColor:"#6225AC",
    fontSize: 15,
    paddingLeft:55,
    color:"#E9D5E1"
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:"space-evenly",
    marginTop:20,
  },
});
