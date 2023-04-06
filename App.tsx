import React, {useRef} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import WebviewTraverser from 'organisms/WebviewTraverser';
import {appStyles} from 'utils/styles';

const WEBVIEW_URL = 'https://www.bbc.com/';

export default function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const webviewRef = useRef<any>(null);

  function onPressBack() {
    webviewRef.current?.injectJavaScript(`
      headers[currentHeaderIndex].style.border = ""; // clear border
      currentHeaderIndex = currentHeaderIndex <= 0 ? headers.length - 1 : currentHeaderIndex - 1;
      headers[currentHeaderIndex].scrollIntoView({behavior: 'smooth'});
      headers[currentHeaderIndex].style.border = "2px solid blue"; // Show border so we see current position
    `);
  }

  function onPressNext() {
    webviewRef.current?.injectJavaScript(`
        headers[currentHeaderIndex].style.border = ""; // clear border
        currentHeaderIndex = currentHeaderIndex >= headers.length - 1 ? 0 : currentHeaderIndex + 1;
        headers[currentHeaderIndex].scrollIntoView({ behavior: 'smooth' });
        headers[currentHeaderIndex].style.border = "2px solid blue" // Show border so we see current position
    `);
  }

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const getHeaders = `
  const headerTags = ["h1", "h2", "h3", "h4", "h5", "h6"];
  let headers = headerTags.map(headerTag => [...document.getElementsByTagName(headerTag)]).flat();
  let currentHeaderIndex = 0;
  `;

  return (
    <SafeAreaView style={[backgroundStyle, appStyles.container]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <WebviewTraverser
        webviewRef={webviewRef}
        source={{uri: WEBVIEW_URL}}
        onPressBack={onPressBack}
        onPressNext={onPressNext}
        injectedJavascript={getHeaders}
      />
    </SafeAreaView>
  );
}
