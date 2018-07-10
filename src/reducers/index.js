// reducers/index.js

import { combineReducers } from 'redux'

import {
  networkReducer,
  initialState as networkInitialState
} from './networkReducer'

export const initialState = {
  network: networkInitialState,
}

const combined = combineReducers({
  network: networkReducer,
})

export const rootReducer = (state = initialState, action) => {
  return combined(state, action)
}

