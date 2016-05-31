import * as React from 'react';

// What's common between React.TouchEvent and React.MouseEvent
export interface TouchTapEvent extends React.SyntheticEvent {
  altKey: boolean;
  ctrlKey: boolean;
  getModifierState(key: string): boolean;
  metaKey: boolean;
  shiftKey: boolean;
}

// What's common between React.TouchEventHandler and React.MouseEventHandler
export interface TouchTapEventHandler extends React.EventHandler<TouchTapEvent> { }


export interface Origin {
  horizontal: 'left' | 'middle' | 'right';
  vertical: 'top' | 'center' | 'bottom';
}
