import * as React from 'react';

export interface CircularProgressProps {
  color?: string;
  innerStyle?: React.CSSProperties;
  max?: number;
  min?: number;
  mode?: string;
  size?: number;
  style?: React.CSSProperties;
  value?: number;
}

export default class CircularProgress extends React.Component<CircularProgressProps, {}> {
}
