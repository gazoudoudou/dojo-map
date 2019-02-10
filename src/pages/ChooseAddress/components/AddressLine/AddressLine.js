// @flow

import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationScreenProps, withNavigation } from 'react-navigation';
import theme from '../../../../theme';
import { TouchableOpacity, Text } from '../../../../components';

type PropsType = {
  foundAddress: {
    address: string,
    location: { latitude: number, longitude: number },
  },
} & NavigationScreenProps;

class AddressLine extends PureComponent<PropsType> {
  _onPress = () => this.props.navigation.navigate('WriteStory', { location: this.props.foundAddress.location });

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

export default withNavigation(AddressLine);
