import * as React from 'react';

export interface CheckboxProps {
  checked?: boolean;
  checkedIcon?: React.ReactElement<{style?: React.CSSProperties}>;
  defaultChecked?: boolean;
  disabled?: boolean;
  iconStyle?: React.CSSProperties;
  label?: React.ReactNode;
  labelPosition?: 'left' | 'right';
  labelStyle?: React.CSSProperties;
  onCheck?: (event: React.MouseEvent<any>, checked: boolean) => void;
  style?: React.CSSProperties;
  uncheckedIcon?: React.ReactElement<{style?: React.CSSProperties}>;
}

export default class Checkbox extends React.Component<CheckboxProps, {}> {
  isChecked(): void;
  setChecked(newCheckedValue: boolean): void;
}
