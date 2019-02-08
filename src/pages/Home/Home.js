// @flow

import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import RNMapView from 'react-native-maps';

class Home extends PureComponent {
  render() {
    return <RNMapView style={styles.container} showsUserLocation={this.props.isFocused} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default withNavigationFocus(Home);
