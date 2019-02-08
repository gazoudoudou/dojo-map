// @flow

import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import * as Pages from '../pages';

const RootNavigator = createStackNavigator(
  {
    Home: {
      screen: Pages.Home,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      header: null,
    },
  }
);

export default class RootNavigation extends Component {
  render() {
    return <RootNavigator />;
  }
}
