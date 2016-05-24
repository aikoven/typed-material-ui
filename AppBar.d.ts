import * as React from 'react';
import {TouchTapEventHandler} from "./TouchTapEvent";


export interface AppBarProps extends React.Props<AppBar> {
  className?: string;
  iconClassNameLeft?: string;
  iconClassNameRight?: string;
  iconElementLeft?: React.ReactElement<any>;
  iconElementRight?: React.ReactElement<any>;
  iconStyleRight?: string;
  onLeftIconButtonTouchTap?: TouchTapEventHandler;
  onRightIconButtonTouchTap?: TouchTapEventHandler;
  onTitleTouchTap?: TouchTapEventHandler;
  showMenuIconButton?: boolean;
  style?: React.CSSProperties;
  title?: React.ReactNode;
  titleStyle?: React.CSSProperties;
  zDepth?: number;
}

export default class AppBar extends React.Component<AppBarProps, {}>{
}