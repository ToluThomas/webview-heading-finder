import React from 'react';
import {Text} from 'react-native';
import {textStyles} from 'utils/styles';
import {TextProps} from './H3';

export default function H5({text}: TextProps) {
  return <Text style={textStyles.h5} children={text} />;
}
