import { initialState, networkReducer as reducer } from '../networkReducer'
import * as net from '../../actions/networkActions'
import { merge } from 'ramda'

describe('network reducer', () => {

  it('returns initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('returns successful state', () => {
    const testCase = reducer(initialState, {
      type: net.NETWORK_DATA_REQUEST,
    })
    const expected = {
      data: {
        status: 'request'
      },
    }
    expect(testCase).toEqual(expected)
  })

  it('returns error state', () => {
  })
})
