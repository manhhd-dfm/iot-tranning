/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {FlatList, Platform, StyleSheet, ScrollView, Text, View, AppRegistry, TextInput, TouchableOpacity, Button, Alert, Image, Navigator} from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json

import styles from './styles.js';

import HomeScreen     from './components/Home.js';
import SettingsScreen from './components/Settings.js';
import List    from './components/List.js';
import Map    from './components/Map.js';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: SettingsScreen,
  },    
  List: {
    screen: List,
  },    
  Map: {
    screen: Map,
  },
}, 
{
    initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);