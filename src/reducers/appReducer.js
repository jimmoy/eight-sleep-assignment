// appReducer.js
// Reducer at <root>/app
//
//   {
//     users: {
//       id: 'jim',
//       name: 'Jim',
//     },
//     currentUser: 'jim'
//   }
//

import { mergeDeepRight, path } from 'ramda'

import {
  APP_DATA_LOAD,
  APP_CURRENT_USER,
} from '../actions'

export const initialState = {
  users: [],
  currentUser: 'jim',
}

export const appReducer = (state = initialState, action) => {
  //
  // Handle all 'APP/*' actions
  //
  switch (action.type) {
    case APP_DATA_LOAD:
      return mergeDeepRight(state, {
        users: action.users
      })
    case APP_CURRENT_USER:
      return mergeDeepRight(state, {
        currentUser: action.user
      })
  }
  return state
}




