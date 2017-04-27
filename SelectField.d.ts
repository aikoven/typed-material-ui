import * as React from 'react';

import {TouchTapEvent} from './common';
import {DropDownMenuProps} from './DropDownMenu';


// TODO receive TextFieldProps
export interface SelectFieldProps {
  // <DropDownMenu/> is the element that get the 'other' properties
  autoWidth?: boolean;
  disabled?: boolean;
  dropDownMenuProps?: DropDownMenuProps;
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
  listStyle?: React.CSSProperties;
  maxHeight?: number;
  menuItemStyle?: React.CSSProperties;
  menuStyle?: React.CSSProperties;
  multiple?: boolean;
  onBlur?: React.FocusEventHandler<any>;
  onChange?: (event: TouchTapEvent<any>,
              index: number,
              menuItemValue: any) => void;
  onFocus?: React.FocusEventHandler<any>;
  selectedMenuItemStyle?: React.CSSProperties;
  selectionRenderer?: (value: any) => void;
  style?: React.CSSProperties;
  underlineDisabledStyle?: React.CSSProperties;
  underlineFocusStyle?: React.CSSProperties;
  underlineStyle?: React.CSSProperties;
  value?: any;
}

export default class SelectField extends React.Component<SelectFieldProps, {}> {
}
