import * as React from 'react';


export interface PaperProps extends React.HTMLAttributes<any> {
  circle?: boolean;
  rounded?: boolean;
  style?: React.CSSProperties;
  transitionEnabled?: boolean;
  zDepth?: number;
}

export class Paper extends React.Component<PaperProps, {}> {
}

export default Paper;
