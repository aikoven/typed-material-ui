export interface Spacing {
  iconSize?: number;

  desktopGutter?: number;
  desktopGutterMore?: number;
  desktopGutterLess?: number;
  desktopGutterMini?: number;
  desktopKeylineIncrement?: number;
  desktopDropDownMenuItemHeight?: number;
  desktopDropDownMenuFontSize?: number;
  desktopLeftNavMenuItemHeight?: number;
  desktopSubheaderHeight?: number;
  desktopToolbarHeight?: number;
}


declare const spacing: Spacing;
export default spacing;
