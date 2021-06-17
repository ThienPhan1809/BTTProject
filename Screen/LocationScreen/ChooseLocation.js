/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import MapView, { PROVIDER_GOOGLE, } from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';

export default class ChooseLocation extends Component {
  render() {
    return (
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 16.06947322970616,
            longitude: 108.22257583009068,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').widt - 20,
    height: 400,
  },
});
