import React from 'react';
import {Text} from 'react-native';
import {textStyles} from 'utils/styles';

type H5Props = {
  text: string;
};

export default function H5({text}: H5Props) {
  return <Text style={textStyles.h5} children={text} />;
}
