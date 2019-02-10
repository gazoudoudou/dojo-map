// @flow

import React from 'react';
import { Image as RNImage } from 'react-native';
import FastImage from 'react-native-fast-image';

type PropsType = Object;

// Using FastImage for local image can create memory overflows
// See https://github.com/DylanVann/react-native-fast-image/issues/195

const Image = (props: PropsType) => {
  const ImageComponent = typeof props.source === 'number' ? RNImage : FastImage;
  return <ImageComponent {...props} />;
};

export default Image;
