import React, { useState } from 'react'
import { ImageBackground, Text, View,Image, Alert, TouchableOpacity, TextInput} from 'react-native'
import {Icon} from 'react-native-elements'
import { connect } from 'react-redux';
import authActions from '../redux/actions/authActions';
import { styles } from './../styles/styles';

const LoginScreen = (props) => {
    const [user, setUser] = useState({username: '', password: ''})
    const createThreeButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
    const login = () => {
        if(user.username ==="" || user.password ===''){
            createThreeButtonAlert()        
        }else{
            props.loginUser(user)
            props.navigation.navigate('Home')
        }

    }
    return (
        <View>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width:'100%', paddingHorizontal:15, backgroundColor:'hsla(344, 86%, 51%, 1)'}}>
                  <Image source={require('../assets/Mytinerary-logo.png')} resizeMode='contain'  style={{height: 35, width: '50%',padding:30}} />
                  <Icon
                  name='bars'
                  type='font-awesome'
                  color='white'
                  onPress={() => props.navigation.openDrawer()} />
            </View>  
            <ImageBackground source={require('../assets/millennialsviaje.jpg')} style={{width: '100%', height: '100%'}}>
                <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', flex: 0.7 }}>
                    <TextInput style={styles.input} name="username" placeholder="Enter your mail" onChangeText={(value) => setUser({username: value, password: user.password})} />
                    <TextInput secureTextEntry autoCorrect={false} style={styles.input} name="password" placeholder="Enter your password" onChangeText={(value) => setUser({password: value, username: user.username})} />
                    <View style={styles.btnLogin}>
                        <TouchableOpacity onPress={login}>
                            <Text style={{
                                color:'white',
                                fontSize: 20, 
                                textShadowColor: 'white', 
                                textShadowOffset: {width: 1, height: 2}, 
                                textShadowRadius: 15   }}
                            >Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
        
    )
}
const mapDispatchToProps = {
    loginUser: authActions.loginUser
}

export default connect(null, mapDispatchToProps)(LoginScreen)