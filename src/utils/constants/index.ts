import {general} from './strings';

const constants = {
  WEBVIEW_URL: 'https://www.apple.com/',
  TEST_ID: 'traverser',
  GO_TO_PREVIOUS_HEADING_JS: `
      headers[currentHeaderIndex].classList.toggle("traverserSelectedHeading") // clear border
      currentHeaderIndex = currentHeaderIndex <= 0 ? headers.length - 1 : currentHeaderIndex - 1;
      headers[currentHeaderIndex].scrollIntoView({behavior: 'smooth'});
      headers[currentHeaderIndex].classList.toggle("traverserSelectedHeading") // Show border so we see current position
      true;
    `,
  GO_TO_NEXT_HEADING_JS: `
        headers[currentHeaderIndex].classList.toggle("traverserSelectedHeading") // clear border
        currentHeaderIndex = currentHeaderIndex >= headers.length - 1 ? 0 : currentHeaderIndex + 1;
        headers[currentHeaderIndex].scrollIntoView({ behavior: 'smooth' });
        headers[currentHeaderIndex].classList.toggle("traverserSelectedHeading") // Show border so we see current position
        true;
    `,
  INIT_INJECTED_JAVASCRIPT: `
  const headerTags = ["h1", "h2", "h3", "h4", "h5", "h6"];
  let headers = headerTags.map(headerTag => [...document.getElementsByTagName(headerTag)]).flat();
  let currentHeaderIndex = 0;

  var style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = '.traverserSelectedHeading {border: 2px solid blue;}';
  document.getElementsByTagName('head')[0].appendChild(style);
  `,
};

export {general, constants};
