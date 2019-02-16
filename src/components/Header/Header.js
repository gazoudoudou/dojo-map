// @flow

import React, { PureComponent } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { withNavigation, NavigationScreenProps } from 'react-navigation';
import Icon from '../Icon';
import Separator from '../Separator';
import TextInput from '../TextInput';
import BackButton from '../BackButton';
import TouchableOpacity from '../TouchableOpacity';
import theme from '../../theme';

type PropsType = {
  iconName: string,
  onChangeText: Function,
  placeholder: string,
  onSubmit?: Function,
  canSubmit?: boolean,
} & NavigationScreenProps;

type StateType = {
  inputText: string,
};

class Header extends PureComponent<PropsType, StateType> {
  state = {
    inputText: '',
  };

  _onChangeText = (inputText: string) => {
    this.props.onChangeText && this.props.onChangeText(inputText);
    return this.setState({ inputText });
  };

  _onBackButtonPress = () => this.props.navigation.goBack();

  _onSubmit = () => {
    const { onSubmit, canSubmit } = this.props;
    return canSubmit ? onSubmit() : null;
  };

  render() {
    const { iconName, placeholder, onSubmit, canSubmit } = this.props;
    return (
      <View>
        <StatusBar backgroundColor={theme.colors.blueberry} />
        <View style={styles.container}>
          <View style={styles.headerTop}>
            <BackButton onPress={this._onBackButtonPress} />
            {onSubmit && (
              <TouchableOpacity
                onPress={this._onSubmit}
                activeOpacity={0.7}
                hitSlop={{ top: 15, bottom: 15, left: 10, right: 10 }}
              >
                <Icon
                  name="check"
                  size={16}
                  style={styles.submitIcon}
                  color={canSubmit ? theme.colors.white : theme.colors.deepGrey}
                />
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.inputContainer}>
            <Icon name={iconName} size={20} color={theme.colors.primary} />
            <TextInput
              style={styles.input}
              numberOfLines={1}
              value={this.state.inputText}
              onChangeText={this._onChangeText}
              placeholder={placeholder}
              placeholderTextColor={'rgba(255, 255, 255,0.5)'}
            />
          </View>
          <Separator color={theme.colors.primary} style={styles.separator} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.margin,
    marginHorizontal: 2 * theme.margin,
    marginTop: theme.margin,
  },
  input: {
    ...theme.typo.title,
    marginLeft: theme.margin,
    marginRight: theme.margin,
    color: theme.colors.white,
  },
  container: {
    backgroundColor: theme.colors.blueberry,
    paddingTop: 2 * theme.margin,
  },
  separator: {
    marginBottom: 3 * theme.margin,
    marginHorizontal: 2 * theme.margin,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  submitIcon: {
    padding: 2 * theme.margin,
  },
});

export default withNavigation(Header);
