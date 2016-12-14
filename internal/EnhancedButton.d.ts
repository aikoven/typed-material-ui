import * as React from 'react';
import {TouchTapEventHandler} from "../common";

export interface SharedEnhancedButtonProps {
  children?: React.ReactNode;
  centerRipple?: boolean;
  disableFocusRipple?: boolean;
  disableKeyboardFocus?: boolean;
  disableTouchRipple?: boolean;
  focusRippleColor?: string;
  focusRippleOpacity?: number;
  keyboardFocused?: boolean;
  linkButton?: boolean;
  onBlur?: React.FocusEventHandler<any>;
  onFocus?: React.FocusEventHandler<any>;
  onKeyboardFocus?: (e: React.FocusEvent<any>,
                     isKeyboardFocused: boolean) => void;
  onKeyDown?: React.KeyboardEventHandler<any>;
  onKeyUp?: React.KeyboardEventHandler<any>;
  onTouchTap?: TouchTapEventHandler<any>;
  style?: React.CSSProperties;
  tabIndex?: number;
  target?: string;
  touchRippleColor?: string;
  touchRippleOpacity?: number;
  type?: string;
}

export interface EnhancedButtonProps
extends React.HTMLAttributes<any>, SharedEnhancedButtonProps {
  // container element, <button/>, or <span/>(if disabled link) is the element
  // that get the 'other' properties
  containerElement?: React.ReactNode | string;
  disabled?: boolean;
}
export default class EnhancedButton
extends React.Component<EnhancedButtonProps, {}> {
}
