// @flow

import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import { withNavigation, NavigationScreenProps } from 'react-navigation';
import { TouchableOpacity, Icon } from '../../../../components';

import theme from '../../../../theme';

type PropsType = {
  style?: any,
} & NavigationScreenProps;

class AddStoryButton extends PureComponent<PropsType> {
  _navigateToChooseAddress = () => this.props.navigation.navigate('ChooseAddress');

  render() {
    const { style } = this.props;
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={this._navigateToChooseAddress} style={[styles.container, style]}>
        <Icon name="plus" color={theme.colors.lightGrey} size={20} />
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

export default withNavigation(AddStoryButton);
