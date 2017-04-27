import * as React from "react";

export interface DatePickerProps {
  // <TextField/> is the element that get the 'other' properties
  DateTimeFormat?: Intl.DateTimeFormat;
  autoOk?: boolean;
  cancelLabel?: string;
  container?: string; // oneOf(['dialog', 'inline'])
  defaultDate?: Date;
  disableYearSelection?: boolean;
  disabled?: boolean;
  firstDayOfWeek?: number;
  formatDate?: (date: Date) => string;
  locale?: string;
  maxDate?: Date;
  minDate?: Date;
  mode?: string;
  okLabel?: string;
  onChange?: (e: any, date: Date) => void; // e is always null
  onDismiss?: () => void;
  onFocus?: React.FocusEventHandler<any>;
  onShow?: () => void;
  onTouchTap?: React.TouchEventHandler<any>;
  shouldDisableDate?: (day: Date) => boolean;
  style?: React.CSSProperties;
  textFieldStyle?: React.CSSProperties;
  value?: Date;

  // From <TextField />
  className?: string;
  defaultValue?: string;
  errorStyle?: React.CSSProperties;
  errorText?: React.ReactNode;
  floatingLabelFixed?: boolean;
  floatingLabelStyle?: React.CSSProperties;
  floatingLabelText?: React.ReactNode;
  fullWidth?: boolean;
  hintStyle?: React.CSSProperties;
  hintText?: React.ReactNode;
  id?: string;
  name?: string;
  inputStyle?: React.CSSProperties;
  onBlur?: React.FocusEventHandler<any>;
  onKeyDown?: React.KeyboardEventHandler<any>;
  rows?: number,
  rowsMax?: number,
  type?: string;
  underlineDisabledStyle?: React.CSSProperties;
  underlineFocusStyle?: React.CSSProperties;
  underlineShow?: boolean;
  underlineStyle?: React.CSSProperties;
}

export class DatePicker extends React.Component<DatePickerProps, {}> {
}

export default DatePicker;
