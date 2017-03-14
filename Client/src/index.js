import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App.js';

import allReducers from './reducers/index';

const store = createStore(allReducers);



ReactDom.render(<Provider store = {store}>
  <App />
  </Provider>, document.getElementById('root'));
