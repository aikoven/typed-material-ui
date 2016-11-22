import * as React from 'react';
import {SharedEnhancedButtonProps} from "./internal/EnhancedButton";

export interface RaisedButtonProps extends SharedEnhancedButtonProps {
  // <EnhancedButton/> is the element that get the 'other' properties
  backgroundColor?: string;
  className?: string;
  disabled?: boolean;
  disabledBackgroundColor?: string;
  disabledLabelColor?: string;
  fullWidth?: boolean;
  href?: string;
  icon?: React.ReactNode;
  label?: React.ReactNode;
  labelColor?: string;
  labelPosition?: string; // oneOf(['left', 'right'])
  labelStyle?: React.CSSProperties;
  linkButton?: boolean;
  onMouseDown?: React.MouseEventHandler<any>;
  onMouseEnter?: React.MouseEventHandler<any>;
  onMouseLeave?: React.MouseEventHandler<any>;
  onMouseUp?: React.MouseEventHandler<any>;
  onTouchEnd?: React.TouchEventHandler<any>;
  onTouchStart?: React.TouchEventHandler<any>;
  primary?: boolean;
  rippleStyle?: React.CSSProperties;
  secondary?: boolean;
  style?: React.CSSProperties;
}

export default class RaisedButton extends React.Component<RaisedButtonProps, {}> {
}
