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
import dfmLogo from '../src/image/DFM-Logo.png';
import styles from '../styles.js';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
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

      </View>
    );
  }
}


// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
