import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import SignUp from './SignUp';
import Login from './Login';

const LandingPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{height: '90%'}}>
        <View>
          <Image
            source={require('../components/Logo.png')}
            style={styles.img}
          />
        </View>
        <Text style={styles.txt}>Welcome to</Text>
        <Text style={styles.txt1}>VarCode</Text>
      </View>
      <View
        style={{
          height: '20%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginHorizontal: '10%',
        }}>
        <View style={{width:'50%'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(SignUp);
            
            }}>
            <Text
              style={{
                backgroundColor: '#FFF',
                borderRadius: 20,
                fontSize: 20,
                fontWeight: '600',
                color: '#000',
                padding: '10%',
                marginHorizontal: '5%',
                textAlign: 'center',
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{width:'50%'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(Login);
            }}>
            <Text
              style={{
                backgroundColor: '#000',
                borderRadius: 20,
                fontSize: 20,
                fontWeight: '600',
                color: '#FFF',
                padding: '10%',
                marginHorizontal: '5%',
                textAlign: 'center',
              }}>
              Log In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LandingPage;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3D67FF',
    height: '100%',
  },
  img: {
    alignSelf: 'center',
    marginTop: '30%',
  },
  txt: {
    marginTop: '5%',
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },
  txt1: {
    alignSelf: 'center',
    fontSize: 60,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  // sign: {
  //   borderColor: 'white',
  //   borderWidth: 1,
  //   marginBottom: 5,
  //   color: 'black',
  //   paddingVertical: 8,
  //   paddingHorizontal: 40,
  //   borderRadius: 20,
  //   backgroundColor: 'white',
  //   fontSize: 20,
  //   fontWeight: 'bold',
  // },
  // login: {
  //   borderColor: 'black',
  //   borderWidth: 1,
  //   marginBottom: 5,
  //   color: 'white',
  //   paddingVertical: 8,
  //   paddingHorizontal: 40,
  //   borderRadius: 20,
  //   backgroundColor: 'black',
  //   fontSize: 20,
  //   fontWeight: 'bold',
  // },
});
