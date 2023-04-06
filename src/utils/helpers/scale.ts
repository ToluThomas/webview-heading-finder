import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window'); // Get dimensions of device

// Guideline dimensions are based on the dimensions for iPhone X
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 768;

function horizontalScale(size: number): number {
  return (width / guidelineBaseWidth) * size;
}

function verticalScale(size: number): number {
  return (height / guidelineBaseHeight) * size;
}

export {horizontalScale, verticalScale};
