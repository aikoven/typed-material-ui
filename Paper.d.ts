import * as React from 'react';

export interface PaperProps extends React.HTMLAttributes, React.Props<Paper> {
  circle?: boolean;
  rounded?: boolean;
  style?: React.CSSProperties;
  transitionEnabled?: boolean;
  zDepth?: number;
}

export default class Paper extends React.Component<PaperProps, {}> {
}
