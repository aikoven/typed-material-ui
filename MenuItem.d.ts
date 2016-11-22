import * as React from 'react';
import {TouchTapEventHandler} from "./common";
import {ListItemProps} from "./List";

export interface MenuItemProps extends ListItemProps {
  checked?: boolean;
  disabled?: boolean;
  focusState?: string; // 'none', 'focused', or 'keyboard-focused'
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

export default class MenuItem extends React.Component<MenuItemProps, {}>{
}
