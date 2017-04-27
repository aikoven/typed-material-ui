import * as React from 'react';

import {ReactLink} from './common';
import {CommonEnhancedSwitchProps} from './internal/EnhancedSwitch';


export interface CheckboxProps extends CommonEnhancedSwitchProps<Checkbox> {
  checked?: boolean;
  checkedIcon?: React.ReactElement<any>;
  defaultChecked?: boolean;
  disabled?: boolean;
  iconStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  labelPosition?: 'left' | 'right';
  labelStyle?: React.CSSProperties;
  onCheck?: (event: React.MouseEvent<any>,
             isInputChecked: boolean) => void;
  style?: React.CSSProperties;
  uncheckedIcon?: React.ReactElement<any>;
  valueLink?: ReactLink<boolean>;
}

export class Checkbox extends React.Component<CheckboxProps, {}> {
  isChecked(): void;
  setChecked(newCheckedValue: boolean): void;
}

export default Checkbox;
