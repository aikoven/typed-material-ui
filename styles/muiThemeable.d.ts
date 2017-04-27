import {ComponentClass, StatelessComponent} from 'react';

import {MuiTheme} from './index';


type DecoratedComponent<P> = ComponentClass<P> | StatelessComponent<P>;


export default function muiThemeable():
  <P>(component: DecoratedComponent<P & {muiTheme: MuiTheme}>) =>
    ComponentClass<P>;
