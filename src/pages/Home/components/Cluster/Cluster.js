// @flow

import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Marker } from 'react-native-maps';

const SIZE = 40;
const OUTERSKIRT = 10;

type PropsType = {
  cluster: {
    properties: {
      point_count: number,
      cluster_id: string,
    },
    geometry: {
      coordinates: Array<number>,
    },
  },
  color?: string,
  onPress: Function,
};

export default class Cluster extends PureComponent<PropsType> {
  render() {
    const { color, cluster } = this.props;
    const { point_count, cluster_id } = cluster.properties;
    const coordinates = cluster.geometry.coordinates;

    return (
      <Marker
        id={cluster_id}
        coordinate={{ latitude: coordinates[1], longitude: coordinates[0] }}
        width={SIZE}
        height={SIZE}
        anchor={{ x: 0.5, y: 0.5 }}
        onPress={this.props.onPress}
      >
        <View style={[styles.clusterOuter, color && { backgroundColor: `rgba(${color}, 0.25)` }]}>
          <View style={[styles.cluster, color && { backgroundColor: `rgb(${color})` }]}>
            <Text style={styles.clusterText}>{point_count}</Text>
          </View>
        </View>
      </Marker>
    );
  }
}

const styles = StyleSheet.create({
  clusterOuter: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(240, 36, 90,0.25)',
  },
  cluster: {
    width: SIZE - OUTERSKIRT,
    height: SIZE - OUTERSKIRT,
    borderRadius: (SIZE - OUTERSKIRT) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(240, 36, 90)',
  },
  clusterText: {
    fontSize: 12,
    color: 'white',
  },
});
