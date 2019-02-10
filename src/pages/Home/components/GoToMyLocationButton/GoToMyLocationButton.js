// @flow

import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity, Icon } from '../../../../components';

import theme from '../../../../theme';

type PropsType = {
  onPress: Function,
  style?: any,
};

class GoToMyLocationButton extends PureComponent<PropsType> {
  render() {
    const { onPress, style } = this.props;
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={[styles.container, style]}>
        <Icon name="my-location" color={theme.colors.lightGrey} size={20} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 2,
    shadowOpacity: 0.6,
  },
});

export default GoToMyLocationButton;
