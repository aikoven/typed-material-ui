import * as React from 'react';
import {CommonEnhancedSwitchProps} from "./internal/EnhancedSwitch";


export interface RadioButtonProps
extends CommonEnhancedSwitchProps<RadioButton> {
  // <EnhancedSwitch/> is element that get the 'other' properties
  checked?: boolean;
  checkedIcon?: React.ReactElement<any>;
  disabled?: boolean;
  iconStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  labelPosition?: 'left' | 'right';
  labelStyle?: React.CSSProperties;
  onCheck?: (event: React.MouseEvent<any>, checked: boolean) => void;
  style?: React.CSSProperties;
  uncheckedIcon?: React.ReactElement<any>;
  value?: string;
}

export class RadioButton extends React.Component<RadioButtonProps, {}> {
  isChecked(): boolean;
  getValue(): string;
}

export default RadioButton;

export interface RadioButtonGroupProps {
  className?: string;
  defaultSelected?: any;
  labelPosition?: 'left' | 'right';
  name: string;
  onChange?: (event: React.FormEvent<any>, selected: string) => void;
  style?: React.CSSProperties;
  valueSelected?: string;
}

export class RadioButtonGroup
extends React.Component<RadioButtonGroupProps, {}> {
  clearValue(): void;
  getSelectedValue(): string;
  setSelectedValue(newSelectionValue: string): void;
}
