import * as React from 'react';


export interface RadioButtonProps {
  // <EnhancedSwitch/> is element that get the 'other' properties
  checked?: boolean;
  checkedIcon?: React.ReactElement<{ style?: React.CSSProperties }>; // Normally an SvgIcon
  disabled?: boolean;
  iconStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  labelPosition?: string; // oneOf(['left', 'right'])
  labelStyle?: React.CSSProperties;
  onCheck?: (e: React.FormEvent, selected: string) => void;
  style?: React.CSSProperties;
  uncheckedIcon?: React.ReactElement<{ style?: React.CSSProperties }>; // Normally an SvgIcon
  value?: string;
}

export class RadioButton extends React.Component<RadioButtonProps, {}> {
  isChecked(): boolean;
  getValue(): string;
}

type RadioButtonElement = React.ComponentElement<RadioButtonProps, RadioButton>; 

export interface RadioButtonGroupProps {
  children?: RadioButtonElement | RadioButtonElement[],
  className?: string;
  defaultSelected?: string;
  labelPosition?: string; // oneOf(['left', 'right'])
  name: string;
  onChange?: (e: React.FormEvent, selected: string) => void;
  style?: React.CSSProperties;
  valueSelected?: string;
}

export class RadioButtonGroup extends React.Component<RadioButtonGroupProps, {}> {
  clearValue(): void;
  getSelectedValue(): string;
  setSelectedValue(newSelectionValue: string): void;
}
