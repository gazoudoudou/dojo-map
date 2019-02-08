// @flow

import React, { PureComponent } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Home extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text>{'coucou'}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
