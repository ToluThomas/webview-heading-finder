import React from 'react';
import H3 from 'atoms/H3';
import {general} from 'constants/strings';

export default function Loader(): JSX.Element {
  return <H3 text={general.webviewLoadingPlaceholder} />;
}
