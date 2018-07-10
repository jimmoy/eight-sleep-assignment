// networkActions.js

import { mergeAll } from 'ramda'

export const NETWORK_DATA_REQUEST = 'NETWORK/DATA_REQUEST'
export const NETWORK_DATA_COMPLETE = 'NETWORK/DATA_COMPLETE'

export const networkRequest = () => {
  return {
    type: NETWORK_DATA_REQUEST,
  }
}

export const networkComplete = (response, error) => mergeAll([
  { type: NETWORK_DATA_COMPLETE },
  error && { error },
  response && { response },
])
