import * as React from 'react';
import {MuiTheme} from "../styles";

interface MuiThemeProviderProps extends React.Props<MuiThemeProvider> {
  muiTheme: MuiTheme;
}

export default class MuiThemeProvider extends React.Component<MuiThemeProviderProps, {}> {
}
