import * as React from 'react';

import {Origin, TouchTapEvent, TouchTapEventHandler} from './common';
import {IconButtonProps} from './IconButton';
import MenuItem from './MenuItem';


// TODO: Receive <Menu/> props
interface IconMenuProps {
  // <Menu/> is the element that get the 'other' properties
  anchorOrigin?: Origin;
  animated?: boolean;
  // TODO: animation?:
  className?: string;
  iconButtonElement: React.ReactElement<IconButtonProps>;
  iconStyle?: React.CSSProperties;
  listStyle?: React.CSSProperties;
  menuStyle?: React.CSSProperties;
  multiple?: boolean;
  onItemTouchTap?: (event: TouchTapEvent<any>, item: MenuItem) => void;
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
}

export default class IconMenu extends React.Component<IconMenuProps, {}> {
}
