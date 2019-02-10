// @flow

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import RootNavigation from './navigation';
import theme from './theme';

export default class App extends Component {
  render() {
    return (
      <PaperProvider theme={paperTheme}>
        <RootNavigation />
      </PaperProvider>
    );
  }
}

const paperTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.colors.text,
  },
  fonts: {
    regular: 'NunitoSans-Regular',
    light: 'NunitoSans-Regular',
    thin: 'NunitoSans-Regular',
    medium: 'NunitoSans-SemiBold',
  },
};
