import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import {
  initializeTheme,
  initializeListeners,
  initializeVisibility,
} from './actions';
import reducers from './reducers';
import App from './containers/App';

import './index.css';

const store = createStore(
  reducers,
  applyMiddleware(thunk, createLogger())
);

store.dispatch(initializeTheme());
store.dispatch(initializeVisibility());
store.dispatch(initializeListeners());

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
