import * as net from '../networkActions'

describe('network actions', () => {
  it('makes a network data request action', () => {
    const screen = 'home'
    const expected = {
      type: net.NETWORK_DATA_REQUEST,
    }
    expect(net.networkRequest()).toEqual(expected)
  })
  it('makes a network data completion action', () => {
    const expected = {
      type: net.NETWORK_DATA_COMPLETE,
      response: {
        hello: 'world',
      }
    }
    expect(net.networkComplete({ hello: 'world' })).toEqual(expected)
  })
})
