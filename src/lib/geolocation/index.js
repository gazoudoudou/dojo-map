// @flow

import { Platform, Alert } from 'react-native';
import Permissions from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import LocationServicesDialogBox from 'react-native-android-location-services-dialog-box';
import I18n from '../I18n';

export { findAddressesFromSearch } from './geocoder';
export { positionToRegion } from './positionToRegion';

const checkLocationPermissionAndAskIfPossible = (isFromUserInteraction?: boolean) => {
  return getLocationPermissionStatus().then(status => {
    switch (status) {
      case 'authorized':
        return true;
      case 'undetermined':
        return askForLocationPermission();
      case 'denied':
        if (isFromUserInteraction) return askForLocationPermissionAgain();
        return false;
      case 'restricted':
        if (isFromUserInteraction && Platform.OS === 'android') {
          Alert.alert(
            null,
            I18n.t('Home.activate_geoloc_in_settings'),

            [
              {
                text: I18n.t('Home.ok'),
                onPress: () => null,
              },
            ],
            { cancelable: true }
          );
        }
        return false;
      default:
        return false;
    }
  });
};

const askForLocationPermissionAgain = () => {
  if (Platform.OS === 'android') {
    return askForLocationPermission();
  }
  return false;
};

const askForLocationPermission = () => {
  return Permissions.request('location').then(response => response === 'authorized');
};

export const getLocationPermissionStatus = () => Permissions.check('location');

const checkLocationIsAllowed = (isFromUserInteraction?: boolean) => {
  return checkLocationPermissionAndAskIfPossible(isFromUserInteraction).then(allowed => {
    return allowed ? checkLocationServicesEnabled() : Promise.reject(); // eslint-disable-line prefer-promise-reject-errors
  });
};

const checkLocationServicesEnabled = () => {
  if (Platform.OS !== 'android') {
    return;
  }
  return LocationServicesDialogBox.checkLocationServicesIsEnabled({ showDialog: false, enableHighAccuracy: false });
};

export const checkPermissionAndGetCurrentLocation = (isFromUserInteraction?: boolean) => {
  return checkLocationIsAllowed(isFromUserInteraction).then(() => getUserLocation());
};

export const getUserLocation = () =>
  /* eslint-disable promise/avoid-new */
  new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(position => resolve(position), e => reject(e), {
      timeout: 8000,
      maximumAge: 10000,
    });
  });
/* eslint-enable promise/avoid-new */

export const getUserLocationCoordsIfAllowed = async (): Promise<?{ latitude: number, longitude: number }> => {
  try {
    const geolocationPermissionStatus = await getLocationPermissionStatus();
    if (geolocationPermissionStatus === 'authorized') {
      const location = await getUserLocation();
      return location.coords;
    }
  } catch (error) {
    console.warn(error);
  }
  return null;
};

export const defaultRegion = {
  //France
  latitude: 47.79996609521493,
  latitudeDelta: 15.27934578877349,
  longitude: 1.957765156227698,
  longitudeDelta: 14.42444693200306,
};
