import * as React from 'react';

import {TouchTapEvent} from './common';


export interface TabTemplateProps {
  selected?: boolean;
  style?: React.CSSProperties;
}

export interface TabsProps {
  className?: string;
  contentContainerClassName?: string;
  contentContainerStyle?: React.CSSProperties;
  initialSelectedIndex?: number;
  inkBarStyle?: React.CSSProperties;
  onChange?: (value: any, event: React.FormEvent<any>, tab: Tab) => void;
  style?: React.CSSProperties;
  tabItemContainerStyle?: React.CSSProperties;
  tabTemplate?: string |
    React.StatelessComponent<TabTemplateProps> |
    React.ComponentClass<TabTemplateProps>;
  tabTemplateStyle?: React.CSSProperties;
  value?: any;
}

export class Tabs extends React.Component<TabsProps, {}> {
}

export default Tabs;

export interface TabProps {
  // <EnhancedButton/> is the element that get the 'other' properties
  buttonStyle?: React.CSSProperties;
  className?: string;
  icon?: React.ReactNode;
  label?: React.ReactNode;
  onActive?: (tab: Tab) => void;
  onTouchTap?: TouchTapEvent<any>;
  selected?: boolean;
  style?: React.CSSProperties;
  value?: any;
  width?: string;
}

export class Tab extends React.Component<TabProps, {}> {
}
