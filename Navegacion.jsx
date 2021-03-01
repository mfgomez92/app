import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import Home from './screens/Home';
import CitiesScreen from './screens/CitiesScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import City from './components/City';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import authActions from './redux/actions/authActions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import  AsyncStorage  from '@react-native-async-storage/async-storage';


const Navegacion = (props) => {
    console.log(props)
  const Stack = createStackNavigator()
  const Drawer = createDrawerNavigator()

  const ScreenCities = (props) => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Cities" component={CitiesScreen} />
      <Stack.Screen name='City' component={City} /> 
    </Stack.Navigator>
  )
  const ScreenHome = (props) => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
  
  const ScreenLogin = (props) => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  )
  
  const ScreenRegister = (props) => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  ) 
  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Logout"
           onPress={()=>props.logoutUser()}
        />
      </DrawerContentScrollView>
    );
  }
  const [loginAStorage, setloginAStorage] = useState("")
  useEffect(() => {
    loginAS()  
    }, [])
  const loginAS = async () => {  
    AsyncStorage && await AsyncStorage.getItem('token')
    .then(token => setloginAStorage(token))
    props.logFromLS(loginAStorage)
  }
  
  return(
    <>        
      <NavigationContainer>
      {!props.loggedUser ?
       <Drawer.Navigator>          
            <Drawer.Screen name="Home" children={ScreenHome} /> 
            <Drawer.Screen name="Cities" children={ScreenCities}  />
            <Drawer.Screen name="Login" children={ScreenLogin} />
            <Drawer.Screen name="Register" children={ScreenRegister} />           
        </Drawer.Navigator> : 
        <Drawer.Navigator  drawerContent={props => <CustomDrawerContent {...props  }/> }>     
          <Drawer.Screen name="Home" children={ScreenHome} />        
          <Drawer.Screen name="Cities" children={ScreenCities} /> 
          
        </Drawer.Navigator> 
        }
        
      </NavigationContainer>   
    </>
      )
}

const mapStateToProps = state => {
    return {
        loggedUser: state.authReducer.loggedUser
    }
}
  

const mapDispatchToProps = {
    logoutUser: authActions.logoutUser,
    logFromLS: authActions.logFromLS
}


export default connect(mapStateToProps, mapDispatchToProps)(Navegacion)