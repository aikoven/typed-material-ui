import * as React from 'react';

import {ReactLink, TouchTapEvent} from './common';
import MenuItem from './MenuItem';

export interface MenuProps<MenuValue> {
  autoWidth?: boolean;
  desktop?: boolean;
  disableAutoFocus?: boolean;
  initiallyKeyboardFocused?: boolean;
  listStyle?: React.CSSProperties;
  maxHeight?: number;
  menuItemStyle?: React.CSSProperties;
  multiple?: boolean;
  // TODO: check signature of e
  onChange?: (event: TouchTapEvent<any>, value: MenuValue) => void;
  onEscKeyDown?: React.KeyboardEventHandler<any>;
  onKeyDown?: React.KeyboardEventHandler<any>;
  onItemTouchTap?: (event: TouchTapEvent<any>,
                    item: MenuItem, index: number) => void;
  onMenuItemFocusChange?: (event: React.MouseEventHandler<any>,
                           newFocusIndex: number) => void;
  selectedMenuItemStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  value?: MenuValue;
  valueLink?: ReactLink<MenuValue>;
  width?: string | number;
}

export class Menu extends React.Component<MenuProps<any>, {}> {
}

export default Menu;
