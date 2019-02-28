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

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },  
  image: {
    width: 200,
    height: 50,
    //alignItems: 'center',
    resizeMode: 'contain'
  },
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
    var temp = this.state.text;
    this.setState({
      textValue: temp});
    }

  onPressAlert() {
    Alert.alert('Hey!')
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image style={styles.image} source={require('./src/image/DFM-Logo.png')} />
        <Text style={styles.welcome}>Welcome to Martin!</Text>
        <TextInput
          style={{height: 40}}  
          placeholder="Type here something!"
          onChangeText={(text) => this.setState({text})}
        />
        <Button title="ENTER" onPress={this.onPress} />
        <Text style={{padding: 10, fontSize: 65}}>{this.state.textValue}</Text>

        <TouchableOpacity onPress={this.onPressAlert}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>

        <FlatList
          data={[{key: 'a'}, {key: 'b'}]}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />

      </ScrollView>
    );
  }
}


// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
