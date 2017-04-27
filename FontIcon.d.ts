import * as React from 'react';


export interface FontIconProps extends React.HTMLAttributes<FontIcon> {
  // <span/> is the element that get the 'other' properties
  color?: string;
  hoverColor?: string;
  onMouseEnter?: React.MouseEventHandler<any>;
  onMouseLeave?: React.MouseEventHandler<any>;
  style?: React.CSSProperties;
}

export class FontIcon extends React.Component<FontIconProps, {}> {
}

export default FontIcon;
