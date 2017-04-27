import * as React from 'react';

import {Origin, TouchTapEvent} from './common';
import {PopoverAnimationProps} from './Popover';


export interface DropDownMenuProps {
  anchorOrigin?: Origin;
  animated?: boolean;
  animation?: React.ComponentClass<PopoverAnimationProps>;
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
  onClose?: () => void;
  openImmediately?: boolean;
  selectedMenuItemStyle?: React.CSSProperties;
  selectionRenderer?: (value: any) => any;
  style?: React.CSSProperties;
  targetOrigin?: Origin;
  underlineStyle?: React.CSSProperties;
  value?: any;
}

export class DropDownMenu extends React.Component<DropDownMenuProps, {}> {
}

export default DropDownMenu;
