import * as React from 'react';

import {Origin} from './common';
import {TextFieldProps} from './TextField';


export interface AutoCompleteProps<DataItem> extends TextFieldProps {
  anchorOrigin?: Origin;
  animated?: boolean;
  dataSource: DataItem[];
  dataSourceConfig?: { text: string; value: string; };
  disableFocusRipple?: boolean;
  errorStyle?: React.CSSProperties;
  errorText?: React.ReactNode;
  filter?: (searchText: string, key: string, item: DataItem) => boolean;
  floatingLabelText?: string;
  fullWidth?: boolean;
  hintText?: string;
  listStyle?: React.CSSProperties;
  maxSearchResults?: number;
  menuCloseDelay?: number;
  menuProps?: any;
  menuStyle?: React.CSSProperties;
  // TODO: onClose?: () => {};
  onBlur?: React.FocusEventHandler<any>;
  onFocus?: React.FocusEventHandler<any>;
  onNewRequest?(chosenRequest: string, index: number): void;
  onUpdateInput?(searchText: string, dataSource: DataItem[], params: {}): void;
  open?: boolean;
  openOnFocus?: boolean;
  searchText?: string;
  style?: React.CSSProperties;
  targetOrigin?: Origin;
  textFieldStyle?: React.CSSProperties;
}

export default class AutoComplete extends React.Component<AutoCompleteProps<any>, {}> {
}
