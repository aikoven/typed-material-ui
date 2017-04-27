import * as React from 'react';


export interface AvatarProps {
  backgroundColor?: string;
  className?: string;
  color?: string;
  icon?: React.ReactElement<any>;
  size?: number;
  src?: string;
  style?: React.CSSProperties;
}

export class Avatar extends React.Component<AvatarProps, {}> {
}

export default Avatar;
