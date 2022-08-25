import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LandingPage from './LandingPage';
import Verify from './Verify';

const SignUp = ({navigation}) => {
  //Validate Username
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState(null);

  function validateUsername(text) {
    const re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (text.length < 3 || !re.test(text)) {
      setUsernameError('Name is Not Valid');
      return false;
    } else {
      setUsernameError(null);
      return true;
    }
  }
  //Validate Email
  const [Password, setpassword] = useState('');
  const [passwordError, setpasswordError] = useState(null);

  function validatePassword(text) {
    const re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (text.length < 3 || !re.test(text)) {
      setpasswordError('Paswordis Not Valid');
      return false;
    } else {
      setpasswordError(null);
      return true;
    }
  }
  //validate password
  const [Email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(null);

  function validateEmail(text) {
    const re =
      /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/;
    if (text.length < 3 || !re.test(text)) {
      setEmailError('email is Not Valid');
      return false;
    } else {
      setEmailError(null);
      return true;
    }
  }
  // validate
  function validateall() {
    if (
      validateUsername(username) &&
      validateEmail(Email) &&
      validatePassword(Password)
    ) {
      navigation.navigate('Verify');
    } else if (validateEmail(Email) && validatePassword(Password)) {
      validateEmail(Email);
    } else validatePassword(Password);
  }

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(LandingPage);
          }}>
          <Ionicons
            style={{left: -8, color: 'white'}}
            name="chevron-back"
            size={40}
          />
        </TouchableOpacity>
        <Text style={styles.sign}>Sign up</Text>
      </View>
      <View>
        <View>
          <Text style={styles.label}>Username</Text>
        </View>
        <View
          style={[
            styles.input,
            {borderColor: usernameError ? 'red' : 'green', borderWidth: 2},
          ]}>
          <AntDesign
            style={{margin: 10, color: 'black'}}
            name="user"
            size={20}
          />
          <TextInput
            maxLength={20}
            placeholder="Username"
            placeholderTextColor="#7E7E7E"
            style={styles.textBox}
            value={username}
            onChangeText={text => {
              validateUsername(text);
              setUsername(text);
            }}></TextInput>
        </View>
        {usernameError && (
          <Text style={{color: 'red', marginLeft: 15}}>{usernameError}</Text>
        )}
        <View style={{marginTop: 10}}>
          <Text style={styles.label}>Email Address</Text>
        </View>
        <View
          style={[
            styles.input,
            {borderColor: emailError ? 'red' : 'green', borderWidth: 2},
          ]}>
          <AntDesign
            style={{margin: 10, color: 'black'}}
            name="mail"
            size={20}
          />
          <TextInput
            placeholder={'Email Address'}
            placeholderTextColor="#7E7E7E"
            style={styles.textBox}
            value={Email}
            onChangeText={text => {
              validateEmail(text);
              setEmail(text);
            }}></TextInput>
        </View>
        {emailError && (
          <Text style={{color: 'red', marginLeft: 15}}>{emailError}</Text>
        )}
        <View style={{marginTop: 10}}>
          <Text style={styles.label}>Password</Text>
        </View>

        <View
          style={[
            styles.input,
            ,
            {borderColor: passwordError ? 'red' : 'green', borderWidth: 2},
          ]}>
          <Feather style={{margin: 10, color: 'black'}} name="lock" size={20} />
          <TextInput
            maxLength={30}
            placeholder={'Password'}
            secureTextEntry={true}
            placeholderTextColor="#7E7E7E"
            style={styles.textBox}
            value={Password}
            onChangeText={text => {
              validatePassword(text);
              setpassword(text);
            }}></TextInput>
        </View>
        {passwordError && (
          <Text style={{color: 'red', marginLeft: 15}}>{passwordError}</Text>
        )}
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            validateall();
            // navigation.navigate(Verify);
          }}>
          <Text
            style={{
              color: 'white',
              backgroundColor: '#000',
              borderRadius: 20,
              fontSize: 20,
              textAlign: 'center',
              width: '100%',
              // marginBottom: '3%',
              padding: '3%',
            }}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#3D67FF',
    justifyContent: 'space-between',
    padding: '5%',
  },
  sign: {
    fontWeight: '700',
    color: 'white',
    fontSize: 40,
  },
  label: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    // marginVertical: '2%',
  },
  textBox: {
    borderColor: 'black',
    padding: '3%',
    width: '100%',
    color: 'black',
  },
  input: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'black',
    width: '100%',
    color: 'black',

    flexDirection: 'row',
    borderRadius: 20,
  },
});

export default SignUp;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 