import * as React from 'react';

import {PaperProps} from './Paper';


export interface CardProps extends PaperProps {
  containerStyle?: React.CSSProperties;
  expandable?: boolean;
  expanded?: boolean;
  initiallyExpanded?: boolean;
  onExpandChange?(newExpandedState: boolean): void;
  showExpandableButton?: boolean;
  style?: React.CSSProperties;
}

export class Card extends React.Component<CardProps, {}> {
}

export default Card;

export interface CardActionsProps {
  actAsExpander?: boolean;
  expandable?: boolean;
  showExpandableButton?: boolean;
  style?: React.CSSProperties;
}

export class CardActions extends React.Component<CardActionsProps, {}> {
}

export interface CardHeaderProps {
  actAsExpander?: boolean;
  avatar?: React.ReactNode;
  closeIcon?: React.ReactNode;
  expandable?: boolean;
  openIcon?: React.ReactNode;
  showExpandableButton?: boolean;
  style?: React.CSSProperties;
  subtitle?: React.ReactNode;
  subtitleColor?: string;
  subtitleStyle?: React.CSSProperties;
  textStyle?: React.CSSProperties;
  title?: React.ReactNode;
  titleColor?: string;
  titleStyle?: React.CSSProperties;
}

export class CardHeader extends React.Component<CardHeaderProps, {}> {
}

export interface CardMediaProps {
  actAsExpander?: boolean;
  expandable?: boolean;
  mediaStyle?: React.CSSProperties;
  overlay?: React.ReactNode;
  overlayContainerStyle?: React.CSSProperties;
  overlayContentStyle?: React.CSSProperties;
  overlayStyle?: React.CSSProperties;
  style?: React.CSSProperties;
}

export class CardMedia extends React.Component<CardMediaProps, {}> {
}

export interface CardTextProps {
  actAsExpander?: boolean;
  color?: string;
  expandable?: boolean;
  style?: React.CSSProperties;
}

export class CardText extends React.Component<CardTextProps, {}> {
}

export interface CardTitleProps {
  actAsExpander?: boolean;
  expandable?: boolean;
  showExpandableButton?: boolean;
  style?: React.CSSProperties;
  subtitle?: React.ReactNode;
  subtitleColor?: string;
  subtitleStyle?: React.CSSProperties;
  title?: React.ReactNode;
  titleColor?: string;
  titleStyle?: React.CSSProperties;
}

export class CardTitle extends React.Component<CardTitleProps, {}> {
}
