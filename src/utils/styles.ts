import {StyleSheet} from 'react-native';
import {horizontalScale} from './helpers';
import {verticalScale} from 'helpers/scale';

export const webviewStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});

export const textStyles = StyleSheet.create({
  h3: {
    fontWeight: '700',
    fontSize: horizontalScale(20),
  },
  h4: {
    fontWeight: '700',
    fontSize: horizontalScale(16),
  },
  h5: {
    fontWeight: '700',
    fontSize: horizontalScale(12),
  },
});

export const buttonStyles = StyleSheet.create({
  container: {
    height: verticalScale(48),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(8),
  },
});

export const webviewTraverserBottomNavigationStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export const appStyles = StyleSheet.create({
  container: {flex: 1},
});
