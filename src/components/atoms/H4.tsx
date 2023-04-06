import React from 'react';
import {Text} from 'react-native';
import {textStyles} from 'utils/styles';
import {TextProps} from './H3';

export default function H4({text}: TextProps) {
  return <Text style={textStyles.h4} children={text} />;
}
