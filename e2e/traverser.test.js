const {device, element, expect, by, web, waitFor} = require('detox');

const testID = 'traverser';
const webviewID = `${testID}.webview`;
const navigatorID = `${testID}.webviewNavigator`;
const previousButtonID = `${navigatorID}.previousButton`;
const nextButtonID = `${navigatorID}.nextButton`;
const selectedHeaderClassName = 'traverserSelectedHeading';
const testHeadingText = 'Lorem Ipsum';
const testLastHeadingText = '1914 translation by H. Rackham';

describe('Traverser', () => {
  beforeAll(async () => {
    await device.installApp();
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have next button', async () => {
    await expect(element(by.id(previousButtonID))).toBeVisible();
  });

  it('should have previous button', async () => {
    await expect(element(by.id(nextButtonID))).toBeVisible();
  });

  it('should scroll to next heading if next button is pressed', async () => {
    const nextButton = element(by.id(nextButtonID));
    await waitFor(nextButton).toBeVisible().withTimeout(10000);
    await nextButton.tap();
    // web API currently only supported on Android
    if (device.getPlatform() === 'android') {
      const webview = web(by.id(webviewID));
      const selectedHeading = webview.element(
        by.web.className(selectedHeaderClassName),
      );
      await expect(selectedHeading).toHaveText(testHeadingText); // Must contain expected text in heading
    }
  });

  it('should scroll to last heading if previous button is pressed on first heading', async () => {
    await element(by.id(previousButtonID)).tap();
    // web API currently only supported on Android
    if (device.getPlatform() === 'android') {
      const webview = web(by.id(webviewID));
      const selectedHeading = webview.element(
        by.web.className(selectedHeaderClassName),
      );
      await expect(selectedHeading).toHaveText(testLastHeadingText); // Must contain expected text in heading
    }
  });
});
