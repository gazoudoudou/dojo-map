// @flow

import React, { PureComponent } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import theme from '../../theme';
import I18n from '../../lib/I18n';
import { findAddressesFromSearch } from '../../lib/geolocation';

type PropsType = {};

class ChooseAddress extends PureComponent<PropsType> {
  _onChangeSearchText = (address: string) => {
    findAddressesFromSearch(address).then(r => console.log(r));
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={this._onChangeSearchText}
          placeholder={I18n.t('ChooseAddress.search_input_placeholder')}
          style={styles.searchInput}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchInput: {
    height: 6 * theme.margin,
    width: '100%',
  },
});

export default ChooseAddress;
