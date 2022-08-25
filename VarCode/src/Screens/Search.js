import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Card from './Card';
import Card1 from './Card1';

const Search = () => {
  return (
    <View style={style.container}>
      <View>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: '10%',
              borderRadius: 30,
              width: '90%',
              backgroundColor: '#FFF',
              textAlign: 'center',
              fontWeight: '500',
            }}>
            <Feather
              style={{margin: 10, color: '#CCCCCC'}}
              name="search"
              size={20}
            />
            <TextInput placeholder="Search for a concept, term, or keyword" />
          </View>
        </View>
        <View style={{flexDirection: 'row', padding: '5%'}}>
          <Text
            style={{
              backgroundColor: '#FFF',
              textAlign: 'center',
              marginHorizontal: '1%',
              padding: '1%',
              borderRadius: 5,
              fontSize: 14,
            }}>
            Variables
          </Text>
          <Text
            style={{
              backgroundColor: '#FFF',
              textAlign: 'center',
              marginHorizontal: '1%',
              padding: '1%',
              borderRadius: 5,
              fontSize: 14,
            }}>
            Functions
          </Text>
          <Text
            style={{
              backgroundColor: '#FFF',
              textAlign: 'center',
              marginHorizontal: '1%',
              padding: '1%',
              borderRadius: 5,
              fontSize: 12,
              fontWeight: '600',
            }}>
            Lorem Ipsum
          </Text>
        </View>
      </View>

      <View>
        <Text
          style={{
            padding: '5%',
            fontSize: 24,
            fontWeight: '700',
            color: '#FFF',
          }}>
          What can we help you find, vark?
        </Text>
        <View >
          <Card />
        </View>
      </View>

      <View style={{marginBottom: '5%'}}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '700',
            padding: '5%',
            color: '#FFF',
          }}>
          More ways to learn in 2021
        </Text>
        <Card1 />
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    backgroundColor: '#3D67FF',
    height: '100%',
    // justifyContent: 'space-between',
  },
});

export default Search;
