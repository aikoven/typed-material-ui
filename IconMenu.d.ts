import * as React from 'react';

import {Origin, ReactLink, TouchTapEvent, TouchTapEventHandler} from './common';
import {IconButtonProps} from './IconButton';
import MenuItem from './MenuItem';
import {PopoverAnimationProps} from './Popover';


export interface IconMenuProps {
  // <Menu/> is the element that get the 'other' properties
  anchorOrigin?: Origin;
  animation?: React.ComponentClass<PopoverAnimationProps>;
  className?: string;
  iconButtonElement: React.ReactElement<IconButtonProps>;
  iconStyle?: React.CSSProperties;
  menuStyle?: React.CSSProperties;
  onItemTouchTap?: (event: TouchTapEvent<any>,
                    item: MenuItem) => void;
  onKeyboardFocus?: (event: React.FocusEvent<any>,
                     isKeyboardFocused: boolean) => void;
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
  useLayerForClickAway?: boolean;

  animated?: boolean;
  autoWidth?: boolean;
  desktop?: boolean;
  listStyle?: React.CSSProperties;
  maxHeight?: number;
  multiple?: boolean;
  onChange?: (event: TouchTapEvent<any>,
              itemValue: any | any[]) => void;
  onKeyDown?: React.KeyboardEventHandler<any>;
  selectedMenuItemStyle?: React.CSSProperties;
  value?: any | any[];
  valueLink?: ReactLink<any | any[]>;
  width?: string | number;
}

export class IconMenu extends React.Component<IconMenuProps, {}> {
}

export default IconMenu;
