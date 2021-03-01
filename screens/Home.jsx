import React from 'react'
import { View, Text, ImageBackground,  ScrollView, TouchableOpacity, Image } from 'react-native';
import {Icon} from 'react-native-elements'
import {styles} from '../styles/styles'
import CardCarousel from '../components/CardCarousel'

const Home =  (props) => {
    return (
        <>
            <ScrollView >
              <View>   
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width:'100%', paddingHorizontal:15, backgroundColor:'hsla(344, 86%, 51%, 1)'}}>
                  <Image source={require('../assets/Mytinerary-logo.png')} resizeMode='contain'  style={{height: 35, width: '50%',padding:30}} />
                  <Icon
                  name='bars'
                  type='font-awesome'
                  color='white'
                  onPress={() => props.navigation.openDrawer()}/>
                </View>          
                <ImageBackground source={require('../assets/millennialsviaje.jpg')} style={styles.bannerCall} >
                    <View style={styles.callToActionContainer}>
                      <View style={{alignItems: 'center',justifyContent: 'space-between', marginTop: 20}}>
                          <Text style={styles.callToActionText}>Find your perfect trip, designed by insiders who know and love their cities</Text>
                      </View>                   
                      <TouchableOpacity style={styles.callToActionButton} onPress={props.navigation.navigate('Cities')}>
                          <Text style={{fontSize: 25, color: 'white', textAlign: 'center'}}>
                            Discover
                          </Text>
                          <Icon
                              name='globe'
                              type='font-awesome'
                              color='white'
                            />
                      </TouchableOpacity>
                    </View>
                </ImageBackground>             
                </View>         
              <Text style={styles.title}>Popular MYtineraries</Text>
              <CardCarousel style={styles.carrusel} />              
            </ScrollView>
            
         </>
    )
}
export default Home

//onPress={() => props.navigation.navigate("Cities")}