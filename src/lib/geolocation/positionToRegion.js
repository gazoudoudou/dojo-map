// @flow

export const positionToRegion = (position: { coords: { latitude: number, longitude: number } }): RegionType => ({
  latitude: position.coords.latitude,
  longitude: position.coords.longitude,
  latitudeDelta: 0.003,
  longitudeDelta: 0.003,
});
