// @flow

import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import RNMapView from 'react-native-maps';

type PropsType = {
  children: any,
  style?: any,
};

class MapView extends PureComponent<PropsType> {
  render() {
    const { style, children } = this.props;
    return (
      <RNMapView style={[styles.container, style]} showsUserLocation={this.props.isFocused}>
        {children}
      </RNMapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default withNavigationFocus(MapView);
