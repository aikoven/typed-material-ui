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
  onBlur?: React.FocusEventHandler<any>;
  onChange?: (e: React.MouseEvent<any>, value: number) => void;
  onDragStart?: React.MouseEventHandler<any>;
  onDragStop?: React.MouseEventHandler<any>;
  onFocus?: React.FocusEventHandler<any>;
  required?: boolean;
  step?: number;
  style?: React.CSSProperties;
  value?: number;
}

export default class Slider extends React.Component<SliderProps, {}> {
}
