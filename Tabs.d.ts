import * as React from "react";
import {TouchTapEvent} from "./common";


export interface TabTemplateProps {
  selected?: boolean;
}


export interface TabsProps {
  className?: string;
  contentContainerClassName?: string;
  contentContainerStyle?: React.CSSProperties;
  initialSelectedIndex?: number;
  inkBarStyle?: React.CSSProperties;
  onChange?: (value: any, e: React.FormEvent<any>, tab: Tab) => void;
  style?: React.CSSProperties;
  tabItemContainerStyle?: React.CSSProperties;
  tabTemplate?: string |
    React.StatelessComponent<TabTemplateProps> |
    React.ComponentClass<TabTemplateProps>;
  value?: any;
}

export class Tabs extends React.Component<TabsProps, {}> {
}

export interface TabProps {
  className?: string;
  icon?: React.ReactNode;
  label?: React.ReactNode;
  onActive?: (tab: Tab) => void;
  onTouchTap?: (value: any, e: TouchTapEvent<any>, tab: Tab) => void;
  selected?: boolean;
  style?: React.CSSProperties;
  value?: any;
  width?: string;
}

export class Tab extends React.Component<TabProps, {}> {
}
