// topLevel.js

import { createStackNavigator } from 'react-navigation'
import { HomeScreen } from '../screens'

export const TopLevelStackNavigator = createStackNavigator(
  {
    home: HomeScreen,
  },
  {
    initialRouteName: 'home'
  }
)
