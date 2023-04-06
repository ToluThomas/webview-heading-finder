import React from 'react';
import {View} from 'react-native';
import {general} from 'utils/constants/strings';
import {webviewTraverserBottomNavigationStyles} from 'utils/styles';
import Button from './Button';

export type WebviewTraverserBottomNavigationProps = {
  onPressBack: () => void;
  onPressNext: () => void;
};

export default function WebviewTraverserBottomNavigation({
  onPressBack,
  onPressNext,
}: WebviewTraverserBottomNavigationProps): JSX.Element {
  const {goBack, goNext} = general;
  const {container} = webviewTraverserBottomNavigationStyles;

  return (
    <View style={container}>
      <Button text={goBack} onPress={onPressBack} leftIconName="chevronLeft" />
      <Button
        text={goNext}
        onPress={onPressNext}
        rightIconName="chevronRight"
      />
    </View>
  );
}
