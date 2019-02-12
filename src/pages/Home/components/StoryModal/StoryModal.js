// @flow

import React, { PureComponent } from 'react';
import { StyleSheet, View, Dimensions, Modal, TouchableWithoutFeedback, ScrollView } from 'react-native';
import theme from '../../../../theme';
import { TouchableOpacity, Icon, Text } from '../../../../components';

type PropsType = {
  onClose: Function,
  visible: boolean,
  storyObject: StoryObjectType,
  style?: any,
};

export default class StoryModal extends PureComponent<PropsType> {
  render() {
    const { onClose, visible, style, storyObject } = this.props;
    return (
      <Modal animationType="fade" transparent visible={visible} onRequestClose={onClose}>
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.modalBackground} />
        </TouchableWithoutFeedback>
        <View style={[styles.container, style]}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Icon name="cross" color={theme.colors.deepGrey} size={12} />
          </TouchableOpacity>
          <Text style={styles.nickname}>{storyObject.nickname}</Text>
          <ScrollView style={styles.storyContainer} showsVerticalScrollIndicator={false}>
            <Text>{storyObject.story}</Text>
          </ScrollView>
        </View>
      </Modal>
    );
  }
}

const MARGIN_HORIZONTAL = 3 * theme.margin;
const MARGIN_VERTICAL = 4 * theme.margin;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: MARGIN_VERTICAL,
    left: MARGIN_HORIZONTAL,
    height: Dimensions.get('window').height - 2 * MARGIN_VERTICAL,
    width: Dimensions.get('window').width - 2 * MARGIN_HORIZONTAL,
    borderRadius: 5,
    padding: 2 * theme.margin,
    backgroundColor: theme.colors.white,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: theme.colors.darkGrey,
    opacity: 0.4,
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'transparent',
    padding: 2 * theme.margin,
  },
  nickname: {
    marginTop: 4 * theme.margin,
    marginBottom: 3 * theme.margin,
  },
  storyContainer: {
    flex: 1,
    overflow: 'hidden',
  },
});
