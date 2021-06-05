import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    backgroundColor: '#1B0536',
    height: '100%',
    width: '100%'
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
  noResultsFound: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 15,
    alignSelf:"center",
    marginTop: 10,
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
  container: {
    display: 'flex',
    marginHorizontal: 25,
    justifyContent:"space-evenly",
    marginTop:30,
  },
  genreContainer:{
    display: 'flex',
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"space-evenly",
    marginTop:20,
  }
});
