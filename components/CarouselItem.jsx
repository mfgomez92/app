import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"


export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1)

const CarouselItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        source={item.direccion}
        style={styles.image}
      />
      <Text style={styles.header}>{item.ciudad}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: ITEM_WIDTH,
    paddingBottom: 20,
    shadowOffset: {
      width: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 7,
    padding: 0 ,
    width: '100%'
  },
  image: {
    width: ITEM_WIDTH,
    height: 350,
  },
  header: {
    color: "red",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: 'center'

  },

   
  
})

export default CarouselItem