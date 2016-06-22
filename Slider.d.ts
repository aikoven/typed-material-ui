import * as React from 'react';


export interface SliderProps {
  defaultValue?: number;
  description?: string;
  disableFocusRipple?: boolean;
  disabled?: boolean;
  error?: string;
  max?: number;
  min?: number;
  name?: string;
  onBlur?: React.FocusEventHandler;
  onChange?: (e: React.MouseEvent, value: number) => void;
  onDragStart?: React.MouseEventHandler;
  onDragStop?: React.MouseEventHandler;
  onFocus?: React.FocusEventHandler;
  required?: boolean;
  step?: number;
  style?: React.CSSProperties;
  value?: number;
}

export default class Slider extends React.Component<SliderProps, {}> {
}
