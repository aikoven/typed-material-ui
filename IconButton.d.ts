import * as React from 'react';

import {SharedEnhancedButtonProps} from './internal/EnhancedButton';
import {CornersAndCenter} from "./common";


export interface IconButtonProps extends SharedEnhancedButtonProps {
  // <EnhancedButton/> is the element that get the 'other' properties
  className?: string;
  disableTouchRipple?: boolean;
  disabled?: boolean;
  hoveredStyle?: React.CSSProperties;
  href?: string;
  iconClassName?: string;
  iconStyle?: React.CSSProperties;
  onBlur?: React.FocusEventHandler<any>;
  onFocus?: React.FocusEventHandler<any>;
  onKeyboardFocus?: (e: React.FocusEvent<any>,
                     isKeyboardFocused: boolean) => void;
  onMouseEnter?: React.MouseEventHandler<any>;
  onMouseLeave?: React.MouseEventHandler<any>;
  onMouseOut?: React.MouseEventHandler<any>;
  onTouchStart?: React.TouchEventHandler<any>;
  onTouchTap?: React.TouchEventHandler<any>;
  style?: React.CSSProperties;
  tooltip?: React.ReactNode;
  tooltipPosition?: CornersAndCenter;
  tooltipStyles?: React.CSSProperties;
  touch?: boolean;
}

export default class IconButton extends React.Component<IconButtonProps, {}> {
}
