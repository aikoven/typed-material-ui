import * as React from 'react';


export interface ToolbarProps {
  className?: string;
  noGutter?: boolean;
  style?: React.CSSProperties;
}

export class Toolbar extends React.Component<ToolbarProps, {}> {
}

export default Toolbar;

export interface ToolbarGroupProps {
  className?: string;
  firstChild?: boolean;
  lastChild?: boolean;
  style?: React.CSSProperties;
}

export class ToolbarGroup extends React.Component<ToolbarGroupProps, {}> {
}

export interface ToolbarSeparatorProps {
  className?: string;
  style?: React.CSSProperties;
}

export class ToolbarSeparator
extends React.Component<ToolbarSeparatorProps, {}> {
}

export interface ToolbarTitleProps extends React.HTMLAttributes<any> {
  className?: string;
  style?: React.CSSProperties;
  text?: React.ReactNode;
}

export class ToolbarTitle extends React.Component<ToolbarTitleProps, {}> {
}
