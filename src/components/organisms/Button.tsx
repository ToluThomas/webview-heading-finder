import SVG, {SVGName} from 'assets/svg';
import H4 from 'atoms/H4';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {buttonStyles} from 'utils/styles';

type ButtonProps = {
  text?: string;
  onPress: () => void;
  rightIconName?: SVGName;
  leftIconName?: SVGName;
  iconWidth?: number;
  iconHeight?: number;
};

export default function Button({
  text,
  onPress,
  iconWidth = 20,
  iconHeight = 20,
  leftIconName,
  rightIconName,
}: ButtonProps): JSX.Element {
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles.container}>
      {leftIconName ? (
        <SVG name={leftIconName} width={iconWidth} height={iconHeight} />
      ) : null}
      {text ? <H4 text={text} /> : null}
      {rightIconName ? (
        <SVG name={rightIconName} width={iconWidth} height={iconHeight} />
      ) : null}
    </TouchableOpacity>
  );
}
