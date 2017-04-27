import * as React from 'react';


export interface LinearProgressProps {
  color?: string;
  max?: number;
  min?: number;
  mode?: 'determinate' | 'indeterminate';
  style?: React.CSSProperties;
  value?: number;
}

export class LinearProgress extends React.Component<LinearProgressProps, {}> {
}

export default LinearProgress;
