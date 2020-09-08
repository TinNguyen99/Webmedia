
import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//import FirstScreen from './FirstScreen';
//import SecondScreen from './SecondScreen';
//import Screen3 from './Screen3';
import S1 from './S1';
import S2 from './S2';

//import {FirstScreen1, SecondScreen1, Screen33} from './screenName';
//import {S11, S22} from './Screenname';

const AppNavigator = createStackNavigator({
  S11: {
    screen: S1,
    navigationOptions: {
      header: null,
    },
  },

  S22: {
    screen: S2,
    navigationOptions: {
    headerTitle: "Web Media"
    },
  }
});


export default createAppContainer(AppNavigator);
