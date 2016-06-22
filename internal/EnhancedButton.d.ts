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
  onBlur?: React.FocusEventHandler;
  onFocus?: React.FocusEventHandler;
  onKeyboardFocus?: (e: React.FocusEvent, isKeyboardFocused: boolean) => void;
  onKeyDown?: React.KeyboardEventHandler;
  onKeyUp?: React.KeyboardEventHandler;
  onTouchTap?: TouchTapEventHandler;
  style?: React.CSSProperties;
  tabIndex?: number;
  target?: string;
  touchRippleColor?: string;
  touchRippleOpacity?: number;
  type?: string;
}

export interface EnhancedButtonProps extends React.HTMLAttributes, SharedEnhancedButtonProps {
  // container element, <button/>, or <span/>(if disabled link) is the element that get the 'other' properties
  containerElement?: React.ReactNode | string;
  disabled?: boolean;
}
export default class EnhancedButton extends React.Component<EnhancedButtonProps, {}> {
}
