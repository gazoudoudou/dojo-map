// @flow

import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { StackActions, NavigationActions, NavigationScreenProps } from 'react-navigation';
import { TextInput, TouchableOpacity, Text } from '../../components';
import I18n from '../../lib/I18n';
import theme from '../../theme';

type PropsType = {} & NavigationScreenProps;

type StateType = {
  nickname: string,
  story: string,
};

class WriteStory extends PureComponent<PropsType, StateType> {
  state = {
    nickname: '',
    story: '',
  };

  _onChangeNickname = (nickname: string) => this.setState({ nickname });

  _onChangeStory = (story: string) => this.setState({ story });

  _submitStory = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: 'Home',
        }),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder={I18n.t('WriteStory.nickname')}
          onChangeText={this._onChangeNickname}
          value={this.state.nickname}
          containerStyle={styles.nicknameContainer}
        />
        <TextInput
          placeholder={I18n.t('WriteStory.write_story')}
          onChangeText={this._onChangeStory}
          value={this.state.story}
          containerStyle={styles.storyContainer}
          multiline
        />
        <TouchableOpacity onPress={this._submitStory}>
          <Text>{I18n.t('WriteStory.submit')}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nicknameContainer: {
    marginBottom: 3 * theme.margin,
  },
  storyContainer: {
    minHeight: 10 * theme.margin,
  },
});

export default WriteStory;
