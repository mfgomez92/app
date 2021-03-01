import React from 'react';
import {ScrollView, ImageBackground, Text, View,} from 'react-native';
import {Icon} from 'react-native-elements'
import { styles } from './../styles/styles';


const Itinerary = (props) =>{
    console.log(props.itinerary.itineraryActivity)
     const {itineraryName,itineraryDuration,itineraryPrice, itineraryCategory, itineraryDescription, itineraryLike, itineraryActivity} = props.itinerary
    return (   
        <ScrollView>
            <View style={{borderColor:'hsla(344, 86%, 51%, 1)',borderWidth:1, padding:5, alignItems:'center'}}>
                <View style={{flexDirection: 'row', padding:5}}>
                    <View>
                        <Text style={{
                            textAlign: 'center',
                            marginLeft: 15, 
                            paddingTop:10, 
                            fontSize: 25, 
                            color: 'black',
                            textShadowColor: 'hsla(252, 100%, 27%, 1)',
                            textShadowOffset: {width: 1, height: 1}, 
                            textShadowRadius: 3 }}>
                            {itineraryName}
                        </Text>
                        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                            {itineraryCategory.map(category=>{
                             return (  
                                <Text style={{marginLeft: 15, paddingVertical:5, fontSize: 11, textAlign: 'center',color: 'red'}}>
                                    #{category}
                                </Text>
                                ) 
                            })}
                        </View>
                        <Text style={{textAlign: 'left',marginLeft: 15, paddingVertical:5,width: '70%', fontSize: 13, color: 'black',textAlign: 'center',}}>
                            {itineraryDescription}
                        </Text>
                    </View>
                    <View style={{alignItems:'flex-end', justifyContent:'flex-start'}}>
                        <Text style={{paddingVertical:5, fontSize: 15, color: 'black'}}>
                        Duration: {itineraryDuration}hs
                        </Text>
                        <View style={{flexDirection: 'row', marginLeft:2}}>{Array(itineraryPrice).fill(  
                             <Icon
                             name='money'
                             type='font-awesome'
                             color='green'
                             iconStyle={{marginRight:3}}
                             size={15} 
                           /> )}
                         </View> 
                         <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
                            <Icon
                                name='heart'
                                type='font-awesome'
                                color='red'
                            /> 
                            <Text> {itineraryLike.length}</Text>
                         </View>
                    </View>
                </View>
                <View style={{width:'100%', padding:25}}>
                        {itineraryActivity.map(({activityPic, activityName})=>{
                           return <ImageBackground source={{uri:`${activityPic}`}} style={styles.imgageActivity}>
                                    <Text style={{
                                        justifyContent: 'center',
                                        width:'100%',
                            textAlign: 'center', 
                            paddingTop:10, 
                            fontSize: 25, 
                            color: 'white',
                            backgroundColor:'hsla(344, 86%, 51%, 0.5)',
                            textShadowColor: 'hsla(252, 100%, 27%, 1)',
                            textShadowOffset: {width: 1, height: 1}, 
                            textShadowRadius: 3 }}>{activityName}</Text>
                            </ImageBackground>
                        })}

                    </View> 
            </View>         
        </ScrollView>
    ) }   

export default Itinerary
