// HomeScreen.js

import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { path } from 'ramda'

import { fetchData } from '../api'
import { BaseScreen } from './common'
import { HomeView } from '../views'
import {
  selectNetworkDataReady,
  selectNetworkDataResponseResults
} from '../selectors'

class HomeComponent extends BaseScreen {

  // Ensure BaseScreen initialization is complete
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.reset()
  }

  // Everything visual is inside HomeView
  render = () => <HomeView {...this.props} />
}

// Screen-specific selectors

const selectDisplayData = createSelector(
  selectNetworkDataReady,
  selectNetworkDataResponseResults,
  (ready, results) => {
    return ready ? results : []
  }
)

export const mapStateToProps = (state, ownProps) => {
  const results = {
    data: selectDisplayData(state),
  }
  return results
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    reset: () => fetchData(dispatch),
    onClick: () => {
      console.log('HomeScreen: onClick')
    }
  }
}

export const HomeScreen = connect(
  mapStateToProps,
  mapDispatchToProps
) (HomeComponent)
