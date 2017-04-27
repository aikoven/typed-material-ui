import * as React from 'react';

import {SharedEnhancedButtonProps} from './internal/EnhancedButton';


export interface RaisedButtonProps extends SharedEnhancedButtonProps {
  // <EnhancedButton/> is the element that get the 'other' properties
  backgroundColor?: string;
  buttonStyle?: React.CSSProperties;
  className?: string;
  containerElement?: React.ReactElement<any> | string;
  disableTouchRipple?: boolean;
  disabled?: boolean;
  disabledBackgroundColor?: string;
  disabledLabelColor?: string;
  fullWidth?: boolean;
  href?: string;
  icon?: React.ReactNode;
  label?: React.ReactNode;
  labelColor?: string;
  labelPosition?: 'before' | 'after';
  labelStyle?: React.CSSProperties;
  onMouseDown?: React.MouseEventHandler<any>;
  onMouseEnter?: React.MouseEventHandler<any>;
  onMouseLeave?: React.MouseEventHandler<any>;
  onMouseUp?: React.MouseEventHandler<any>;
  onTouchEnd?: React.TouchEventHandler<any>;
  onTouchStart?: React.TouchEventHandler<any>;
  onTouchTap?: React.TouchEventHandler<any>;
  overlayStyle?: React.CSSProperties;
  primary?: boolean;
  rippleStyle?: React.CSSProperties;
  secondary?: boolean;
  style?: React.CSSProperties;
}

export class RaisedButton extends React.Component<RaisedButtonProps, {}> {
}

export default RaisedButton;
