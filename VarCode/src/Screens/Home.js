import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';
import SnapCarousel from './SnapCarousel';


const Home = () => {
  return (
    <ScrollView>
      <View style={{backgroundColor: '#3D67FF'}}>
        <Image
          source={require('../components/W1.png')}
          style={{position: 'absolute', marginTop: '70%'}}
          
        />
        <View style={styles.container}>
          <View>
            <Text
              style={{
                color: '#FFFF',
                fontSize: 36,
                fontWeight: '700',
                marginTop: '5%',
              }}>
              Home Feed
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 24,
                fontWeight: '600',
                color: '#FFF',
                marginVertical: '5%',
              }}>
              Javascript
            </Text>
          </View>
          <SnapCarousel />

          <View>
            <Text
              style={{
                fontSize: 24,
                fontWeight: '600',
                color: '#FFF',
                marginVertical: '5%',
              }}>
              Javascript
            </Text>
          </View>
          <SnapCarousel />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    margin: '5%',
    padding: 5,
  },
});
export default Home;
