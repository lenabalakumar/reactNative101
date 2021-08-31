/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './ReduxImplementation/Counter/counterSlice';
import {RecoilRoot} from 'recoil';

const RNRedux = () => (
  <Provider store={store}>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
