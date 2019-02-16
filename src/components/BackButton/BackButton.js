// @flow

import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import TouchableOpacity from '../TouchableOpacity';
import Icon from '../Icon';
import theme from '../../theme';

type PropsType = {
  onPress: Function,
};

class BackButton extends PureComponent<PropsType> {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        activeOpacity={0.7}
        hitSlop={{ top: 15, bottom: 15, left: 10, right: 10 }}
      >
        <Icon name="chevron-left" size={16} style={styles.backIcon} color={theme.colors.white} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  backIcon: {
    padding: 2 * theme.margin,
  },
});

export default BackButton;
