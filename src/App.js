import React, { useState } from 'react';
/* import type {Node} from 'react'; */
import {
  StyleSheet,
  Text,
  View,

} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

import HomeScreen from './HomeScreen';
import MainScreen from './MainScreen';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

// const Tab = createBottomTabNavigator();


const App /*: () => Node */ = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if(route.name == "HomeScreen") {
              iconName = "brain"
              size = focused ? 25 : 20
              color = focused ? '#000' : '#777'
            } else  if(route.name == "MainScreen"){
              iconName = "biohazard"
              size = focused ? 25 : 20
              color = focused ? '#000' : '#777'
            }
            return (
              <FontAwesome5
                name={iconName}
                size={size}
                color={color}
              />
            )
          },
          tabBarShowLabel : false,
          tabBarActiveBackgroundColor: "#fff",
          tabBarInactiveBackgroundColor: '#ccc',
        })}
        
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
        <Tab.Screen
          name='MainScreen'
          component={MainScreen}
          // options={ {tabBarBadge: 3}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({

});

export default App;
