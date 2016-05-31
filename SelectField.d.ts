import * as React from 'react';
import {TouchTapEvent} from "./common";

export interface SelectFieldProps extends React.Props<SelectField> {
  // <DropDownMenu/> is the element that get the 'other' properties
  autoWidth?: boolean;
  disabled?: boolean;
  errorStyle?: React.CSSProperties;
  errorText?: React.ReactNode;
  floatingLabelStyle?: React.CSSProperties;
  floatingLabelText?: React.ReactNode;
  fullWidth?: boolean;
  hintStyle?: React.CSSProperties;
  hintText?: React.ReactNode;
  iconStyle?: React.CSSProperties;
  id?: string;
  labelStyle?: React.CSSProperties;
  onBlur?: React.FocusEventHandler;
  onChange?: (e: TouchTapEvent, index: number, menuItemValue: any) => void;
  onFocus?: React.FocusEventHandler;
  selectFieldRoot?: React.CSSProperties;
  selectedIndex?: number;
  style?: React.CSSProperties;
  underlineDisabledStyle?: React.CSSProperties;
  underlineFocusStyle?: React.CSSProperties;
  underlineStyle?: React.CSSProperties;
  value?: any;

  // useful attributes passed to <DropDownMenu/>
  className?: string;
  maxHeight?: number;
  menuStyle?: any;
  openImmediately?: boolean;
}

export default class SelectField extends React.Component<SelectFieldProps, {}> {
}
