import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainApp from './components/main.js';
import { Provider } from 'react-redux';
import store from './components/todos/store.js';
import registerServiceWorker from './network/registerServiceWorker';

ReactDOM.render(
  <Provider store={ store }>
    <MainApp />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
