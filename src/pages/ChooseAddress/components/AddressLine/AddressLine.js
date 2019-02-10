// @flow

import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import theme from '../../../../theme';
import { TouchableOpacity, Text } from '../../../../components';

type PropsType = {
  foundAddress: {
    address: string,
    location: { latitude: number, longitude: number },
  },
};

class AddressLine extends PureComponent<PropsType> {
  _onPress = () => {};

  render() {
    return (
      <TouchableOpacity onPress={this._onPress} style={styles.container}>
        <Text>{this.props.foundAddress.address}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 3 * theme.margin,
  },
});

export default AddressLine;
