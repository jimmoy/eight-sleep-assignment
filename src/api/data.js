import {
  networkRequest,
  networkComplete,
} from '../actions'

// TODO: Here's where I can do the extra credit,
// map these URLs based on configuration file data
const userDataMap = {
  jim: 'https://s3.amazonaws.com/eight-public/challenge/2228b530e055401f81ba37b51ff6f81d.json',
  john: 'https://s3.amazonaws.com/eight-public/challenge/d6c1355e38194139b8d0c870baf86365.json',
  joe: 'https://s3.amazonaws.com/eight-public/challenge/f9bf229fd19e4c799e8c19a962d73449.json',
}

export const userNames = [
  {
    id: 'jim',
    name: 'Jim',
  }, {
    id: 'john',
    name: 'John',
  }, {
    id: 'joe',
    name: 'Joe',
  }
]

export const fetchData = async (user, dispatch) => {
  try {
    const url = userDataMap[user]
    dispatch(networkRequest(user))
    const response = await fetch(url)
    const json = await response.json()
    dispatch(networkComplete(user, json, null))
  } catch (err) {
    dispatch(networkComplete(user, null, err))
  }
}
