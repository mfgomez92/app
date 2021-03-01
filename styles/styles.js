
import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    bannerCall: {
        width: null, 
        height: 500,
        resizeMode: 'contain',
        justifyContent:'center',
        alignItems:'flex-end'    
    },
    callToActionContainer: {
        width: '50%',
        height: '50%',
        backgroundColor: 'hsla(344, 86%, 51%, 0.75)',
        borderRadius: 25,
        margin:'5%',
        padding:5,
        alignItems: 'center',
    },
    callToActionText: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        textShadowColor: 'hsla(252, 100%, 27%, 1)',
        textShadowOffset: {width: 1, height: 5}, 
        textShadowRadius: 15   
    },
    callToActionButton:{
        backgroundColor:'hsla(252, 100%, 27%, 0.9)',
        flexDirection:'row',
        justifyContent: 'space-between',
        borderRadius: 5,
        alignItems:'center',
        padding:10,
        marginTop:10, 
        width: '85%'
    },
    //ESTILOS CARRUSEL
    title: {
        padding: 15,
        textAlign:'center',
        fontSize: 25,
        fontWeight: "bold",
        backgroundColor:'hsla(344, 86%, 51%, 1)',
        color:'white',
        textShadowColor: 'hsla(252, 100%, 27%, 1)',
        textShadowOffset: {width: 1, height: 5}, 
        textShadowRadius: 15   
    },
    carrusel: {
        marginBottom: '10%',
        flex: 1,
        width: '100%',
        height: 500
    },
    //Cities
    cities: {
        alignItems: 'center',
        width: '100%',
        marginVertical: 5,
     
    },
    image: {
        width: '100%',
        height: 150,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    //City
    imageCity: {
        width: '100%',
        height: 250,
        alignItems: 'center',
        justifyContent: 'flex-end',
        shadowOffset: {
            width: 3,
            height:5
          },
          shadowOpacity: 0.5,
          shadowRadius: 3,
          elevation: 7,
    },
    imgageActivity: {
        width: '100%',
        height: 250,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom:10,
        borderRadius:25,
        shadowOffset: {
            width: 3,
            height:5
          },
          shadowOpacity: 0.5,
          shadowRadius: 3,
          elevation: 7,
    },
    //Inputs
    input: {
        width: '70%',
        backgroundColor: 'hsla(194, 25%, 100%, 0.70)',
        marginBottom: 10,
        height: 50,
        textAlign: 'center',
        borderRadius: 25,
    },
    btnLogin: {
        backgroundColor:'hsla(252, 100%, 27%, 1)',
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 25,
        paddingVertical: 15
    }
})