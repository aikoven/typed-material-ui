import * as React from 'react';

import {TouchTapEventHandler} from './common';


export interface AppBarProps {
  className?: string;
  iconClassNameLeft?: string;
  iconClassNameRight?: string;
  iconElementLeft?: React.ReactElement<any>;
  iconElementRight?: React.ReactElement<any>;
  iconStyleRight?: React.CSSProperties;
  onLeftIconButtonTouchTap?: TouchTapEventHandler<any>;
  onRightIconButtonTouchTap?: TouchTapEventHandler<any>;
  onTitleTouchTap?: TouchTapEventHandler<any>;
  showMenuIconButton?: boolean;
  style?: React.CSSProperties;
  title?: React.ReactNode;
  titleStyle?: React.CSSProperties;
  zDepth?: number;
}

export class AppBar extends React.Component<AppBarProps, {}> {
}

export default AppBar;
