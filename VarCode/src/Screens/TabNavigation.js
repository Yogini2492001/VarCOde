import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Search from './Search';

import Setting from './Setting';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        
        headerShown: false,
      }}
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 25,
          right: 20,
          left: 20,
          elevation: 0,
          backgroundColor: '#FFF',
          borderRadius: 15,
          height: 0,
        },
      }}>
      
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Feather
                style={{margin: 10, color: focused?'#9C6DFF': '#748c94'}}
                name="home"
                size={30}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Feather
                style={{margin: 10,  color: focused?'#9C6DFF': '#748c94'}}
                name="search"
                size={30}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Setting}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Ionicons
                style={{margin: 10, color: focused?'#9C6DFF': '#748c94'}}
                name="settings-outline"
                size={30}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({});

export default TabNavigation;
