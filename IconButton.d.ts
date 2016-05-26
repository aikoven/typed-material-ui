import * as React from 'react';
import {SharedEnhancedButtonProps} from "./internal/EnhancedButton";


export interface IconButtonProps extends React.HTMLAttributes, SharedEnhancedButtonProps<IconButton> {
  // <EnhancedButton/> is the element that get the 'other' properties
  className?: string;
  disabled?: boolean;
  iconClassName?: string;
  iconStyle?: React.CSSProperties;
  onBlur?: React.FocusEventHandler;
  onFocus?: React.FocusEventHandler;
  onKeyboardFocus?: (e: React.FocusEvent, isKeyboardFocused: boolean) => void;
  onMouseEnter?: React.MouseEventHandler;
  onMouseLeave?: React.MouseEventHandler;
  style?: React.CSSProperties;
  tooltip?: string;
  tooltipPosition?: string;
  tooltipStyles?: React.CSSProperties;
  touch?: boolean;
}

export default class IconButton extends React.Component<IconButtonProps, {}> {
}
