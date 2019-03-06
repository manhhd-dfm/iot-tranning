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
export default class Settings extends Component<Props> {
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
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Go to Details... again"
          onPress={() =>
            this.props.navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
            })}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
