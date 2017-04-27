import * as React from 'react';


export interface GridListProps {
  cellHeight?: number | 'auto';
  cols?: number;
  padding?: number;
  style?: React.CSSProperties;
}

export class GridList extends React.Component<GridListProps, {}> {
}

export default GridList;

export interface GridTileProps {
  actionIcon?: React.ReactElement<any>;
  actionPosition?: 'left' | 'right';
  cols?: number;
  containerElement?: React.ReactElement<any> | string;
  rows?: number;
  style?: React.CSSProperties;
  subtitle?: React.ReactNode;
  subtitleStyle?: React.CSSProperties;
  title?: React.ReactNode;
  titleBackground?: string;
  titlePosition?: 'top' | 'bottom';
  titleStyle?: React.CSSProperties;
}

export class GridTile extends React.Component<GridTileProps, {}> {
}
