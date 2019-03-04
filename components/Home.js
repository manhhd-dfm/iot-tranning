/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {FlatList, Platform, StyleSheet, ScrollView, Text, View, AppRegistry, TextInput, TouchableOpacity, Button, Alert, Image} from 'react-native';
import {StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json

import dfmLogo  from '../src/image/DFM-Logo.png';
import styles   from '../styles.js';

type Props = {};
export default class Home extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      textValue: ''
    };
  }

  onPress = () => {
    const textValue = this.state.text;
    this.setState({textValue});
    }

  onPressAlert() {
    Alert.alert('Hey!')
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Image style={styles.image} source={dfmLogo} />
        <Text style={styles.welcome}>Welcome to Martin!</Text>
        <Text style={styles.welcome}>This is your home screen!</Text>
        <TextInput
          style={{height: 40}}  
          placeholder="Type here something!"
          onChangeText={(text) => this.setState({text})}
        />
        <Button title="ENTER" onPress={this.onPress} />
        <Text style={{padding: 10, fontSize: 65}}>{this.state.textValue}</Text>
        
        <Button
          title="Go to Settings"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Details' })
              ],
            }))
          }}
        />

        <Button
          title="Go to BLE"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'BLE' })
              ],
            }))
          }}
        />

      </View>
    );
  }
}

