import React, { useEffect } from 'react';
import { Text, View, ImageBackground ,ScrollView} from 'react-native';
import { connect } from 'react-redux';
import citiesActions from './../redux/actions/citiesActions';
import Itinerary from './Itinerary';



const Itineraries = (props) => {
    const {idCity, getItineraries, itineraries} = props
    useEffect(() => {
        getItineraries(idCity)
    }, [idCity])
    const not_itinerary=require('../assets/not-itinerary.jpg')
    return (
        <ScrollView>
            {itineraries.length > 0 ? 
                <>
                    {itineraries.map(itinerary => <Itinerary itinerary={itinerary} />)}
                </>
             : 
            <ImageBackground source={not_itinerary}  style={{height: 250,width:'100%', justifyContent: 'flex-end', alignItems: 'center'}}>
                <Text style={{fontSize: 25,  backgroundColor: 'hsla(344, 86%, 51%, 0.5)', padding:10}} >City ​​without itineraries yet</Text> 
            </ImageBackground>
            
            }           
        </ScrollView>
    )
    
}    
;
const mapStateToProps = state => {
    return {
        itineraries: state.citiesReducer.itineraries
    }
}

const mapDispatchToProps = {
    getItineraries: citiesActions.getItineraries
}

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries);