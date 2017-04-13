import * as React from "react";
import {Origin} from "./common";

interface PopoverAnimationProps {
  open: boolean;
  style?: React.CSSProperties;
}

interface PopoverProps {
  anchorEl?: Element;
  anchorOrigin?: Origin;
  animated?: boolean;
  animation?: React.ComponentClass<PopoverAnimationProps>;
  autoCloseWhenOffScreen?: boolean;
  canAutoPosition?: boolean;
  className?: string;
  onRequestClose?: (reason: string) => void;
  open?: boolean;
  style?: React.CSSProperties;
  targetOrigin?: Origin;
  useLayerForClickAway?: boolean;
  zDepth?: number;
}
export default class Popover extends React.Component<PopoverProps, {}>{
}
