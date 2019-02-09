// @flow

import React, { PureComponent } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import theme from '../../theme';

type PropsType = {};

class ChooseAddress extends PureComponent<PropsType> {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.searchInput} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchInput: {
    height: 3 * theme.margin,
    width: '100%',
  },
});

export default ChooseAddress;
