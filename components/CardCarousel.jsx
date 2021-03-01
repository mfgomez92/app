import React from 'react'
import { View } from "react-native"
import Carousel, {Pagination}from 'react-native-snap-carousel'
import CarouselItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../components/CarouselItem'
import data from '../components/data'


const CardCarousel = () => {
  const isCarousel = React.useRef(null)
  const [index, setIndex] = React.useState(0)

  return (

    <View style={{height: 490}}>
      <Carousel
        layout="tinder"
        ref={isCarousel}
        data={data}
        renderItem={CarouselItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        useScrollView={true}
        onSnapToItem={(index) => setIndex(index)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
    

  )
}



export default CardCarousel