// @flow

import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { GoToMyLocationButton, AddStoryButton, MapView, Marker } from './components';
import theme from '../../theme';

type PropsType = {} & NavigationScreenProps;

const storyObjects = [
  {
    id: '1',
    nickname: 'Gazou',
    location: {
      latitude: 48.882882,
      longitude: 2.322293,
    },
  },
  {
    id: '2',
    nickname: 'Bob',
    location: {
      latitude: 48.932882,
      longitude: 2.322293,
    },
  },
  {
    id: '3',
    nickname: 'Jacques',
    location: {
      latitude: 48.882882,
      longitude: 2.342293,
    },
  },
  {
    id: '4',
    nickname: 'Martin',
    location: {
      latitude: 48.892882,
      longitude: 2.372293,
    },
  },
];

class Home extends PureComponent<PropsType> {
  _renderMarker = (storyObject: StoryType, showNickname?: ?boolean) => (
    <Marker key={storyObject.id} storyObject={storyObject} onPress={() => {}} showNickname={showNickname} />
  );

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} renderMarker={this._renderMarker} storyObjects={storyObjects} />
        <GoToMyLocationButton style={styles.goToMyLocationButton} onPress={this._onGoToMyLocationPress} />
        <AddStoryButton style={styles.addStoryButton} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  goToMyLocationButton: {
    position: 'absolute',
    bottom: theme.margin * 2,
    right: 0,
    marginRight: theme.margin * 2,
  },
  addStoryButton: {
    position: 'absolute',
    bottom: theme.margin * 2,
    left: 0,
    marginLeft: theme.margin * 2,
  },
});

export default Home;
