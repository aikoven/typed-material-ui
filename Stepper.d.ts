import * as React from 'react';


export interface StepperProps {
  activeStep?: number;
  children?: Step[];
  connector?: React.ReactNode;
  linear?:	boolean;
  orientation?: 'horizontal' | 'vertical' | 'horizontal';
  style?: React.CSSProperties;
}
export class Stepper extends React.Component<StepperProps, {}> {
}

export interface StepProps {
  active?:	boolean;
  children?: React.ReactNode;
  completed?: boolean;
  disabled?:	boolean;
  style?: React.CSSProperties;
}
export class Step extends React.Component<StepProps, {}> {
}

export interface StepLabelProps {
  active?:	boolean;
  children?: React.ReactNode;
  completed?:	boolean;
  disabled?:	boolean;
  icon?: React.ReactNode;
  iconContainerStyle?: React.ReactNode;
  style?: React.CSSProperties;
}
export class StepLabel extends React.Component<StepLabelProps, {}> {
}

export interface StepButtonProps {
  active?:	boolean;
  children?: React.ReactNode;
  completed?:	boolean;
  disabled?:	boolean;
  icon?: React.ReactNode;
  iconContainerStyle?: React.CSSProperties;
  style?: React.CSSProperties;
}
export class StepButton extends React.Component<StepButtonProps, {}> {
}

export interface StepContentProps {
  active?:	boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  // transition?: (props: any) => any;
  // TODO: './internal/ExpandTransition';
  transitionDuration?: number;
}
export class StepContent extends React.Component<StepContentProps, {}> {
}
