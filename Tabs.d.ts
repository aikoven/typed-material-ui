import * as React from "react";
import {TouchTapEvent} from "./common";


export interface TabsProps {
  className?: string;
  contentContainerClassName?: string;
  contentContainerStyle?: React.CSSProperties;
  initialSelectedIndex?: number;
  inkBarStyle?: React.CSSProperties;
  onChange?: (value: any, e: React.FormEvent, tab: Tab) => void;
  style?: React.CSSProperties;
  tabItemContainerStyle?: React.CSSProperties;
  tabTemplate?: React.ComponentClass<any>;
  value?: any;
}

export class Tabs extends React.Component<TabsProps, {}> {
}

export interface TabProps {
  className?: string;
  icon?: React.ReactNode;
  label?: React.ReactNode;
  onActive?: (tab: Tab) => void;
  onTouchTap?: (value: any, e: TouchTapEvent, tab: Tab) => void;
  selected?: boolean;
  style?: React.CSSProperties;
  value?: any;
  width?: string;
}

export class Tab extends React.Component<TabProps, {}> {
}
