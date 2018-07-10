import {
  networkRequest,
  networkComplete,
} from '../actions'

export const fetchData = async (dispatch) => {
  try {
    const url = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
    dispatch(networkRequest())
    const response = await fetch(url)
    const json = await response.json()
    dispatch(networkComplete(json, null))
  } catch (err) {
    dispatch(networkComplete(null, err))
  }
}
