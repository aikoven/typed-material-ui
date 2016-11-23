import * as React from 'react';


export interface ToggleProps {
  defaultToggled?: boolean;
  disabled?: boolean;
  elementStyle?: React.CSSProperties;
  iconStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  label?: React.ReactNode;
  labelPosition?: 'left' | 'right';
  labelStyle?: React.CSSProperties;
  onToggle?: (e: React.MouseEvent<any>, isInputChecked: boolean) => void;
  rippleStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  thumbStyle?: React.CSSProperties;
  thumbSwitchedStyle?: React.CSSProperties;
  toggled?: boolean;
  trackStyle?: React.CSSProperties;
  trackSwitchedStyle?: React.CSSProperties;
}

export default class Toggle extends React.Component<ToggleProps, {}> {
}
