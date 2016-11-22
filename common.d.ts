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
export interface TouchTapEventHandler<T> extends React.EventHandler<TouchTapEvent<T>> { }


export interface Origin {
  horizontal: 'left' | 'middle' | 'right';
  vertical: 'top' | 'center' | 'bottom';
}
