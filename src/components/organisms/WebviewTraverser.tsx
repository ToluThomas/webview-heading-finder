import React from 'react';
import Webview from 'atoms/Webview';
import {WebviewProps} from 'atoms/Webview';
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
}: WebviewTraverserProps): JSX.Element {
  return (
    <>
      <Webview
        webviewRef={webviewRef}
        source={source}
        injectedJavascript={injectedJavascript}
      />
      <WebviewTraverserBottomNavigation
        onPressBack={onPressBack}
        onPressNext={onPressNext}
      />
    </>
  );
}
