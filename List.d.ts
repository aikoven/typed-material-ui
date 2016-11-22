import * as React from 'react';
import {TouchTapEventHandler} from "./common";
import {EnhancedButtonProps} from "./internal/EnhancedButton";


export interface ListProps extends React.Props<List> {
  style?: React.CSSProperties;
}

export class List extends React.Component<ListProps, {}> {
}

export default List;


export interface ListItemProps extends EnhancedButtonProps {
  // <EnhancedButton/> is the element that get the 'other' properties
  autoGenerateNestedIndicator?: boolean;
  disableKeyboardFocus?: boolean;
  disabled?: boolean;
  initiallyOpen?: boolean;
  innerDivStyle?: React.CSSProperties;
  insetChildren?: boolean;
  leftAvatar?: React.ReactElement<any>;
  leftCheckbox?: React.ReactElement<any>;
  leftIcon?: React.ReactElement<any>;
  nestedItems?: React.ReactElement<ListItemProps>[];
  nestedLevel?: number;
  nestedListStyle?: React.CSSProperties;
  onKeyboardFocus?: React.FocusEventHandler<any>;
  onMouseEnter?: React.MouseEventHandler<any>;
  onMouseLeave?: React.MouseEventHandler<any>;
  onNestedListToggle?: (item: any) => void;
  onTouchStart?: React.TouchEventHandler<any>;
  onTouchTap?: TouchTapEventHandler<any>;
  primaryText?: React.ReactNode;
  primaryTogglesNestedList?: boolean;
  rightAvatar?: React.ReactElement<any>;
  rightIcon?: React.ReactElement<any>;
  rightIconButton?: React.ReactElement<any>;
  rightToggle?: React.ReactElement<any>;
  secondaryText?: React.ReactNode;
  secondaryTextLines?: number; // 1 or 2
  style?: React.CSSProperties;
}
export class ListItem extends React.Component<ListItemProps, {}> {
}
