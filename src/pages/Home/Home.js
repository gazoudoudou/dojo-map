// @flow

import React, { PureComponent } from 'react';
import { StyleSheet, View, InteractionManager } from 'react-native';
import { NavigationScreenProps, withNavigationFocus } from 'react-navigation';
import { MapButton, MapView, StoryModal } from './components';
import theme from '../../theme';
import { checkPermissionAndGetCurrentLocation, positionToRegion, defaultRegion } from '../../lib/geolocation';

type PropsType = {
  isFocused: boolean,
} & NavigationScreenProps;

type StateType = {
  selectedStoryObject: ?StoryObjectType,
};

const storyObjects = [
  {
    id: '1',
    nickname: 'Gazou',
    story:
      'smdfqsdlmf=kjqsD+Mlfkjqs=dlkfgjqs=dlkgjq=sdlgkjqs=dlgk:q=sdjg=lqskdgj=qlkdjg=qlskdgjqsld:kgjq=sldgkjq=sdlgkqjsgdlkosmdfqsdlmf=kjqsD+Mlfkjqs=dlkfgjqs=dlkgjq=sdlgkjqs=dlgk:q=sdjg=lqskdgj=qlkdjg=qlskdgjqsld:kgjq=sldgkjq=sdlgkqjsgdlkojmsdf:ksmdfqsdlmf=kjqsD+Mlfkjqs=dlkfgjqs=dlkgjq=sdlgkjqs=dlgk:q=sdjg=lqskdgj=qlkdjg=qlskdgjqsld:kgjq=sldgkjq=sdlgkqjsgdlkojmsdf:ksmdfqsdlmf=kjqsD+Mlfkjqs=dlkfgjqs=dlkgjq=sdlgkjqs=dlgk:q=sdjg=lqskdgj=qlkdjg=qlskdgjqsld:kgjq=sldgkjq=sdlgkqjsgdlkojmsdf:ksmdfqsdlmf=kjqsD+Mlfkjqs=dlkfgjqs=dlkgjq=sdlgkjqs=dlgk:q=sdjg=lqskdgj=qlkdjg=qlskdgjqsld:kgjq=sldgkjq=sdlgkqjsgdlkojmsdf:ksmdfqsdlmf=kjqsD+Mlfkjqs=dlkfgjqs=dlkgjq=sdlgkjqs=dlgk:q=sdjg=lqskdgj=qlkdjg=qlskdgjqsld:kgjq=sldgkjq=sdlgkqjsgdlkojmsdf:ksmdfqsdlmf=kjqsD+Mlfkjqs=dlkfgjqs=dlkgjq=sdlgkjqs=dlgk:q=sdjg=lqskdgj=qlkdjg=qlskdgjqsld:kgjq=sldgkjq=sdlgkqjsgdlkojmsdf:ksmdfqsdlmf=kjqsD+Mlfkjqs=dlkfgjqs=dlkgjq=sdlgkjqs=dlgk:q=sdjg=lqskdgj=qlkdjg=qlskdgjqsld:kgjq=sldgkjq=sdlgkqjsgdlkojmsdf:ksmdfqsdlmf=kjqsD+Mlfkjqs=dlkfgjqs=dlkgjq=sdlgkjqs=dlgk:q=sdjg=lqskdgj=qlkdjg=qlskdgjqsld:kgjq=sldgkjq=sdlgkqjsgdlkojmsdf:ksmdfqsdlmf=kjqsD+Mlfkjqs=dlkfgjqs=dlkgjq=sdlgkjqs=dlgk:q=sdjg=lqskdgj=qlkdjg=qlskdgjqsld:kgjq=sldgkjq=sdlgkqjsgdlkojmsdf:ksmdfqsdlmf=kjqsD+Mlfkjqs=dlkfgjqs=dlkgjq=sdlgkjqs=dlgk:q=sdjg=lqskdgj=qlkdjg=qlskdgjqsld:kgjq=sldgkjq=sdlgkqjsgdlkojmsdf:ksmdfqsdlmf=kjqsD+Mlfkjqs=dlkfgjqs=dlkgjq=sdlgkjqs=dlgk:q=sdjg=lqskdgj=qlkdjg=qlskdgjqsld:kgjq=sldgkjq=sdlgkqjsgdlkojmsdf:ksmdfqsdlmf=kjqsD+Mlfkjqs=dlkfgjqs=dlkgjq=sdlgkjqs=dlgk:q=sdjg=lqskdgj=qlkdjg=qlskdgjqsld:kgjq=sldgkjq=sdlgkqjsgdlkojmsdf:ksmdfqsdlmf=kjqsD+Mlfkjqs=dlkfgjqs=dlkgjq=sdlgkjqs=dlgk:q=sdjg=lqskdgj=qlkdjg=qlskdgjqsld:kgjq=sldgkjq=sdlgkqjsgdlkojmsdf:ksmdfqsdlmf=kjqsD+Mlfkjqs=dlkfgjqs=dlkgjq=sdlgkjqs=dlgk:q=sdjg=lqskdgj=qlkdjg=qlskdgjqsld:kgjq=sldgkjq=sdlgkqjsgdlkojmsdf:ksmdfqsdlmf=kjqsD+Mlfkjqs=dlkfgjqs=dlkgjq=sdlgkjqs=dlgk:q=sdjg=lqskdgj=qlkdjg=qlskdgjqsld:kgjq=sldgkjq=sdlgkqjsgdlkojmsdf:ksmdfqsdlmf=kjqsD+Mlfkjqs=dlkfgjqs=dlkgjq=sdlgkjqs=dlgk:q=sdjg=lqskdgj=qlkdjg=qlskdgjqsld:kgjq=sldgkjq=sdlgkqjsgdlkojmsdf:ksmdfqsdlmf=kjqsD+Mlfkjqs=dlkfgjqs=dlkgjq=sdlgkjqs=dlgk:q=sdjg=lqskdgj=qlkdjg=qlskdgjqsld:kgjq=sldgkjq=sdlgkqjsgdlkojmsdf:ksmdfqsdlmf=kjqsD+Mlfkjqs=dlkfgjqs=dlkgjq=sdlgkjqs=dlgk:q=sdjg=lqskdgj=qlkdjg=qlskdgjqsld:kgjq=sldgkjq=sdlgkqjsgdlkojmsdf:ksmdfqsdlmf=kjqsD+Mlfkjqs=dlkfgjqs=dlkgjq=sdlgkjqs=dlgk:q=sdjg=lqskdgj=qlkdjg=qlskdgjqsld:kgjq=sldgkjq=sdlgkqjsgdlkojmsdf:ksmdfqsdlmf=kjqsD+Mlfkjqs=dlkfgjqs=dlkgjq=sdlgkjqs=dlgk:q=sdjg=lqskdgj=qlkdjg=qlskdgjqsld:kgjq=sldgkjq=sdlgkqjsgdlkojmsdf:ksmdfqsdlmf=kjqsD+Mlfkjqs=dlkfgjqs=dlkgjq=sdlgkjqs=dlgk:q=sdjg=lqskdgj=qlkdjg=qlskdgjqsld:kgjq=sldgkjq=sdlgkqjsgdlkojmsdf:ksmdfqsdlmf=kjqsD+Mlfkjqs=dlkfgjqs=dlkgjq=sdlgkjqs=dlgk:q=sdjg=lqskdgj=qlkdjg=qlskdgjqsld:kgjq=sldgkjq=sdlgkqjsgdlkojmsdf:ksmdfqsdlmf=kjqsD+Mlfkjqs=dlkfgjqs=dlkgjq=sdlgkjqs=dlgk:q=sdjg=lqskdgj=qlkdjg=qlskdgjqsld:kgjq=sldgkjq=sdlgkqjsgdlkojmsdf:kjmsdf:k',
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

class Home extends PureComponent<PropsType, StateType> {
  map: any = null;
  hasInitializedToInitialLocation: boolean = false;

  state = {
    selectedStoryObject: null,
  };

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

  _onAddStoryButtonPress = () => this.props.navigation.navigate('ChooseAddress');

  _onGoToMyLocationPress = () => this._goToUserLocation(true);

  _onStoryModalClose = () => this.setState({ selectedStoryObject: null });

  _onStoryMarkerPress = (selectedStoryObject: StoryObjectType) => this.setState({ selectedStoryObject });

  render() {
    return (
      <View style={styles.container}>
        <MapView
          setRef={ref => (this.map = ref)}
          style={styles.map}
          storyObjects={storyObjects}
          onStoryMarkerPress={this._onStoryMarkerPress}
        />
        <MapButton
          style={styles.goToMyLocationButton}
          onPress={this._onGoToMyLocationPress}
          iconColor={theme.colors.lightGrey}
          iconName="my-location"
        />
        <MapButton
          style={styles.addStoryButton}
          onPress={this._onAddStoryButtonPress}
          iconColor={theme.colors.white}
          iconName="plus"
        />
        {!!this.state.selectedStoryObject && (
          <StoryModal
            visible={!!this.state.selectedStoryObject}
            storyObject={this.state.selectedStoryObject}
            onClose={this._onStoryModalClose}
          />
        )}
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
    backgroundColor: theme.colors.white,
  },
  addStoryButton: {
    position: 'absolute',
    bottom: theme.margin * 2,
    left: 0,
    marginLeft: theme.margin * 2,
    backgroundColor: theme.colors.blueberry,
  },
});

export default withNavigationFocus(Home);
