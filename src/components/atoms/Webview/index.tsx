import React from 'react';
import {WebView as RNWebView} from 'react-native-webview';
import Loader from './loader';

export type WebviewSource = {uri: string} | {html: string};
export type WebviewProps = {
  webviewRef: any;
  source: WebviewSource;
  injectedJavascript?: string;
  testID: string;
};

export default function Webview({
  webviewRef,
  source,
  injectedJavascript,
  testID,
}: WebviewProps): JSX.Element {
  return (
    <RNWebView
      ref={webviewRef}
      source={source}
      testID={testID}
      renderLoading={Loader}
      injectedJavaScript={injectedJavascript}
      onMessage={e => {}}
    />
  );
}
