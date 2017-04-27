import * as React from 'react';


export interface CommonEnhancedSwitchProps<T> {
}

export interface EnhancedSwitchProps
extends CommonEnhancedSwitchProps<EnhancedSwitch> {
  checked?: boolean;
  className?: string;
  defaultSwitched?: boolean;
  disableFocusRipple?: boolean;
  disableTouchRipple?: boolean;
  disabled?: boolean;
  iconStyle?: React.CSSProperties;
  id?: string;
  inputStyle?: React.CSSProperties;
  inputType: string;
  label?: React.ReactNode;
  labelPosition?: 'left' | 'right';
  labelStyle?: React.CSSProperties;
  name?: string;
  onBlur?: React.FocusEventHandler<any>;
  onFocus?: React.FocusEventHandler<any>;
  onMouseDown?: React.MouseEventHandler<any>;
  onMouseLeave?: React.MouseEventHandler<any>;
  onMouseUp?: React.MouseEventHandler<any>;
  onParentShouldUpdate: (isInputChecked: boolean) => void;
  onSwitch?: (event: React.MouseEvent<any>,
              isInputChecked: boolean) => void;
  onTouchEnd?: React.TouchEventHandler<any>;
  onTouchStart?: React.TouchEventHandler<any>;
  required?: boolean;
  rippleColor?: string;
  rippleStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  switchElement: React.ReactElement<any>;
  switched: boolean;
  thumbStyle?: React.CSSProperties;
  trackStyle?: React.CSSProperties;
  value?: string;
}

export default class EnhancedSwitch
extends React.Component<EnhancedSwitchProps, {}> {
  getValue(): string;
  isSwitched(): boolean;
  setSwitched(newSwitchedValue: boolean): void;
}
