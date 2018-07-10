import {
  networkRequest,
  networkComplete,
} from '../actions'

export const fetchData = async (dispatch) => {
  try {
    const url = 'https://s3.amazonaws.com/eight-public/challenge/2228b530e055401f81ba37b51ff6f81d.json'
    dispatch(networkRequest())
    const response = await fetch(url)
    const json = await response.json()
    dispatch(networkComplete(json, null))
  } catch (err) {
    dispatch(networkComplete(null, err))
  }
}
