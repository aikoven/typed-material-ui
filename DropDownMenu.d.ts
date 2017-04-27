import * as React from 'react';

import {Origin, TouchTapEvent} from './common';


export interface DropDownMenuProps {
  anchorOrigin?: Origin;
  animated?: boolean;
  // TODO: animation: () => void;
  autoWidth?: boolean;
  className?: string;
  disabled?: boolean;
  iconButton?: React.ReactNode;
  iconStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  listStyle?: React.CSSProperties;
  maxHeight?: number;
  menuItemStyle?: React.CSSProperties;
  menuStyle?: React.CSSProperties;
  multiple?: boolean;
  onChange?: (event: TouchTapEvent<any>, key: number, value: any) => void;
  // TODO: onClose?: () => void;
  openImmediately?: boolean;
  selectedMenuItemStyle?: React.CSSProperties;
  selectionRenderer?: (value: any) => void;
  style?: React.CSSProperties;
  targetOrigin?: Origin;
  underlineStyle?: React.CSSProperties;
  value?: any;
}

export default class DropDownMenu extends React.Component<DropDownMenuProps, {}> {
}
