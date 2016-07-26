import * as React from 'react';
import {Origin, TouchTapEvent, TouchTapEventHandler} from "./common";
import {IconButtonProps} from "./IconButton";
import MenuItem from "./MenuItem";

export interface IconMenuProps {
  // <Menu/> is the element that get the 'other' properties
  anchorOrigin?: Origin;
  animated?: boolean;
  children?: React.ReactNode;
  className?: string;
  iconButtonElement: React.ReactElement<IconButtonProps>;
  iconStyle?: React.CSSProperties;
  menuStyle?: React.CSSProperties;
  onItemTouchTap?: (e: TouchTapEvent, item: MenuItem) => void;
  onKeyboardFocus?: React.FocusEventHandler;
  onMouseDown?: React.MouseEventHandler;
  onMouseEnter?: React.MouseEventHandler;
  onMouseLeave?: React.MouseEventHandler;
  onMouseUp?: React.MouseEventHandler;
  onRequestChange?: (opening: boolean, reason: string) => void;
  onTouchTap?: TouchTapEventHandler;
  open?: boolean;
  style?: React.CSSProperties;
  targetOrigin?: Origin;
  touchTapCloseDelay?: number;

  // Other properties from <Menu/>
  autoWidth?: boolean;
  desktop?: boolean;
  listStyle?: React.CSSProperties;
  maxHeight?: number;
  multiple?: boolean;
  onChange?: (e: TouchTapEvent, itemValue: any | any[]) => void;
  onKeyDown?: React.KeyboardEventHandler;
  openDirection?: string;
  selectedMenuItemStyle?: React.CSSProperties;
  value?: any | any[];
  width?: string | number;
}
export default class IconMenu extends React.Component<IconMenuProps, {}> {
}
