// HomeScreen.js

import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { map, merge, path, prop, reduce } from 'ramda'

import {
  appCurrentUser,
  appDataLoad,
} from '../actions'
import { fetchData } from '../api'
import { BaseScreen } from './common'
import { HomeView } from '../views'
import {
  selectAppUsers,
  selectAppCurrentUser,
  selectNetworkUsers,
} from '../selectors'

// This is the smart component counterpart to HomeView
//
class HomeComponent extends BaseScreen {

  // Ensure BaseScreen initialization is complete
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.reset()
  }

  userSelect = (user) => this.props.setCurrentUser(user)

  // Everything visual is inside HomeView
  render() {
    return (
      <HomeView
        selected={this.props.currentUser}
        users={this.props.users}
        onUserSelect={this.userSelect}
        stagePieData={this.props.stagePieData}
      />
    )
  }
}

// Screen-specific selectors

const selectDisplayPieData =  createSelector(
  selectAppCurrentUser,
  selectNetworkUsers,
  (currentUser, users) => {
    // Memoize this data munging of the network API results
    // and the format used by the chart
    const intervals = path([currentUser, 'response', 'intervals'], users)
    const stageData = intervals ? stageDataForPieChart(intervals) : []
    return stageData && pieChartData(stageData)
  }
)

const stageDataForPieChart = (intervals) => {

  const stageAccum = (prev, val) => merge(prev, {
    // Accumulate existing value, or set for the first time
    // val will be { stage: 'deep', duration: 1000 }
    [val.stage]: (val.stage in prev)
      ? prev[val.stage] + val.duration
      : val.duration
  })

  // Sum the individual stage values into a single object with all of
  // the stage names and their summed values
  const sumStageValues = reduce(stageAccum, {})

  // Array of stage data for each session
  const stages = map(prop('stages'), intervals)

  return map(sumStageValues, stages)
}

const makeCap = (string) => string.charAt(0).toUpperCase() + string.slice(1)

// Convert stageDataForPieChart() output into the format
// consumable by VictoryPie chart

const pieChartData = (stageData) => stageData.map(stageObj => {
  const stageAccum = (prev, val) => {
    return prev.concat([
      { x: makeCap(val), y: stageObj[val] }
    ])
  }
  return Object.keys(stageObj).reduce(stageAccum, [])
})

export const mapStateToProps = (state, ownProps) => {
  const currentUser = selectAppCurrentUser(state)
  const results = {
    currentUser,
    users: selectAppUsers(state),
    stagePieData: selectDisplayPieData(state),
  }
  return results
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    reset: () => {
      dispatch(appDataLoad())
      fetchData('jim', dispatch)
      fetchData('john', dispatch)
      fetchData('joe', dispatch)
    },
    setCurrentUser: (user) => {
      dispatch(appCurrentUser(user));
    },
  }
}

export const HomeScreen = connect(
  mapStateToProps,
  mapDispatchToProps
) (HomeComponent)
