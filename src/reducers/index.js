// reducers/index.js

import { combineReducers } from 'redux'

import {
  appReducer,
  initialState as appInitialState
} from './appReducer'

import {
  networkReducer,
  initialState as networkInitialState
} from './networkReducer'

export const initialState = {
  app: appInitialState,
  network: networkInitialState,
}

const combined = combineReducers({
  app: appReducer,
  network: networkReducer,
})

export const rootReducer = (state = initialState, action) => {
  return combined(state, action)
}

