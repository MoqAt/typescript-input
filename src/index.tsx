import * as React from 'react';
import {render} from 'react-dom';
import { Hello } from './components/Hello';
import {Content} from './components/App';
render(
  <Hello compiler='TypeScript' framework='React' />,
  document.getElementById('root')
);
render(
  <Content />,
  document.getElementById('root')
);
