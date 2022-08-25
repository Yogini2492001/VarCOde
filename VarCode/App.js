import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import LandingPage from './src/Screens/LandingPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from './src/Screens/SignUp';
import Login from './src/Screens/Login';
import Verify from './src/Screens/Verify';
import TabNavigation from './src/Screens/TabNavigation';
import SnapCarousel from './src/Screens/SnapCarousel';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignUp"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SnapCarousel" component={SnapCarousel} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Verify" component={Verify} />
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
