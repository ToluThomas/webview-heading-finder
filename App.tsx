import React, {useRef} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import WebviewTraverser from 'organisms/WebviewTraverser';
import {appStyles} from 'utils/styles';
import {constants} from 'utils/constants';
const {
  TEST_ID,
  WEBVIEW_URL,
  GO_TO_PREVIOUS_HEADING_JS,
  GO_TO_NEXT_HEADING_JS,
  INIT_INJECTED_JAVASCRIPT,
} = constants;

export default function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const webviewRef = useRef<any>(null);

  function onPressBack() {
    webviewRef.current?.injectJavaScript(GO_TO_PREVIOUS_HEADING_JS);
  }

  function onPressNext() {
    webviewRef.current?.injectJavaScript(GO_TO_NEXT_HEADING_JS);
  }

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, appStyles.container]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <WebviewTraverser
        testID={TEST_ID}
        webviewRef={webviewRef}
        source={{uri: WEBVIEW_URL}}
        onPressBack={onPressBack}
        onPressNext={onPressNext}
        injectedJavascript={INIT_INJECTED_JAVASCRIPT}
      />
    </SafeAreaView>
  );
}
