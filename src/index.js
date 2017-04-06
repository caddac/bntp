import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import { initialize } from './actions';
import reducers from './reducers';
import { networkService } from './services';

import App from './containers/App';

import {
  chromePageRepository,
  folderPreferenceRepository,
  themeRepository,
  themePreferenceRepository,
  visibilityRepository,
} from './repositories';

import './index.css';

const initialState = () => {
  const chromePageFolders = chromePageRepository.findFolders();
  const folderPreference = folderPreferenceRepository.get();
  const selectedTheme = themePreferenceRepository.getOrDefault();
  const themes = themeRepository.findAll();
  const visibilities = visibilityRepository.findAll();
  const online = networkService.isOnline();
  return {
    chromePageFolders,
    folderPreference,
    selectedTheme,
    themes,
    visibilities,
    online,
  };
};

const store = createStore(
  reducers,
  initialState(),
  applyMiddleware(thunk, createLogger())
);

// Apply theme on the root element
const renderTheme = () => {
  const { selectedTheme } = store.getState();
  document.documentElement.className = `Theme__${selectedTheme.id}`;
};

// Prevent theme-less white page on loading
renderTheme();

store.subscribe(renderTheme);
store.subscribe(() => {
  const { folderPreference, selectedTheme, visibilities } = store.getState();
  folderPreferenceRepository.save(folderPreference);
  themePreferenceRepository.save(selectedTheme);
  visibilityRepository.save(visibilities);
});

store.dispatch(initialize());

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
