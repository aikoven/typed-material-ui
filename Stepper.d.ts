import * as React from 'react';

import {SharedEnhancedButtonProps} from './internal/EnhancedButton';


export interface StepProps {
  active?: boolean;
  completed?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export class Step extends React.Component<StepProps, {}> {
}

export interface StepButtonProps extends SharedEnhancedButtonProps {
  active?: boolean;
  completed?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode | string | number;
  onMouseEnter?: React.MouseEventHandler<any>;
  onMouseLeave?: React.MouseEventHandler<any>;
  onTouchStart?: React.TouchEventHandler<any>;
  style?: React.CSSProperties;
}

export class StepButton extends React.Component<StepButtonProps, {}> {
}

export interface StepContentProps {
  active?: boolean;
  last?: boolean;
  style?: React.CSSProperties;
}

export class StepContent extends React.Component<StepContentProps, {}> {
}

export interface StepLabelProps {
  active?: boolean;
  completed?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode | string | number;
  iconContainerStyle?: React.CSSProperties;
  style?: React.CSSProperties;
}

export class StepLabel extends React.Component<StepLabelProps, {}> {
}

export interface StepperProps {
  activeStep?: number;
  linear?: boolean;
  orientation?: 'horizontal' | 'vertical';
  style?: React.CSSProperties;
}

export default class Stepper extends React.Component<StepperProps, {}> {
}
