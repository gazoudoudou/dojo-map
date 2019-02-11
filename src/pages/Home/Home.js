// @flow

import React, { PureComponent } from 'react';
import { StyleSheet, View, InteractionManager } from 'react-native';
import { NavigationScreenProps, withNavigationFocus } from 'react-navigation';
import { GoToMyLocationButton, AddStoryButton, MapView, Marker } from './components';
import theme from '../../theme';
import { checkPermissionAndGetCurrentLocation, positionToRegion, defaultRegion } from '../../lib/geolocation';

type PropsType = {
  isFocused: boolean,
} & NavigationScreenProps;

const storyObjects = [
  {
    id: '1',
    nickname: 'Gazou',
    story: 'coucou',
    location: {
      latitude: 48.882882,
      longitude: 2.322293,
    },
  },
  {
    id: '2',
    nickname: 'Bob',
    story: 'coucou',
    location: {
      latitude: 48.932882,
      longitude: 2.322293,
    },
  },
  {
    id: '3',
    nickname: 'Jacques',
    story: 'coucou',
    location: {
      latitude: 48.882882,
      longitude: 2.342293,
    },
  },
  {
    id: '4',
    nickname: 'Martin',
    story: 'coucou',
    location: {
      latitude: 48.892882,
      longitude: 2.372293,
    },
  },
];

class Home extends PureComponent<PropsType> {
  map: any = null;
  hasInitializedToInitialLocation: boolean = false;

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      if (!this.hasInitializedToInitialLocation && this.props.isFocused) {
        this._goToUserLocation();
      }
    });
  }

  _goToUserLocation = (isFromUserInteraction?: boolean): Promise<void> =>
    checkPermissionAndGetCurrentLocation(isFromUserInteraction)
      .then(position => positionToRegion(position))
      .catch(e => {
        console.warn(e);
        return defaultRegion;
      })
      .then((initialRegion: RegionType) => {
        this.map && this.map.animateToRegion(initialRegion);
        if (!this.hasInitializedToInitialLocation) {
          this.hasInitializedToInitialLocation = true;
        }
        return new Promise(resolve => setTimeout(resolve, 2000)); // eslint-disable-line promise/avoid-new
      });

  _onGoToMyLocationPress = () => this._goToUserLocation(true);

  _renderMarker = (storyObject: StoryObjectType, showNickname?: ?boolean) => (
    <Marker key={storyObject.id} storyObject={storyObject} onPress={() => {}} showNickname={showNickname} />
  );

  render() {
    return (
      <View style={styles.container}>
        <MapView
          setRef={ref => (this.map = ref)}
          style={styles.map}
          renderMarker={this._renderMarker}
          storyObjects={storyObjects}
        />
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

export default withNavigationFocus(Home);
