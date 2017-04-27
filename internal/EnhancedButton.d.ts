import * as React from 'react';

import {TouchTapEventHandler} from '../common';


export interface SharedEnhancedButtonProps {
  centerRipple?: boolean;
  disableFocusRipple?: boolean;
  disableKeyboardFocus?: boolean;
  disableTouchRipple?: boolean;
  focusRippleColor?: string;
  focusRippleOpacity?: number;
  href?: string;
  keyboardFocused?: boolean;
  onBlur?: React.FocusEventHandler<any>;
  onClick?: React.MouseEventHandler<any>;
  onFocus?: React.FocusEventHandler<any>;
  onKeyDown?: React.KeyboardEventHandler<any>;
  onKeyUp?: React.KeyboardEventHandler<any>;
  onKeyboardFocus?: (e: React.FocusEvent<{}>,
                    isKeyboardFocused: boolean) => void;
  onTouchTap?: TouchTapEventHandler<any>;
  style?: React.CSSProperties;
  tabIndex?: number;
  touchRippleColor?: string;
  touchRippleOpacity?: number;
  type?: string;
}

export interface EnhancedButtonProps
extends React.HTMLAttributes<any>, SharedEnhancedButtonProps {
  // container element, <button/>, or <span/> (if disabled link) is the element
  // that get the 'other' properties
  containerElement?: React.ReactNode | string;
  disabled?: boolean;
}

export default class EnhancedButton
extends React.Component<EnhancedButtonProps, {}> {
}
