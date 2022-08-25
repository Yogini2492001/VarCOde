// import React, {useState, useRef} from 'react';
// import {Text, View, Dimensions, Image, TouchableOpacity} from 'react-native';
// import Carousel, {Pagination} from 'react-native-snap-carousel';
// export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
// export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

// const data = [
//   {
//     id: 1,
//     title: 'Variables',
//     image: require('../components/image.png'),
//   },
//   {
//     id: 2,
//     title: 'Python',
//     image: require('../components/python.png'),
//   },
//   {
//     id: 3,
//     title: 'Variables',
//     image: require('../components/image.png'),
//   },
// ];

// const renderItem = ({item}) => {
//   return (
//     <View
//       style={{
//         borderRadius: 20,
//         backgroundColor: '#FFF'
//       }}>
//       <Image
//         source={item.image}
//         style={{
//           borderTopLeftRadius: 20,
//           borderTopRightRadius: 20,
//           width: '100%',
//         }}
//       />
//       <Text style={{padding: '5%'}}>{item.title}</Text>
//     </View>
//   );
// };

// const Card = () => {
//   const isCarousel = useRef(null);
//   return (
//     <View
//       style={{
//         alignItems: 'center',
//       }}>
//       <Carousel
//         ref={isCarousel}
//         data={data}
//         renderItem={renderItem}
//         sliderWidth={SLIDER_WIDTH}
//         itemWidth={ITEM_WIDTH}
//         // onSnapToItem={index => setIndex(index)}
//       />
//     </View>
//   );
// };

// export default Card;

import {View, Text, FlatList,Image, Dimensions} from 'react-native';
import React from 'react';

const width = Dimensions.get('screen').width
const card = () => {
  const arr = [
    {
      id: 1,
      title: 'Variables',
      image: require('../components/image.png'),
    },
    {
      id: 2,
      title: 'Python',
      image: require('../components/python.png'),
    },
    {
      id: 3,
      title: 'cpp',
      image: require('../components/image.png'),
    },
  ];
  return (
    <View style={{marginTop:'5%',marginBottom:0}}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={arr}
        renderItem={({item}) => {
          return (
            <View
              style={{
                borderRadius: 20,
                backgroundColor: '#FFF',
                margin:10,
                width: width*0.45,
              }}>
              <Image
                source={item.image}
                style={{
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  width: '100%',
                  resizeMode:'contain'
                }}
              />
              <Text style={{padding: '5%',marginBottom:'15%', color:'#000'}}>{item.title}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default card;
