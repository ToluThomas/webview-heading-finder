import React from 'react';
import {Text} from 'react-native';
import {textStyles} from 'utils/styles';

type H4Props = {
  text: string;
};

export default function H4({text}: H4Props) {
  return <Text style={textStyles.h4} children={text} />;
}
