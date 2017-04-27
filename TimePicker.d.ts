import * as React from "react";

export interface TimePickerProps {
  // <TextField/> is element that get the 'other' properties
  autoOk?: boolean;
  cancelLabel?: React.ReactNode;
  defaultTime?: Date;
  dialogBodyStyle?: React.CSSProperties;
  dialogStyle?: React.CSSProperties;
  disabled?: boolean;
  format?: "ampm" | "24hr";
  okLabel?: React.ReactNode;
  onChange?: (e: any, time: Date) => void;
  onDismiss?: () => void;
  onFocus?: React.FocusEventHandler<any>;
  onShow?: () => void;
  onTouchTap?: React.TouchEventHandler<any>;
  pedantic?: boolean;
  style?: React.CSSProperties;
  textFieldStyle?: React.CSSProperties;
  value?: Date;

  // From <TextField />
  className?: string;
  defaultValue?: string | number;
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
  onBlur?: React.FocusEventHandler<any>;
  onKeyDown?: React.KeyboardEventHandler<any>;
  rows?: number,
  rowsMax?: number,
  textareaStyle?: React.CSSProperties;
  type?: string;
  underlineDisabledStyle?: React.CSSProperties;
  underlineFocusStyle?: React.CSSProperties;
  underlineShow?: boolean;
  underlineStyle?: React.CSSProperties;
}

export default class TimePicker extends React.Component<TimePickerProps, {}> {
  focus(): void;
  openDialog(): void;
}
