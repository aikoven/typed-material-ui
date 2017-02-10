import * as React from 'react';
import {TouchTapEvent} from "./common";
import MenuItem from "./MenuItem";

export interface MenuProps {
  autoWidth?: boolean;
  desktop?: boolean;
  disableAutoFocus?: boolean;
  initiallyKeyboardFocused?: boolean;
  listStyle?: React.CSSProperties;
  maxHeight?: number;
  multiple?: boolean;
  onChange?(e: TouchTapEvent<any>, itemValue: any | any[]): void;
  onEscKeyDown?: React.KeyboardEventHandler<any>;
  onKeyDown?: React.KeyboardEventHandler<any>;
  onItemTouchTap?(e: TouchTapEvent<any>, item: MenuItem, index: number): void;
  selectedMenuItemStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  value?: any | any[];
  width?: string | number;
}

export default class Menu extends React.Component<MenuProps, {}>{
}
