import * as React from "react";


export interface CheckboxProps extends React.Props<Checkbox> {
  checked?: boolean;
  checkedIcon?: React.ReactElement<{ style?: React.CSSProperties }>; // Normally an SvgIcon
  defaultChecked?: boolean;
  disabled?: boolean;
  iconStyle?: React.CSSProperties;
  labelPosition?: 'left' | 'right';
  labelStyle?: React.CSSProperties;
  onCheck?: (event: React.MouseEvent<any>, checked: boolean) => void;
  style?: React.CSSProperties;
  uncheckedIcon?: React.ReactElement<{ style?: React.CSSProperties }>; // Normally an SvgIcon
}

export default class Checkbox extends React.Component<CheckboxProps, {}> {
}
