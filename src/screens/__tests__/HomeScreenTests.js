import { mapStateToProps } from '../HomeScreen'
import { initialState as appInitialState } from '../../reducers'
import { firstState, firstProps } from './home-screen-data-success-state'

describe('home screen mapStateToProps', () => {
  it('props for default state tree', () => {
    const expected = {
      data: [],
    }
    expect(mapStateToProps(appInitialState, {})).toEqual(expected)
  })

  it('props for first question', () => {
    const props = {
      data: [{
        "category": "Science & Nature",
        "correct_answer": "False",
        "difficulty": "hard",
        "incorrect_answers": [
          "True"
        ],
        "question": "You can calculate Induced Voltage using: &epsilon; =-N * (d&Phi;B)/(d)",
        "type": "boolean"
      }]
    }
		expect(mapStateToProps(firstState, {})).toEqual(props)
  })
})
