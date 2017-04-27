import * as React from 'react';

import {TouchTapEvent} from './common';


export interface SelectFieldProps {
  // <DropDownMenu/> is the element that get the 'other' properties
  autoWidth?: boolean;
  disabled?: boolean;
  errorStyle?: React.CSSProperties;
  errorText?: React.ReactNode;
  floatingLabelFixed?: boolean;
  floatingLabelStyle?: React.CSSProperties;
  floatingLabelText?: React.ReactNode;
  fullWidth?: boolean;
  hintStyle?: React.CSSProperties;
  hintText?: React.ReactNode;
  iconStyle?: React.CSSProperties;
  id?: string;
  labelStyle?: React.CSSProperties;
  onBlur?: React.FocusEventHandler<any>;
  onChange?: (event: TouchTapEvent<any>,
              index: number,
              menuItemValue: any) => void;
  onFocus?: React.FocusEventHandler<any>;
  selectFieldRoot?: React.CSSProperties;
  style?: React.CSSProperties;
  underlineDisabledStyle?: React.CSSProperties;
  underlineFocusStyle?: React.CSSProperties;
  underlineStyle?: React.CSSProperties;
  value?: any;

  // useful attributes passed to <DropDownMenu/>
  className?: string;
  maxHeight?: number;
  menuStyle?: any;
  listStyle?: React.CSSProperties;
  menuItemStyle?: React.CSSProperties;
  selectedMenuItemStyle?: React.CSSProperties;
  openImmediately?: boolean;
}

export class SelectField extends React.Component<SelectFieldProps, {}> {
}

export default SelectField;
