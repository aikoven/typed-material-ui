import * as React from 'react';


export interface DrawerProps extends React.Props<Drawer> {
  className?: string;
  containerClassName?: string;
  containerStyle?: React.CSSProperties;
  disableSwipeToOpen?: boolean;
  docked?: boolean;
  onRequestChange?(open: boolean, reason: string): void;
  open?: boolean;
  openSecondary?: boolean;
  overlayClassName?: string;
  overlayStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  swipeAreaWidth?: number;
  width?: number;
  zDepth?: number;
}

export default class Drawer extends React.Component<DrawerProps, {}> {
}
