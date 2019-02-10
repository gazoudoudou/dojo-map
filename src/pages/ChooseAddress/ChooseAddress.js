// @flow

import React, { PureComponent } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import { debounce } from 'lodash';
import { AddressLine } from './components';
import I18n from '../../lib/I18n';
import { TextInput, Text } from '../../components';
import { findAddressesFromSearch } from '../../lib/geolocation';
import theme from '../../theme';

type PropsType = {};

type StateType = {
  foundAddresses: {
    address: string,
    location: { latitude: number, longitude: number },
  }[],
  isLoading: boolean,
  searchText: string,
};

const SEARCH_TEXT_LENGTH_THRESHOLD = 3;

class ChooseAddress extends PureComponent<PropsType, StateType> {
  state = {
    foundAddresses: [],
    isLoading: false,
    searchText: '',
  };

  _findAddressesFromSearch = (searchText: string) => {
    this.setState({ isLoading: true }, () => {
      findAddressesFromSearch(searchText)
        .then(foundAddresses => this.setState({ foundAddresses }))
        .catch(console.warn)
        .finally(() => this.setState({ isLoading: false }));
    });
  };

  _debounceFindAddressesFromSearch = debounce(this._findAddressesFromSearch, 750);

  _onChangeSearchText = (searchText: string) => {
    this.setState({ searchText });
    if (searchText.length >= SEARCH_TEXT_LENGTH_THRESHOLD) {
      this._debounceFindAddressesFromSearch(searchText);
    }
  };

  _keyExtractor = (item: { address: string, location: { latitude: number, longitude: number } }): string =>
    item.address;

  _renderAddressLine = ({
    item: foundAddress,
    index,
  }: {
    item: {
      address: string,
      location: { latitude: number, longitude: number },
    },
    index: number,
  }): any => <AddressLine foundAddress={foundAddress} />;

  _renderEmptyAddressesList = () =>
    this.state.searchText.length >= SEARCH_TEXT_LENGTH_THRESHOLD ? (
      <Text>{I18n.t('ChooseAddress.no_result_found')}</Text>
    ) : null;

  render() {
    const shouldShowLoader = this.state.isLoading && (!this.state.foundAddresses || !this.state.foundAddresses.length);
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={this._onChangeSearchText}
          placeholder={I18n.t('ChooseAddress.search_input_placeholder')}
          value={this.state.searchText}
          style={styles.searchInput}
        />
        <View style={[styles.addressesListContainer, shouldShowLoader && styles.loaderContainer]}>
          {shouldShowLoader ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={this.state.foundAddresses}
              renderItem={this._renderAddressLine}
              keyExtractor={this._keyExtractor}
              contentContainerStyle={
                (!this.state.foundAddresses || !this.state.foundAddresses.length) && styles.emptyContentContainer
              }
              ListEmptyComponent={this._renderEmptyAddressesList}
            />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyContentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  addressesListContainer: {
    flex: 1,
  },
  loaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    marginBottom: 3 * theme.margin,
  },
});

export default ChooseAddress;
