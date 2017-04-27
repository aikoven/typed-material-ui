import * as React from 'react';

// What's common between React.TouchEvent and React.MouseEvent
export interface TouchTapEvent<T> extends React.SyntheticEvent<T> {
  altKey: boolean;
  ctrlKey: boolean;
  getModifierState(key: string): boolean;
  metaKey: boolean;
  shiftKey: boolean;
}

// What's common between React.TouchEventHandler and React.MouseEventHandler
export interface TouchTapEventHandler<T>
extends React.EventHandler<TouchTapEvent<T>> {
}

export interface Origin {
  horizontal: 'left' | 'middle' | 'right';
  vertical: 'top' | 'center' | 'bottom';
}

export type Corners = 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';

export type CornersAndCenter = 'bottom-center' | 'bottom-left' |
  'bottom-right' | 'top-center' | 'top-left' | 'top-right';

export interface ReactLink<T> {
  value: T;
  requestChange(newValue: T): void;
}

import {DOMAttributes} from 'react';

declare module 'react' {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    onTouchTap?: TouchTapEventHandler<T>;
  }
}
