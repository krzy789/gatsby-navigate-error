import React from 'react';
// import jest from 'jest-mock';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from '../src/containers/reducers';

global.___loader = {
  enqueue: () => {},
  hovering: () => {}
}
global.__BASE_PATH__ = '/';
window.___navigate = pathname => {
  action('NavigateTo')(pathname)
};

// global["jest"] = jest;
const store = createStore(reducers);

const withThemeProvider = (Story, context) => (
  <Provider store={store}>
    <Story {...context} />
  </Provider>
);

export const decorators = [
  withThemeProvider
];
