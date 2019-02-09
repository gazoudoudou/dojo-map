// @flow

import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { BackButton } from '../components';
import * as Pages from '../pages';

const AddStoryNavigator = createStackNavigator(
  {
    ChooseAddress: {
      screen: Pages.ChooseAddress,
    },
  },
  {
    initialRouteName: 'ChooseAddress',
    navigationOptions: {
      headerLeft: BackButton,
    },
  }
);

const RootNavigator = createStackNavigator(
  {
    Home: {
      screen: Pages.Home,
    },
    AddStory: {
      screen: AddStoryNavigator,
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
