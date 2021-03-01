import React, { useState, useEffect } from 'react';
import { Text, View, ImageBackground, Image, TouchableOpacity,  TextInput, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements'
import { styles } from './../styles/styles';
import { connect } from 'react-redux';
import authActions from '../redux/actions/authActions';
import {Picker} from '@react-native-picker/picker';
const RegisterScreen = (props) => {
    const [ newUser, setNewUser ] = useState({
        name:'',
        lastName:'',
        country:'',
        username:'',
        password:''
    })
    useEffect(() => {
        props.getCountries()
    }, [])
    const register = () => {
        props.newUser(newUser)
        props.navigation.navigate('Home')

    }
   return(
        <View>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width:'100%', paddingHorizontal:15, backgroundColor:'hsla(344, 86%, 51%, 1)'}}>
                  <Image source={require('../assets/Mytinerary-logo.png')} resizeMode='contain'  style={{height: 35, width: '50%',padding:30}} />
                  <Icon
                  name='bars'
                  type='font-awesome'
                  color='white'
                  onPress={() => props.navigation.openDrawer()}/>
            </View>  
            <ImageBackground source={require('../assets/millennialsviaje.jpg')} style={{width: '100%', height: '100%'}}>
                <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', flex: 0.7}}>
                    <TextInput style={styles.input} name="name" placeholder="Enter your Name" 
                    onChangeText={(value) => setNewUser({
                        name: value,
                        lastName: newUser.lastName, 
                        country: newUser.country, 
                        username: newUser.username,
                        password: newUser.password,})} />
                    <TextInput style={styles.input} name="lastName" placeholder="Enter your Last Name"
                    onChangeText={(value) => setNewUser({
                        lastName: value,
                        name: newUser.name, 
                        country: newUser.country, 
                        username: newUser.username,
                        password: newUser.password,})} />
                    <TextInput style={styles.input} name="username" placeholder="Enter your Mail" 
                    onChangeText={(value) => setNewUser({
                        username: value,
                        name: newUser.name,
                        lastName: newUser.lastName, 
                        country: newUser.country, 
                        password: newUser.password,})} />
                    
                    <Picker
                        style={styles.input}
                        itemStyle={styles.input}
                        selectedValue={newUser.country}
                        onValueChange={(value) =>setNewUser({
                            country: value,
                            name: newUser.name,
                            lastName: newUser.lastName, 
                            username: newUser.username, 
                            password: newUser.password,})}>
                        <Picker.Item label="Select your Country" value={''} />
                        {props.countries && props.countries.map((country, index) => {
                        return <Picker.Item key={index} label={country.name} value={country.name}/>})}
                    </Picker>

                    <TextInput secureTextEntry autoCorrect={false} style={styles.input} name="password" placeholder="Enter your password" onChangeText={(value) => setNewUser({
                        password: value,
                        name: newUser.name,
                        lastName: newUser.lastName, 
                        username: newUser.username,
                        country: newUser.country})} />
                    <View style={styles.btnLogin}>
                        <TouchableOpacity >
                            <Text style={{
                                color:'white',
                                fontSize: 20, 
                                textShadowColor: 'white', 
                                textShadowOffset: {width: 1, height: 2}, 
                                textShadowRadius: 15   }} onPress={register}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>

    )
};
const mapStateToProps = state => {
    return {
        countries: state.authReducer.countries,
        loggedUser: state.authReducer.loggedUser
    }
}
const mapDispatchToProps = {
    newUser: authActions.newUser,
    getCountries: authActions.getCountries,
}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);