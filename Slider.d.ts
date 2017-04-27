import * as React from 'react';


export interface SliderProps {
  axis?: 'x' | 'x-reverse' | 'y' | 'y-reverse';
  defaultValue?: number;
  disableFocusRipple?: boolean;
  disabled?: boolean;
  max?: number;
  min?: number;
  name?: string;
  onBlur?: React.FocusEventHandler<any>;
  onChange?: (e: React.MouseEvent<any>, value: number) => void;
  onDragStart?: React.MouseEventHandler<any>;
  onDragStop?: React.MouseEventHandler<any>;
  onFocus?: React.FocusEventHandler<any>;
  required?: boolean;
  sliderStyle?: React.CSSProperties;
  step?: number;
  style?: React.CSSProperties;
  value?: number;
}

export class Slider extends React.Component<SliderProps, {}> {
}

export default Slider;
