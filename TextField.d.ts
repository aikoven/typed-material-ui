import * as React from 'react';


export interface TextFieldProps extends React.Props<TextField> {
  className?: string;
  defaultValue?: string | number;
  disabled?: boolean;
  errorStyle?: React.CSSProperties;
  errorText?: React.ReactNode;
  floatingLabelFixed?: boolean;
  floatingLabelFocusStyle?: React.CSSProperties;
  floatingLabelStyle?: React.CSSProperties;
  floatingLabelText?: React.ReactNode;
  fullWidth?: boolean;
  hintStyle?: React.CSSProperties;
  hintText?: React.ReactNode;
  id?: string;
  inputStyle?: React.CSSProperties;
  multiLine?: boolean;
  name?: string;
  onBlur?: React.FocusEventHandler;
  onChange?(event: React.FormEvent, value: string | number): void;
  onFocus?: React.FocusEventHandler;
  onKeyDown?: React.KeyboardEventHandler;
  rows?: number,
  rowsMax?: number,
  style?: React.CSSProperties;
  textareaStyle?: React.CSSProperties;
  type?: string;
  underlineDisabledStyle?: React.CSSProperties;
  underlineFocusStyle?: React.CSSProperties;
  underlineShow?: boolean;
  underlineStyle?: React.CSSProperties;
  value?: string | number;
}

export default class TextField extends React.Component<TextFieldProps, {}> {
}
