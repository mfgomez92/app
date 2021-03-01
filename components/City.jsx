import React, { useEffect, useState } from 'react';
import { ImageBackground, Text, View, Image } from 'react-native';
import {Icon} from 'react-native-elements'
import { connect } from 'react-redux';
import Itineraries from './Itineraries';
import { styles } from './../styles/styles';
import { ScrollView } from 'react-native-gesture-handler';

const City = (props) => {
    const { idCity } = props.route.params
    const {allCities} = props
    const [city, setCity] = useState({})

    useEffect(() => {
        setCity(allCities.filter(ciudad => ciudad._id === idCity))
    }, [idCity])

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
            {city.length && 
            <>
            <ImageBackground source={{uri: city[0].imgCity}} style={styles.imageCity}>
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
                        {city[0].cityName}, {city[0].countryName}                                 
                </Text>  
            </ImageBackground>
            <Text style={styles.title}>Popular MYtineraries</Text>
            <View style={{alignItems:'center'}}>
                <Itineraries idCity={idCity} />
            </View>      
            </>
        }     
    </View>
    </ScrollView>
    )
    
    };

    const mapStateToProps = state => {
        return {
            allCities: state.citiesReducer.cities
        }
    }

export default connect(mapStateToProps)(City);