import * as React from 'react';

export interface ToolbarProps extends React.Props<Toolbar> {
  className?: string;
  noGutter?: boolean;
  style?: React.CSSProperties;
}
export class Toolbar extends React.Component<ToolbarProps, {}> {
}

export interface ToolbarGroupProps extends React.Props<ToolbarGroup> {
  className?: string;
  firstChild?: boolean;
  float?: 'left' | 'right';
  lastChild?: boolean;
  style?: React.CSSProperties;
}
export class ToolbarGroup extends React.Component<ToolbarGroupProps, {}> {
}

export interface ToolbarSeparatorProps extends React.Props<ToolbarSeparator> {
  className?: string;
  style?: React.CSSProperties;
}
export class ToolbarSeparator extends React.Component<ToolbarSeparatorProps, {}> {
}

export interface ToolbarTitleProps extends React.HTMLAttributes, React.Props<ToolbarTitle> {
  className?: string;
  style?: React.CSSProperties;
  text?: string;
}
export class ToolbarTitle extends React.Component<ToolbarTitleProps, {}> {
}
