import * as React from 'react';
import {Origin} from "./common";
import {TextFieldProps} from "./TextField";


export type AutoCompleteDataItem = { 
  text: string;
  value: React.ReactNode; 
} | string;

export type AutoCompleteDataSource = AutoCompleteDataItem[];

export interface AutoCompleteProps extends TextFieldProps {
  anchorOrigin?: Origin;
  animated?: boolean;
  dataSource: AutoCompleteDataSource;
  disableFocusRipple?: boolean;
  errorStyle?: React.CSSProperties;
  errorText?: string;
  filter?(searchText: string, key: string, item: AutoCompleteDataItem): boolean;
  floatingLabelText?: string;
  fullWidth?: boolean;
  hintText?: string;
  listStyle?: React.CSSProperties;
  menuCloseDelay?: number;
  menuProps?: any;
  menuStyle?: React.CSSProperties;
  onBlur?: React.FocusEventHandler<any>;
  onFocus?: React.FocusEventHandler<any>;
  onNewRequest?(chosenRequest: string, index: number): void;
  onUpdateInput?(searchText: string, dataSource: AutoCompleteDataSource): void;
  open?: boolean;
  openOnFocus?: boolean;
  searchText?: string;
  style?: React.CSSProperties;
  targetOrigin?: Origin;
}

export default class AutoComplete extends React.Component<AutoCompleteProps, {}> {
}
