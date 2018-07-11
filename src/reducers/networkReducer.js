// networkReducer.js
// Reducer at <root>/network
//
// The network/data state has some state information as well as the precise form
// of the JSON response of the API request made to fetch data:
//
//   data: {
//     status: 'request'
//     response: {
//       response_code: 0,
//       results: [
//         { jim: { intervals: ... }}
//         { john: { intervals: ... }}
//         { joe: { intervals: ... }}
//       ]
//     }
//   }

import { mergeDeepRight, path } from 'ramda'

import {
  NETWORK_DATA_REQUEST,
  NETWORK_DATA_COMPLETE,
} from '../actions'

export const initialState = {
  users: {},
}

export const networkReducer = (state = initialState, action) => {
  //
  // Handle all 'NETWORK/*' actions
  //
  switch (action.type) {
    case NETWORK_DATA_REQUEST:
      // Nothing but the message, indicating the network
      // request has been made and now we're waiting
      return mergeDeepRight(state, {
        users: {
          [action.user]: {
            status: 'request'
          }
        },
      })
    case NETWORK_DATA_COMPLETE: {
      // Fields in this message are: {
      //   error: <string>
      //   response: <object>
      // }
      // Where presence of error is a clear statement of there
      // being a problem, while various 'response' fields are
      // going to be interpreted as I go since the API is not
      // strictly defined.
      const resp = path(['response'], action)
      const arr = path(['response', 'intervals'], action)
      if (resp && arr && (arr.length > 0)) {
        // Reality check done on network response says we're "go"
        // I could probably check on things like presence of timeseries
        return mergeDeepRight(state, {
          users: {
            [action.user]: {
              status: 'complete',
              response: resp,
            }
          }
        })
      } else {
        // TODO: need UI for error handling
        console.error('Error during ' + action.type + ': ' + JSON.stringify(action))
      }
    }
  }
  return state
}



