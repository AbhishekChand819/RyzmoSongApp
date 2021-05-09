import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    background: {
        width: "100%",
        height: "100%",
        backgroundColor: "#1B0536",
    },
    tinyLogo: {
        marginTop:100,
        marginLeft:30
    },
    welcomeText: {
        marginTop:15,
        marginLeft:30,
        fontFamily: "Montserrat",
        fontSize: 28,
        color: "#FFFFFF"
    },
    labelText: {
        marginTop:8,
        marginLeft:30,
        marginBottom:20,
        fontFamily: "Montserrat",
        fontSize: 20,
        color: "#EE008F"
    },
    inputWrapper: {
        position: 'relative'
    },
    contactIcon:{
        position: "absolute",
        width: 20,
        height: 20,
        left: 54,
        top: 18
    },
    inputBox:{
        width:"86%",
        height: 59,
        marginBottom:20,
        marginLeft:30, 
        fontFamily: "Montserrat",
        fontSize: 15,
        borderWidth:2.5,
        borderColor:"#FFFFFF",
        borderRadius:20,
        paddingLeft:60,
        color:"#FFFFFF"
    },
    SignInButton:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center", 
        width: "86%",
        marginLeft:30,
        height: 59,
        backgroundColor: "#EE008F",
        borderRadius: 50
    },
    SignInButtonText:{   
        fontFamily: "Montserrat",
        fontSize: 20,
        color: "#FFFFFF",
        marginBottom:5
    },
    labelText2:{
        marginTop:20,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        fontFamily: "Montserrat",
        fontSize: 15
    },
    labelText3:{
        fontFamily: "Montserrat",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        marginTop:80,
        paddingHorizontal:35
    },
    
});
