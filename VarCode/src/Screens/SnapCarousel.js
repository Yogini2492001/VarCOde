import React, {useState, useRef} from 'react';
import {Text, View, Dimensions, Image, TouchableOpacity} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const data = [
  {
    id: 1,
    title: 'Variables',
    defination: 'A JavaScript Variable is simply a name of storage location',
    topic1: 'Community Forum',
    topic1time: '5 min',
    topic2: 'Review Concept',
    topic2time: '5 min',
    topic3: 'Practical Skills',
    topic3time: '5 min',
    color: '#FFA439',
  },
  {
    id: 2,
    title: 'Variables',
    defination: 'A JavaScript Variable is simply a name of storage location',
    topic1: 'Community Forum',
    topic1time: '5 min',
    topic2: 'Review Concept',
    topic2time: '5 min',
    topic3: 'Practical Skills',
    topic3time: '5 min',
    color: '#14D39A',
  },
  {
    id: 3,
    title: 'Variables',
    defination: 'A JavaScript Variable is simply a name of storage location',
    topic1: 'Community Forum',
    topic1time: '5 min',
    topic2: 'Review Concept',
    topic2time: '5 min',
    topic3: 'Practical Skills',
    topic3time: '5 min',
    color: '#FFA439',
  },
];

const renderItem = ({item}) => {
  return (
    <View
      style={{
        borderRadius: 20,
        backgroundColor: item.color,
      }}>
      <View style={{padding: 20, marginVertical: 5}}>
        <Text>JAVASCRIPT</Text>
        <Text style={{fontSize: 35, fontWeight: 'bold'}}>{item.title}</Text>
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          padding: 20,
          borderBottomLeftRadius: 20,
          borderBottomEndRadius: 20,
        }}>
        <Text>{item.defination}</Text>
        <View style={{marginVertical: 10}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 15, fontWeight: '800', marginHorizontal: 10}}>
                {item.topic1}
              </Text>
              <Text>{item.topic1time}</Text>
            </View>

            <TouchableOpacity style={{marginHorizontal: 10}}>
              <FontAwesome name="angle-right" size={40} color={'#888'} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 15, fontWeight: '800', marginHorizontal: 10}}>
                {item.topic2}
              </Text>
              <Text>{item.topic2time}</Text>
            </View>

            <TouchableOpacity style={{marginHorizontal: 10}}>
              <FontAwesome name="angle-right" size={40} color={'#888'} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 15, fontWeight: '800', marginHorizontal: 10}}>
                {item.topic3}
              </Text>
              <Text>{item.topic3time}</Text>
            </View>

            <TouchableOpacity style={{marginHorizontal: 10}}>
              <FontAwesome name="angle-right" size={40} color={'#888'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
const bgcolor = index => {
  if (index % 2 != 0) {
    return '#14D39A';
  } else {
    return '#FFA439';
  }
};

const SnapCarousel = () => {
  const [index, setIndex] = useState(0);
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
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 20,
          height: 20,
          borderRadius: 10,
          marginHorizontal: 8,
          backgroundColor: bgcolor(index),
          // '#14D39A'
        }}
        tappableDots={true}
        inactiveDotStyle={{
          backgroundColor: '#fff',
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

export default SnapCarousel;
