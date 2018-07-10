// index.js

import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { TopLevelStackNavigator } from './navigators'
import { rootReducer } from './reducers'

const theReducer = createStore(rootReducer) 

export const App = () =>
  <Provider store={theReducer}>
    <TopLevelStackNavigator/>
  </Provider>


// <WarningsWorkaround>
//   Some warning issues in recent versions of React Native:
//   https://stackoverflow.com/questions/49789150/
//   https://github.com/facebook/react-native/pull/19880
//
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(
  ['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader', 'Class RCTCxxModule was not exported']);
//
// </WarningsWorkaround>
