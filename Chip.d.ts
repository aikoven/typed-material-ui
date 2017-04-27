import * as React from 'react';

import {TouchTapEventHandler} from './common';


export interface ChipProps {
  backgroundColor?: string;
  className?: string;
  containerElement?: React.ReactElement<any> | string;
  labelColor?: string;
  labelStyle?: React.CSSProperties;
  onRequestDelete?: TouchTapEventHandler<any>;
  onTouchTap?: TouchTapEventHandler<any>;
  style?: React.CSSProperties;
}

export default class Chip extends React.Component<ChipProps, {}> {
}
