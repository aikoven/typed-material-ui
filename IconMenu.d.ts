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
  onItemTouchTap?: (e: TouchTapEvent<any>, item: MenuItem) => void;
  onKeyboardFocus?: React.FocusEventHandler<any>;
  onMouseDown?: React.MouseEventHandler<any>;
  onMouseEnter?: React.MouseEventHandler<any>;
  onMouseLeave?: React.MouseEventHandler<any>;
  onMouseUp?: React.MouseEventHandler<any>;
  onRequestChange?: (opening: boolean, reason: string) => void;
  onTouchTap?: TouchTapEventHandler<any>;
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
  onChange?: (e: TouchTapEvent<any>, itemValue: any | any[]) => void;
  onKeyDown?: React.KeyboardEventHandler<any>;
  openDirection?: string;
  selectedMenuItemStyle?: React.CSSProperties;
  value?: any | any[];
  width?: string | number;
}
export default class IconMenu extends React.Component<IconMenuProps, {}> {
}
