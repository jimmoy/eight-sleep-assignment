// appSelectors.js

import { createSelector } from 'reselect'

export const selectApp = (state) => state.app

export const selectAppUsers = createSelector(
  selectApp,
  (app) => {
    return app && app.users
  }
)

export const selectAppCurrentUser = createSelector(
  selectApp,
  (app) => {
    return app && app.currentUser
  }
)

