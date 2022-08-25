import React, {useState, useRef} from 'react';
import {Text, View, Dimensions, Image, TouchableOpacity} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const data = [
  {
    id: 1,
    title: 'Find what language works for you!',
    definition:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    image: require('../components/pic.png'),
  },
];

const renderItem = ({item}) => {
  return (
    <View
      style={{
        borderRadius: 20,
        backgroundColor: '#FFF',
      }}>
      <Image
        source={item.image}
        style={{
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          width: '100%',
        }}
      />
      <View style={{marginBottom:'2%'}}>
        <Text
          style={{
            marginHorizontal: '5%',
            color: '#000000',
            fontSize: 14,
            fontWeight: '700',
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            marginHorizontal: '5%',
            color: '#7E7E7E',
            fontSize: 14,
            fontWeight: '700',
          }}>
          {item.definition}
        </Text>
      </View>
    </View>
  );
};

const Card1 = () => {
  const isCarousel = useRef(null);
  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <Carousel
        ref={isCarousel}
        data={data}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={index => setIndex(index)}
      />
    </View>
  );
};

export default Card1;
