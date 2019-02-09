// @flow

import React, { PureComponent } from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from '../../../../components';

import theme from '../../../../theme';

type PropsType = {
  onPress: Function,
  style?: any,
};

class GoToMyLocationButton extends PureComponent<PropsType> {
  render() {
    const { onPress, style } = this.props;
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={[styles.locationButton, style]}>
        <Text>{'la'}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  locationButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.6,
  },
});

export default GoToMyLocationButton;
