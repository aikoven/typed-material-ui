import * as React from 'react';

import {Origin, TouchTapEventHandler} from './common';
import {ListItemProps} from './List';


export interface MenuItemProps extends ListItemProps {
  anchorOrigin?: Origin;
  // TODO: animation?:
  checked?: boolean;
  desktop?: boolean;
  disabled?: boolean;
  focusState?: 'none' | 'focused' | 'keyboard-focused';
  innerDivStyle?: React.CSSProperties;
  insetChildren?: boolean;
  leftIcon?: React.ReactElement<any>;
  menuItems?: React.ReactNode;
  onTouchTap?: TouchTapEventHandler<any>;
  primaryText?: React.ReactNode;
  rightIcon?: React.ReactElement<any>;
  secondaryText?: React.ReactNode;
  style?: React.CSSProperties;
  value?: any;
}

export default class MenuItem extends React.Component<MenuItemProps, {}> {
}
