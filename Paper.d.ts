import * as React from 'react';
import './common';


export interface PaperProps extends React.HTMLAttributes<Paper> {
  circle?: boolean;
  rounded?: boolean;
  style?: React.CSSProperties;
  transitionEnabled?: boolean;
  zDepth?: number;
}

export class Paper extends React.Component<PaperProps, {}> {
}

export default Paper;
