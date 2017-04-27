import * as React from 'react';

import {Origin} from './common';


export interface PopoverAnimationProps {
  open: boolean;
  style?: React.CSSProperties;
}

export interface PopoverProps {
  anchorEl?: React.ReactInstance;
  anchorOrigin?: Origin;
  animated?: boolean;
  animation?: React.ComponentClass<PopoverAnimationProps>;
  autoCloseWhenOffScreen?: boolean;
  canAutoPosition?: boolean;
  className?: string;
  onRequestClose?: (reason: string) => void;
  open?: boolean;
  style?: React.CSSProperties;
  targetOrigin?: Origin;
  useLayerForClickAway?: boolean;
  zDepth?: number;
}

export class Popover extends React.Component<PopoverProps, {}> {
}

export default Popover;
