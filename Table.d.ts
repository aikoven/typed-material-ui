import * as React from 'react';

export interface TableProps extends React.Props<Table> {
  allRowsSelected?: boolean;
  bodyStyle?: React.CSSProperties;
  className?: string;
  fixedFooter?: boolean;
  fixedHeader?: boolean;
  footerStyle?: React.CSSProperties;
  headerStyle?: React.CSSProperties;
  height?: string;
  multiSelectable?: boolean;
  onCellClick?: (row: number, column: number) => void;
  onCellHover?: (row: number, column: number) => void;
  onCellHoverExit?: (row: number, column: number) => void;
  onRowHover?: (row: number) => void;
  onRowHoverExit?: (row: number) => void;
  onRowSelection?: (selectedRows: number[] | string) => void;
  selectable?: boolean;
  style?: React.CSSProperties;
  wrapperStyle?: React.CSSProperties;
}
export class Table extends React.Component<TableProps, {}> {
}

export default Table;

export interface TableRowProps extends React.Props<TableRow> {
  // <tr/> is element that get the 'other' properties
  className?: string;
  displayBorder?: boolean;
  hoverable?: boolean;
  hovered?: boolean;
  onCellClick?: (e: React.MouseEvent, row: number, column: number) => void;
  onCellHover?: (e: React.MouseEvent, row: number, column: number) => void;
  onCellHoverExit?: (e: React.MouseEvent, row: number, column: number) => void;
  onRowClick?: (e: React.MouseEvent, row: number) => void;
  onRowHover?: (e: React.MouseEvent, row: number) => void;
  onRowHoverExit?: (e: React.MouseEvent, row: number) => void;
  rowNumber?: number;
  selectable?: boolean;
  selected?: boolean;
  striped?: boolean;
  style?: React.CSSProperties;
}
export class TableRow extends React.Component<TableRowProps, {}> {
}

export interface TableRowColumnProps extends React.Props<TableRowColumn> {
  // <td/> is element that get the 'other' properties
  className?: string;
  columnNumber?: number;
  hoverable?: boolean;
  key?: string;
  onClick?: (e: React.MouseEvent, column: number) => void;
  onHover?: (e: React.MouseEvent, column: number) => void;
  onHoverExit?: (e: React.MouseEvent, column: number) => void;
  style?: React.CSSProperties;

  // useful attributes passed to <td/>
  colSpan?: number;
}
export class TableRowColumn extends React.Component<TableRowColumnProps, {}> {
}

export interface TableHeaderProps extends React.Props<TableHeader> {
  adjustForCheckbox?: boolean;
  className?: string;
  displaySelectAll?: boolean;
  enableSelectAll?: boolean;
  onSelectAll?: (checked: boolean) => void;
  selectAllSelected?: boolean;
  style?: React.CSSProperties;
}
export class TableHeader extends React.Component<TableHeaderProps, {}> {
}

export interface TableHeaderColumnProps extends React.Props<TableHeaderColumn> {
  // <th/> is element that get the 'other' properties
  className?: string;
  columnNumber?: number;
  key?: string;
  onClick?: (e: React.MouseEvent, column: number) => void;
  style?: React.CSSProperties;
  tooltip?: string;
  tooltipStyle?: React.CSSProperties;

  // useful attributes passed to <th/>
  colSpan?: number;
}
export class TableHeaderColumn extends React.Component<TableHeaderColumnProps, {}> {
}

export interface TableBodyProps extends React.Props<TableBody> {
  allRowsSelected?: boolean;
  className?: string;
  deselectOnClickaway?: boolean;
  displayRowCheckbox?: boolean;
  multiSelectable?: boolean;
  onCellClick?: (row: number, column: number) => void;
  onCellHover?: (row: number, column: number) => void;
  onCellHoverExit?: (row: number, column: number) => void;
  onRowHover?: (row: number) => void;
  onRowHoverExit?: (row: number) => void;
  onRowSelection?: (selectedRows: number[] | string) => void;
  preScanRows?: boolean;
  selectable?: boolean;
  showRowHover?: boolean;
  stripedRows?: boolean;
  style?: React.CSSProperties;
}
export class TableBody extends React.Component<TableBodyProps, {}> {
}

export interface TableFooterProps extends React.Props<TableFooter> {
  // <tfoot/> is element that get the 'other' properties
  adjustForCheckbox?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
export class TableFooter extends React.Component<TableFooterProps, {}> {
}
