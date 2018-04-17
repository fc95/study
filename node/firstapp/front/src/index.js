import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory as history, Router } from 'react-router'
import routes from './routes/index';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router  history={history} routes={routes} key={Math.random()} /> ,
document.getElementById('root')
);

registerServiceWorker();
