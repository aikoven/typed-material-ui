import * as React from 'react';

import {SharedEnhancedButtonProps} from './internal/EnhancedButton';


export interface FlatButtonProps extends SharedEnhancedButtonProps {
  // <EnhancedButton/> is the element that get the 'other' properties
  backgroundColor?: string;
  className?: string;
  containerElement?: React.ReactElement<any> | string;
  disableTouchRipple?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  hoverColor?: string;
  href?: string;
  icon?: React.ReactNode;
  label?: React.ReactNode;
  labelPosition?: 'before' | 'after';
  labelStyle?: React.CSSProperties;
  onKeyboardFocus?: (event: React.FocusEvent<any>,
                     isKeyboardFocused: boolean) => void;
  onMouseEnter?: React.MouseEventHandler<any>;
  onMouseLeave?: React.MouseEventHandler<any>;
  onTouchStart?: React.TouchEventHandler<any>;
  onTouchTap?: React.TouchEventHandler<any>;
  primary?: boolean;
  rippleColor?: string;
  secondary?: boolean;
  style?: React.CSSProperties;
}

export class FlatButton extends React.Component<FlatButtonProps, {}> {
}

export default FlatButton;
