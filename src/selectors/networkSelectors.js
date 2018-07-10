// networkSelectors.js

import { createSelector } from 'reselect'

// Selector names are assembled, roughly, camel case
// according to its dot-notation in the state tree,
// so state.network.data.response.response_code translates
// to selectNetworkDataResponseCode().

export const selectNetwork = (state) => state.network

export const selectNetworkData = createSelector(
  selectNetwork,
  (network) => {
    return network && network.data
  }
)

export const selectNetworkDataStatus = createSelector(
  selectNetworkData,
  (network) => {
    return network && network.status
  }
)

export const selectNetworkDataResponse = createSelector(
  selectNetworkData,
  (network) => {
    return network && network.response
  }
)

export const selectNetworkDataResponseCode = createSelector(
  selectNetworkDataResponse,
  (response) => {
    return response && response.response_code
  }
)

export const selectNetworkDataResponseResults = createSelector(
  selectNetworkDataResponse,
  (response) => {
    return response && response.results
  }
)

// Note the name of this selector is at the same level
// as its dependent selectors. Which could be confused
// with a 'ready' node in the state tree. This works
// for me, because for all we know, 'ready' is just another
// field on the 'data' node, but here it's a function
// of other values.

export const selectNetworkDataReady = createSelector(
  selectNetworkDataStatus,
  selectNetworkDataResponseCode,
  selectNetworkDataResponseResults,
  (status, code, results) => {
    return status === 'complete'
      && code === 0
      && results
      && results.length > 0
  }
)
