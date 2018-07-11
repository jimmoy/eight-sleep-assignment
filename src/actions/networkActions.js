// networkActions.js

import { mergeAll } from 'ramda'

export const NETWORK_DATA_REQUEST = 'NETWORK/DATA_REQUEST'
export const NETWORK_DATA_COMPLETE = 'NETWORK/DATA_COMPLETE'

export const networkRequest = (user) => {
  return {
    type: NETWORK_DATA_REQUEST,
    user,
  }
}

export const networkComplete = (user, response, error) => mergeAll([
  { type: NETWORK_DATA_COMPLETE, user },
  error && { error },
  response && { response },
])
