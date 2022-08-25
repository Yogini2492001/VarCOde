import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import SignUp from './SignUp';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Verify = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{height: '30%', padding: 20}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(SignUp);
          }}>
          <Ionicons
            style={{left: -8, color: 'white'}}
            name="chevron-back"
            size={40}
          />
        </TouchableOpacity>
        <Text style={{fontWeight: '700', color: '#FFF', fontSize: 40}}>
          Verify
        </Text>
        <Image
          style={{
            alignSelf: 'center',
            width: '60%',
            height: '95%',
            position: 'absolute',
            marginTop: '25%',
          }}
          source={require('./../components/mail.png')}
        />
      </View>
      <View style={{
            height: '70%',
            backgroundColor: '#363F61',
            zIndex: -1,
            padding: '5%',
            justifyContent:'space-between'
          }}>
        <View>
          <View>
            <Text
              style={{
                color: '#FFF',
                textAlign: 'center',
                fontSize: 18,
                marginTop: '20%',
                padding: 20,
              }}>
              Please Check Your email for the verification code sent to you
            </Text>
          </View>
          <View>
            <OTPInputView
              style={{
                width: '80%',
                height: '10%',
                alignSelf: 'center',
                marginTop: '5%',
              }}
              pinCount={4}
              autoFocusOnLoad
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              onCodeFilled={code => {
                console.log(`Code is ${code}, you are good to go!`);
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              textAlign: 'center',
              justifyContent: 'center',
              marginTop:'4%'
            }}>
            <Text style={{color: '#FFF', textAlign: 'center', fontSize: 14}}>
              Didn't receive an email?
            </Text>
            <TouchableOpacity>
              <Text style={{fontSize: 14, color: '#FFA439'}}>Send again</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
              <TouchableOpacity>
                <Text
                  style={{
                    color: '#000',
                    backgroundColor: '#FFF',
                    borderRadius: 20,
                    fontSize: 20,
                    textAlign: 'center',
                    width: '100%',
                    padding: 10,
                  }}>
                  Complete
                </Text>
              </TouchableOpacity>
            </View>

      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#3D67FF',
    justifyContent: 'space-between',
  },

  borderStyleBase: {
    width: 10,
    height: 15,
  },

  borderStyleHighLighted: {
    borderColor: '#424D73',
  },

  underlineStyleBase: {
    width: 35,
    height: 45,
    borderWidth: 3,
  },
  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
});

export default Verify;
