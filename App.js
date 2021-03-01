import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navegacion from './Navegacion';


const App = () => {


  return(
    <Provider store={store}>  
      <StatusBar hidden={true} />
      <Navegacion />  
    </Provider>
      )
}


export default App