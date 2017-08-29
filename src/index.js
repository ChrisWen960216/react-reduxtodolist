import React from 'react';
import ReactDOM from 'react-dom';
//import './style/main.scss';
import MainApp from './components/main.js';
import { Provider } from 'react-redux';
import store from './components/store.js';
import registerServiceWorker from './network/registerServiceWorker';

ReactDOM.render(
  <Provider store={ store }>
    <MainApp />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
