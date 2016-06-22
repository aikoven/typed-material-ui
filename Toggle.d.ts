import * as React from 'react';


export interface ToggleProps extends React.Props<Toggle> {
  defaultToggled?: boolean;
  disabled?: boolean;
  elementStyle?: React.CSSProperties;
  iconStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  label?: string;
  labelPosition?: string; // oneOf(['left', 'right'])
  labelStyle?: React.CSSProperties;
  onToggle?: (e: React.MouseEvent, isInputChecked: boolean) => void;
  rippleStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  thumbStyle?: React.CSSProperties;
  toggled?: boolean;
  trackStyle?: React.CSSProperties;
}

export default class Toggle extends React.Component<ToggleProps, {}> {
}
