import * as React from 'react';

export interface FontIconProps extends React.HTMLAttributes, React.Props<FontIcon> {
  // <span/> is the element that get the 'other' properties
  color?: string;
  hoverColor?: string;
  onMouseEnter?: React.MouseEventHandler;
  onMouseLeave?: React.MouseEventHandler;
  style?: React.CSSProperties;
}

export default class FontIcon extends React.Component<FontIconProps, {}> {
}
