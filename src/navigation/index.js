// @flow

import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { BackButton } from '../components';
import * as Pages from '../pages';

const RootNavigator = createStackNavigator(
  {
    Home: {
      screen: Pages.Home,
      navigationOptions: {
        header: null,
      },
    },
    ChooseAddress: {
      screen: Pages.ChooseAddress,
    },
    WriteStory: {
      screen: Pages.WriteStory,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerLeft: BackButton,
    },
  }
);

export default class RootNavigation extends Component {
  render() {
    return <RootNavigator />;
  }
}
