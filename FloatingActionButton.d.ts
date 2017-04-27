import * as React from 'react';

import {SharedEnhancedButtonProps} from './internal/EnhancedButton';


export interface FloatingActionButtonProps extends SharedEnhancedButtonProps {
  // <EnhancedButton/> is the element that get the 'other' properties
  backgroundColor?: string;
  className?: string;
  disabled?: boolean;
  disabledColor?: string;
  href?: string;
  iconClassName?: string;
  iconStyle?: React.CSSProperties;
  mini?: boolean;
  onMouseDown?: React.MouseEventHandler<any>;
  onMouseEnter?: React.MouseEventHandler<any>;
  onMouseLeave?: React.MouseEventHandler<any>;
  onMouseUp?: React.MouseEventHandler<any>;
  onTouchEnd?: React.TouchEventHandler<any>;
  onTouchStart?: React.TouchEventHandler<any>;
  onTouchTap?: React.TouchEventHandler<any>;
  secondary?: boolean;
  style?: React.CSSProperties;
  zDepth?: number;
}

export default class FloatingActionButton extends React.Component<FloatingActionButtonProps, {}> {
}
