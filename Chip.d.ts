import * as React from 'react';
import {TouchTapEventHandler} from "./common";


export interface ChipProps {
  backgroundColor?: string;
  className?: string;
  labelColor?: string;
  labelStyle?: React.CSSProperties;
  onRequestDelete?: TouchTapEventHandler;
  onTouchTap?: TouchTapEventHandler;
  style?: React.CSSProperties;
}

export default class Chip extends React.Component<ChipProps, {}> {
}
