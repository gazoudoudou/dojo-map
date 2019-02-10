// @flow
import React, { PureComponent } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Marker as RNMarker } from 'react-native-maps';
import { Text, Image } from '../../../../components';
import theme from '../../../../theme';

type PropsType = {
  storyObject: StoryType,
  onPress: Function,
  showNickname?: ?boolean,
};

const PlatformIsAndroid8OrMore = Platform.OS === 'android' && Platform.Version >= 25;

export default class Marker extends PureComponent<PropsType> {
  _onPress = () => this.props.onPress(this.props.storyObject);

  render() {
    const { storyObject, showNickname } = this.props;
    return (
      <RNMarker
        image={PlatformIsAndroid8OrMore ? theme.images.mapMarkerEmpty : null}
        key={storyObject.id}
        coordinate={{ longitude: storyObject.location.longitude, latitude: storyObject.location.latitude }}
        onPress={this._onPress}
      >
        {
          <View style={styles.container}>
            <View style={styles.pinContainer}>
              {PlatformIsAndroid8OrMore ? null : (
                <Image style={styles.emptyMarker} source={theme.images.mapMarkerEmpty} />
              )}
            </View>
            {showNickname && <Text style={styles.nickname}>{storyObject.nickname}</Text>}
          </View>
        }
      </RNMarker>
    );
  }
}

const styles = StyleSheet.create({
  emptyMarker: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  pinContainer: {
    width: 26,
    height: 33,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nickname: {
    fontWeight: '600',
    color: theme.colors.blueberry,
  },
  container: {
    alignItems: 'center',
  },
});
