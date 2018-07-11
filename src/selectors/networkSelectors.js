// networkSelectors.js

import { createSelector } from 'reselect'

// Selector names are assembled, roughly, camel case
// according to its dot-notation in the state tree,
// so state.network.data.response.response_code translates
// to selectNetworkDataResponseCode().

export const selectNetwork = (state) => state.network

export const selectNetworkUsers = createSelector(
  selectNetwork,
  (network) => {
    return network && network.users
  }
)
