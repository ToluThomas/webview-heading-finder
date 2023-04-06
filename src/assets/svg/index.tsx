import React from 'react';
import chevronLeft from './chevronLeft.svg';
import chevronRight from './chevronRight.svg';

export type SVGName = 'chevronLeft' | 'chevronRight';
type SVGProps = {name: SVGName; width?: number; height?: number};

const SVGs = {
  chevronLeft,
  chevronRight,
};

export default function SVG({name, width, height}: SVGProps): JSX.Element {
  const Icon = SVGs?.[name];

  return Icon ? <Icon width={width} height={height} /> : <></>;
}
