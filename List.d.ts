import * as React from 'react';

import {TouchTapEventHandler} from './common';
import {EnhancedButtonProps} from './internal/EnhancedButton';
import {PaperProps} from './Paper';


// TODO: extends from Paper?
export interface ListProps extends PaperProps {
  // <Paper/> is the element that get the 'other' properties
  style?: React.CSSProperties;
}

export default class List extends React.Component<ListProps, {}> {
}

export interface ListItemProps extends EnhancedButtonProps {
  // <EnhancedButton/> is the element that get the 'other' properties
  autoGenerateNestedIndicator?: boolean;
  containerElement?: React.ReactElement<any> | string;
  disableKeyboardFocus?: boolean;
  disabled?: boolean;
  initiallyOpen?: boolean;
  innerDivStyle?: React.CSSProperties;
  insetChildren?: boolean;
  isKeyboardFocused?: boolean;
  leftAvatar?: React.ReactElement<any>;
  leftCheckbox?: React.ReactElement<any>;
  leftIcon?: React.ReactElement<any>;
  nestedItems?: React.ReactElement<ListItemProps>[];
  nestedLevel?: number;
  nestedListStyle?: React.CSSProperties;
  onKeyboardFocus?: (event: React.FocusEvent<{}>,
                     isKeyboardFocused: boolean) => void;
  onMouseEnter?: React.MouseEventHandler<any>;
  onMouseLeave?: React.MouseEventHandler<any>;
  onNestedListToggle?: (item: any) => void;
  onTouchStart?: React.TouchEventHandler<any>;
  onTouchEnd?: React.TouchEventHandler<any>;
  onTouchTap?: TouchTapEventHandler<any>;
  open?: boolean;
  primaryText?: React.ReactNode;
  primaryTogglesNestedList?: boolean;
  rightAvatar?: React.ReactElement<any>;
  rightIcon?: React.ReactElement<any>;
  rightIconButton?: React.ReactElement<any>;
  rightToggle?: React.ReactElement<any>;
  secondaryText?: React.ReactNode;
  secondaryTextLines?: 1 | 2;
  style?: React.CSSProperties;
}

export class ListItem extends React.Component<ListItemProps, {}> {
}
