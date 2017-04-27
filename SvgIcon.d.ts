import * as React from 'react';


interface SvgIconProps extends React.SVGAttributes<any> {
  // <svg/> is the element that get the 'other' properties
  color?: string;
  hoverColor?: string;
  onMouseEnter?: React.MouseEventHandler<any>;
  onMouseLeave?: React.MouseEventHandler<any>;
  style?: React.CSSProperties;
  viewBox?: string;
}

export class SvgIcon extends React.Component<SvgIconProps, {}> {
}

export default SvgIcon;
