import React from 'react';
import Webview, {WebviewProps} from 'atoms/Webview';
import WebviewTraverserBottomNavigation, {
  WebviewTraverserBottomNavigationProps,
} from './WebviewTraverserBottomNavigation';

type WebviewTraverserProps = WebviewProps &
  WebviewTraverserBottomNavigationProps;

export default function WebviewTraverser({
  webviewRef,
  source,
  injectedJavascript,
  onPressBack,
  onPressNext,
  testID,
  onLoadEnd,
}: WebviewTraverserProps): JSX.Element {
  return (
    <>
      <Webview
        testID={`${testID}.webview`}
        webviewRef={webviewRef}
        source={source}
        onLoadEnd={onLoadEnd}
        injectedJavascript={injectedJavascript}
      />
      <WebviewTraverserBottomNavigation
        testID={`${testID}.webviewNavigator`}
        onPressBack={onPressBack}
        onPressNext={onPressNext}
      />
    </>
  );
}
