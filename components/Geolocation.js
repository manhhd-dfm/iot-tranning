/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {FlatList, Platform, StyleSheet, ScrollView, Text, View, AppRegistry, TextInput, TouchableOpacity, Button, Alert, Image,
        PermissionsAndroid, ToastAndroid} from 'react-native';
import {StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import Geolocation from 'react-native-geolocation-service';

import dfmLogo  from '../src/image/DFM-Logo.png';
import styles   from '../styles.js';

type Props = {};
export default class Geoloc extends Component<Props> {
  constructor(props) {
    super(props);

  }
  
  watchId = null;

  state = {
    loading: false,
    updatesEnabled: false,
    location: {},
    permission: true
  };

  hasLocationPermission = async () => {

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (hasPermission) return true;

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) return true;

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show('Location permission denied by user.', ToastAndroid.LONG);
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show('Location permission revoked by user.', ToastAndroid.LONG);
    }

    return false;
  }

  getLocation = async () => {
    const hasLocationPermission = await this.hasLocationPermission();

    permission = hasLocationPermission;
    //this.setState.({permission});
    //ToastAndroid.show('hasLocationPermission: ', hasLocationPermission);
    if (!hasLocationPermission) return;

    this.setState({ loading: true }, () => {
      Geolocation.getCurrentPosition(
        (position) => {
          this.setState({ location: position, loading: false });
          console.log(position);
        },
        (error) => {
          this.setState({ location: error, loading: false });
          console.log(error);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000, distanceFilter: 50 }
      );
    });
  }

  getLocationUpdates = async () => {
    const hasLocationPermission = await this.hasLocationPermission();

    if (!hasLocationPermission) return;

    this.setState({ updatesEnabled: true }, () => {
      this.watchId = Geolocation.watchPosition(
        (position) => {
          this.setState({ location: position });
          console.log(position);
        },
        (error) => {
          this.setState({ location: error });
          console.log(error);
        },
        { enableHighAccuracy: true, distanceFilter: 0, interval: 5000, fastestInterval: 2000 }
      );
    });
  }

  removeLocationUpdates = () => {
      if (this.watchId !== null) {
          Geolocation.clearWatch(this.watchId);
          this.setState({ updatesEnabled: false })
      }
  }

  render() {
    const { loading, location, updatesEnabled } = this.state;
    return (
      <View style={styles.mainContainer}>
        <Image style={styles.image} source={dfmLogo} />
        <Text style={styles.welcome}>Welcome to Martin!</Text>
        <Text style={styles.welcome}>This is your Geolocation screen!</Text>
        <Button title='Get Location' onPress={this.getLocation} disabled={loading || updatesEnabled} />
        <View style={styles.buttons}>
            <Button title='Start Observing' onPress={this.getLocationUpdates} disabled={updatesEnabled} />
            <Button title='Stop Observing' onPress={this.removeLocationUpdates} disabled={!updatesEnabled} />
        </View>
        <View style={styles.result}>
            <Text>{JSON.stringify(location, null, 4)}</Text>
            <Text>{this.state.permission}</Text>
        </View>
        <Button
          title="Go to Home"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Home');
          }}
        />

      </View>
    );
  }
}

