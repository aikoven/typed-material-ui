import * as React from 'react';


export interface SnackbarProps {
  action?: React.ReactNode;
  autoHideDuration?: number;
  bodyStyle?: React.CSSProperties;
  className?: string;
  message: React.ReactNode;
  onActionTouchTap?: React.TouchEventHandler<any>;
  onRequestClose?(reason: string): void;
  open: boolean;
  style?: React.CSSProperties;
}

export default class Snackbar extends React.Component<SnackbarProps, {}> {
}
