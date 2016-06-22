import * as React from 'react';
import {PaperProps} from "./Paper";


export interface CardProps extends React.Props<Card>, PaperProps {
  actAsExpander?: boolean;
  expandable?: boolean;
  expanded?: boolean;
  initiallyExpanded?: boolean;
  onExpandChange?(isExpanded: boolean): void;
  showExpandableButton?: boolean;
  style?: React.CSSProperties;
}

export class Card extends React.Component<CardProps, {}> {
}

export interface CardActionsProps extends React.Props<CardActions> {
  actAsExpander?: boolean;
  expandable?: boolean;
  showExpandableButton?: boolean;
  style?: React.CSSProperties;
}

export class CardActions extends React.Component<CardActionsProps, {}> {
}

export interface CardExpandableProps extends React.Props<CardExpandable> {
  expanded?: boolean;
  onExpanding?: (isExpanded: boolean) => void;
  style?: React.CSSProperties;
}

export class CardExpandable extends React.Component<CardExpandableProps, {}> {
}

export interface CardHeaderProps extends React.Props<CardHeader> {
  actAsExpander?: boolean;
  avatar?: React.ReactNode;
  expandable?: boolean;
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

export interface CardMediaProps extends React.Props<CardMedia> {
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

export interface CardTextProps extends React.Props<CardText> {
  actAsExpander?: boolean;
  color?: string;
  expandable?: boolean;
  style?: React.CSSProperties;
}
export class CardText extends React.Component<CardTextProps, {}> {
}

export interface CardTitleProps extends React.Props<CardTitle> {
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
