import * as React from 'react';


export interface BadgeProps {
  badgeContent: React.ReactNode;
  badgeStyle?: React.CSSProperties;
  className?: string;
  primary?: boolean;
  secondary?: boolean;
  style?: React.CSSProperties;
}

export class Badge extends React.Component<BadgeProps, {}> {
}

export default Badge;
