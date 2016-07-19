export {default as MuiThemeProvider} from './styles/MuiThemeProvider';
import * as colors from './styles/colors';
export {colors};
export {default as darkBaseTheme} from './styles/baseThemes/darkBaseTheme';
// export {default as DarkRawTheme} from './styles/baseThemes/darkBaseTheme';
export {default as lightBaseTheme} from './styles/baseThemes/lightBaseTheme';
// export {default as LightRawTheme} from './styles/baseThemes/lightBaseTheme';
export {default as getMuiTheme} from './styles/getMuiTheme';
export {default as spacing} from './styles/spacing';
// export {default as themeManager} from './styles/themeManager';
// export {default as transitions} from './styles/transitions';
// export {default as typography} from './styles/typography';
// export {default as zIndex} from './styles/zIndex';


import {Spacing} from "./styles/spacing";

export interface ThemePalette {
  primary1Color?: string;
  primary2Color?: string;
  primary3Color?: string;
  accent1Color?: string;
  accent2Color?: string;
  accent3Color?: string;
  textColor?: string;
  alternateTextColor?: string;
  canvasColor?: string;
  borderColor?: string;
  disabledColor?: string;
  pickerHeaderColor?: string;
  clockCircleColor?: string;
  shadowColor?: string;
}

export interface RawTheme {
  spacing?: Spacing;
  fontFamily?: string;
  palette?: ThemePalette;
  zIndex?: zIndex;
}

export interface MuiTheme extends RawTheme {
  isRtl?: boolean;
  userAgent?: any;
  baseTheme?: RawTheme;
  rawTheme?: RawTheme;
  appBar?: {
    color?: string,
    textColor?: string,
    height?: number,
  };
  avatar?: {
    borderColor?: string,
  }
  badge?: {
    color?: string,
    textColor?: string,
    primaryColor?: string,
    primaryTextColor?: string,
    secondaryColor?: string,
    secondaryTextColor?: string,
  },
  button?: {
    height?: number,
    minWidth?: number,
    iconButtonSize?: number,
  },
  cardText?: {
    textColor?: string,
  },
  checkbox?: {
    boxColor?: string,
    checkedColor?: string,
    requiredColor?: string,
    disabledColor?: string,
    labelColor?: string,
    labelDisabledColor?: string,
  },
  datePicker?: {
    color?: string,
    textColor?: string,
    calendarTextColor?: string,
    selectColor?: string,
    selectTextColor?: string,
  },
  dropDownMenu?: {
    accentColor?: string,
  },
  flatButton?: {
    color?: string,
    buttonFilterColor?: string,
    disabledColor?: string,
    textColor?: string,
    primaryTextColor?: string,
    secondaryTextColor?: string,
  },
  floatingActionButton?: {
    buttonSize?: number,
    miniSize?: number,
    color?: string,
    iconColor?: string,
    secondaryColor?: string,
    secondaryIconColor?: string,
    disabledColor?: string,
    disabledTextColor?: string,
  },
  gridTile?: {
    textColor?: string,
  },
  inkBar?: {
    backgroundColor?: string,
  },
  drawer?: {
    width?: number,
    color?: string,
  },
  leftNav?: {
    width?: number,
    color?: string,
  },
  listItem?: {
    nestedLevelDepth?: number,
  },
  menu?: {
    backgroundColor?: string,
    containerBackgroundColor?: string,
  },
  menuItem?: {
    dataHeight?: number,
    height?: number,
    hoverColor?: string,
    padding?: number,
    selectedTextColor?: string,
  },
  menuSubheader?: {
    padding?: number,
    borderColor?: string,
    textColor?: string,
  },
  paper?: {
    backgroundColor?: string,
    zDepthShadows?: string[],
  },
  radioButton?: {
    borderColor?: string,
    backgroundColor?: string,
    checkedColor?: string,
    requiredColor?: string,
    disabledColor?: string,
    size?: number,
    labelColor?: string,
    labelDisabledColor?: string,
  },
  raisedButton?: {
    color?: string,
    textColor?: string,
    primaryColor?: string,
    primaryTextColor?: string,
    secondaryColor?: string,
    secondaryTextColor?: string,
    disabledColor?: string,
    disabledTextColor?: string,
  },
  refreshIndicator?: {
    strokeColor?: string,
    loadingStrokeColor?: string,
  };
  slider?: {
    trackSize?: number,
    trackColor?: string,
    trackColorSelected?: string,
    handleSize?: number,
    handleSizeDisabled?: number,
    handleSizeActive?: number,
    handleColorZero?: string,
    handleFillColor?: string,
    selectionColor?: string,
    rippleColor?: string,
  },
  snackbar?: {
    textColor?: string,
    backgroundColor?: string,
    actionColor?: string,
  },
  table?: {
    backgroundColor?: string;
  };
  tableHeader?: {
    borderColor?: string;
  };
  tableHeaderColumn?: {
    textColor?: string;
    height?: number;
    spacing?: number;
  };
  tableFooter?: {
    borderColor?: string;
    textColor?: string;
  };
  tableRow?: {
    hoverColor?: string;
    stripeColor?: string;
    selectedColor?: string;
    textColor?: string;
    borderColor?: string;
    height?: number;
  };
  tableRowColumn?: {
    height?: number;
    spacing?: number;
  };
  timePicker?: {
    color?: string;
    textColor?: string;
    accentColor?: string;
    clockColor?: string;
    clockCircleColor?: string;
    headerColor?: string;
    selectColor?: string;
    selectTextColor?: string;
  };
  toggle?: {
    thumbOnColor?: string,
    thumbOffColor?: string,
    thumbDisabledColor?: string,
    thumbRequiredColor?: string,
    trackOnColor?: string,
    trackOffColor?: string,
    trackDisabledColor?: string,
    labelColor?: string,
    labelDisabledColor?: string
    trackRequiredColor?: string,
  },
  toolbar?: {
    backgroundColor?: string,
    height?: number,
    titleFontSize?: number,
    iconColor?: string,
    separatorColor?: string,
    menuHoverColor?: string,
  };
  tabs?: {
    backgroundColor?: string,
    textColor?: string,
    selectedTextColor?: string,
  };
  textField?: {
    textColor?: string;
    hintColor?: string;
    floatingLabelColor?: string;
    disabledTextColor?: string;
    errorColor?: string;
    focusColor?: string;
    backgroundColor?: string;
    borderColor?: string;
  };
}

export interface zIndex {
  menu: number;
  appBar: number;
  leftNavOverlay: number;
  leftNav: number;
  dialogOverlay: number;
  dialog: number;
  layer: number;
  popover: number;
  snackbar: number;
  tooltip: number;
}
export var zIndex: zIndex;
