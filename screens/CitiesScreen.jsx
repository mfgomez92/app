import React, { useEffect } from 'react'
import { View, Text, ImageBackground, StyleSheet, Image, TouchableHighlight, ActivityIndicator,ScrollView, TouchableOpacity  } from 'react-native';
import {Icon} from 'react-native-elements'
import { connect } from 'react-redux';
import citiesActions from '../redux/actions/citiesActions';
import {styles} from '../styles/styles'


const CitiesScreen = (props) => {
    useEffect(() => {
        props.getCities()
    },[] )
    return (
        <ScrollView>
            <View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width:'100%', paddingHorizontal:15, backgroundColor:'hsla(344, 86%, 51%, 1)'}}>
                    <Image source={require('../assets/Mytinerary-logo.png')} resizeMode='contain'  style={{height: 35, width: '50%',padding:30}} />
                    <Icon
                    name='bars'
                    type='font-awesome'
                    color='white'
                    onPress={() => props.navigation.openDrawer()}/>
                </View>    
                <Text style={styles.title}>Cities</Text>
                {props.cities ? props.cities.map(({cityName, imgCity, _id}) =>                          
                    <View key={_id} style={styles.cities}>      
                        <TouchableHighlight style={{width: '100%'}} onPress={()=> props.navigation.navigate('City',{idCity: _id})}>                            
                            <ImageBackground source={{uri:`${imgCity}`}} style={styles.image} >
                                <Text style={{
                                    textAlign: 'center',
                                    padding:3, 
                                    fontSize: 25, 
                                    width: '100%', 
                                    backgroundColor:'hsla(344, 86%, 51%, 0.5)', 
                                    color: 'white',
                                    textShadowColor: 'hsla(252, 100%, 27%, 1)',
                                    textShadowOffset: {width: 1, height: 5}, 
                                    textShadowRadius: 15   }}>
                                        {cityName}
                                </Text>          
                            </ImageBackground> 
                        </TouchableHighlight>                    
                    </View>
                    )
                    :
                    <ActivityIndicator />} 
            </View>
        </ScrollView>
    )
}


const mapStateToProps = (state) =>  {
    return {
        cities: state.citiesReducer.cities
    }
}

const mapDispatchToProps = {
    getCities: citiesActions.getCities
}


export default connect(mapStateToProps, mapDispatchToProps)(CitiesScreen)
