import * as React from 'react';


export interface SnackbarProps {
  action?: string;
  autoHideDuration?: number;
  bodyStyle?: React.CSSProperties;
  className?: string;
  message: string | React.ReactChild;
  onActionTouchTap?: React.TouchEventHandler<any>;
  onRequestClose?(reason: string): void;
  open: boolean;
  style?: React.CSSProperties;
}

export default class Snackbar extends React.Component<SnackbarProps, {}> {
}
