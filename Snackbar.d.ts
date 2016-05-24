import * as React from 'react';


export interface SnackbarProps extends React.Props<Snackbar> {
  action?: string;
  autoHideDuration?: number;
  bodyStyle?: React.CSSProperties;
  className?: string;
  message: string | JSX.Element;
  onActionTouchTap?: React.TouchEventHandler;
  onRequestClose: (reason: string) => void;
  open: boolean;
  style?: React.CSSProperties;
}

export default class Snackbar extends React.Component<SnackbarProps, {}> {
}
