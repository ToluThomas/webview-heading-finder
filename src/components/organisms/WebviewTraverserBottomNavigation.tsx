import React from 'react';
import {View} from 'react-native';
import {general} from 'utils/constants/strings';
import {webviewTraverserBottomNavigationStyles} from 'utils/styles';
import Button from './Button';

export type WebviewTraverserBottomNavigationProps = {
  onPressBack: () => void;
  onPressNext: () => void;
  testID: string;
};

export default function WebviewTraverserBottomNavigation({
  onPressBack,
  onPressNext,
  testID,
}: WebviewTraverserBottomNavigationProps): JSX.Element {
  const {goBack, goNext} = general;
  const {container} = webviewTraverserBottomNavigationStyles;

  return (
    <View testID={testID} style={container}>
      <Button
        testID={`${testID}.previousButton`}
        text={goBack}
        onPress={onPressBack}
        leftIconName="chevronLeft"
      />
      <Button
        testID={`${testID}.nextButton`}
        text={goNext}
        onPress={onPressNext}
        rightIconName="chevronRight"
      />
    </View>
  );
}
