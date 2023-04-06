import React from 'react';
import {Text} from 'react-native';
import {textStyles} from 'utils/styles';

type H3Props = {
  text: string;
};

export default function H3({text}: H3Props) {
  return <Text style={textStyles.h3} children={text} />;
}
