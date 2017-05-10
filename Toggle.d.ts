import * as React from 'react';

import {CommonEnhancedSwitchProps} from './internal/EnhancedSwitch';
import {ReactLink} from './common';


export interface ToggleProps extends CommonEnhancedSwitchProps<Toggle> {
  // <EnhancedSwitch/> is element that get the 'other' properties
  defaultToggled?: boolean;
  disabled?: boolean;
  elementStyle?: React.CSSProperties;
  iconStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  label?: string;
  labelPosition?: 'left' | 'right';
  labelStyle?: React.CSSProperties;
  onToggle?: (event: React.MouseEvent<any>,
              isInputChecked: boolean) => void;
  rippleStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  thumbStyle?: React.CSSProperties;
  thumbSwitchedStyle?: React.CSSProperties;
  toggled?: boolean;
  trackStyle?: React.CSSProperties;
  trackSwitchedStyle?: React.CSSProperties;
  valueLink?: ReactLink<any>;
}

export class Toggle extends React.Component<ToggleProps, {}> {
  isToggled(): boolean;
  setToggled(newToggledValue: boolean): void;
}

export default Toggle;
