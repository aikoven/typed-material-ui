import * as React from 'react';


export interface SnackbarProps {
  action?: React.ReactNode;
  autoHideDuration?: number;
  bodyStyle?: React.CSSProperties;
  className?: string;
  contentStyle?: React.CSSProperties;
  message: React.ReactNode;
  onActionTouchTap?: React.TouchEventHandler<any>;
  onRequestClose?(reason: string): void;
  open: boolean;
  style?: React.CSSProperties;
}

export class Snackbar extends React.Component<SnackbarProps, {}> {
}

export default Snackbar;
