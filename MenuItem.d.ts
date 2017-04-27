import * as React from 'react';

import {Origin, TouchTapEventHandler} from './common';
import {ListItemProps} from './List';
import {PopoverAnimationProps} from './Popover';


export interface MenuItemProps extends ListItemProps {
  anchorOrigin?: Origin;
  animation?: React.ComponentClass<PopoverAnimationProps>;
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

export class MenuItem extends React.Component<MenuItemProps, {}> {
}

export default MenuItem;
