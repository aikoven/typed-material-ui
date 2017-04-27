export interface ZIndex {
  menu: number;
  appBar: number;
  drawerOverlay: number;
  drawer: number;
  dialogOverlay: number;
  dialog: number;
  layer: number;
  popover: number;
  snackbar: number;
  tooltip: number;
}

declare const zIndex: ZIndex;
export default zIndex;
