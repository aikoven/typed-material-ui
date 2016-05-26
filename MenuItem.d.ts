import * as React from 'react';
import {TouchTapEventHandler} from "./TouchTapEvent";

export interface MenuItemProps extends React.HTMLAttributes, React.Props<MenuItem> {
  checked?: boolean;
  disabled?: boolean;
  focusState?: string; // 'none', 'focused', or 'keyboard-focused'
  innerDivStyle?: React.CSSProperties;
  insetChildren?: boolean;
  leftIcon?: React.ReactElement<any>;
  menuItems?: React.ReactNode;
  onTouchTap?: TouchTapEventHandler;
  primaryText?: React.ReactNode;
  rightIcon?: React.ReactElement<any>;
  secondaryText?: React.ReactNode;
  style?: React.CSSProperties;
  value?: any;
}

export default class MenuItem extends React.Component<MenuItemProps, {}>{
}
