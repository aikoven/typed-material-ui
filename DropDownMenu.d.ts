import * as React from 'react';
import {TouchTapEvent} from "./common";

export interface DropDownMenuProps {
  animated?: boolean;
  autoWidth?: boolean;
  className?: string;
  disabled?: boolean;
  iconStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  maxHeight?: number;
  menuStyle?: React.CSSProperties;
  onChange?: (e: TouchTapEvent<any>, index: number, menuItemValue: any) => void;
  openImmediately?: boolean;
  style?: React.CSSProperties;
  underlineStyle?: React.CSSProperties;
  value?: any;
}

export default class DropDownMenu extends React.Component<DropDownMenuProps, {}> {}
