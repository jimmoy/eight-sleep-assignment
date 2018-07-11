// appActions.js

import { mergeAll } from 'ramda'
import { userNames } from '../api/data'

export const APP_DATA_LOAD = 'APP/DATA_LOAD'
export const APP_CURRENT_USER = 'APP/CURRENT_USER'

export const appDataLoad = () => {
  return {
    type: APP_DATA_LOAD,
    users: userNames,
  }
}

export const appCurrentUser = (user) => {
  return {
    type: APP_CURRENT_USER,
    user
  }
}

