// Data for HomeScreenTests

export const firstState = {
  "network": {
    "data": {
      "status": "complete",
      "response": {
        "response_code": 0,
        "results": [
          {
            "category": "Science & Nature",
            "type": "boolean",
            "difficulty": "hard",
            "question": "You can calculate Induced Voltage using: &epsilon; =-N * (d&Phi;B)/(d)",
            "correct_answer": "False",
            "incorrect_answers": [
              "True"
            ]
          }
        ]
      }
    }
  }
}

export const firstProps = {
  data: [
  ]
}

// This does nothing, the module exports the data above.

describe('home screen data success', () => {
  it('verify exported data', () => {
    expect(firstState).toBeDefined()
    expect(firstProps).toBeDefined()
  })
})

