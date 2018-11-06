import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
const axe = require('react-axe'); // tslint:disable-line
if (process.env.NODE_ENV !== 'production') {
  axe(React, ReactDOM, 1000);
}

import { App } from './app';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
