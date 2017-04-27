import * as React from 'react';


export interface DrawerProps {
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

export class Drawer extends React.Component<DrawerProps, {}> {
}

export default Drawer;
