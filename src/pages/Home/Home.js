// @flow

import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { GoToMyLocationButton, MapView } from './components';
import theme from '../../theme';

type PropsType = {};

class Home extends PureComponent<PropsType> {
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} />
        <GoToMyLocationButton style={styles.goToMyLocationButton} onPress={this._onGoToMyLocationPress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  goToMyLocationButton: {
    position: 'absolute',
    bottom: theme.margin * 2,
    right: 0,
    marginRight: theme.margin * 2,
  },
});

export default Home;
