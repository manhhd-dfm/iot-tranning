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
        PermissionsAndroid, ToastAndroid, Dimensions} from 'react-native';
import {StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import MapView, {  Marker, ProviderPropType, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

//import MapView from 'react-native-maps';

import dfmLogo  from '../src/image/DFM-Logo.png';
import styles   from '../styles.js';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

type Props = {};
export default class Map extends Component<Props> {
  constructor(props) {
    super(props);

  }
  
  watchId = null;

  state = {
    loading: false,
    updatesEnabled: false,
    updatesMarker: true,
    location: {},
    permission: true,
    positionLat: 0.0,
    positionLng: 0.0
  };

  componentDidMount(){
    this.getLocation();
  }

  componentWillMount(){
    this.getLocation();
  }  

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
          this.setState({positionLat:position.coords.latitude, positionLng: position.coords.longitude});
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
          this.setState({positionLat:position.coords.latitude, positionLng: position.coords.longitude});
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
    const { containerMap } = styles;
    const { loading, location, updatesEnabled } = this.state;

    return (
      <View style={{flex:1}}>
        <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={containerMap}
            region={{
              latitude: this.state.positionLat,
              longitude: this.state.positionLng,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          >
            <Marker
              onPress={() => this.setState({ marker1: !this.state.marker1 })}
              coordinate={{
                latitude: this.state.positionLat,
                longitude: this.state.positionLng,
              }}
              centerOffset={{ x: -18, y: -60 }}
              anchor={{ x: 0.69, y: 1 }}
            ></Marker>
        </MapView>

        <View style={styles.buttons}>
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
      </View>
    );
  }
}

