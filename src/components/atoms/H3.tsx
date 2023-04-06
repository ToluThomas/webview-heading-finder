import React from 'react';
import {Text} from 'react-native';
import {textStyles} from 'utils/styles';

export type TextProps = {
  text: string;
};

export default function H3({text}: TextProps) {
  return <Text style={textStyles.h3} children={text} />;
}
