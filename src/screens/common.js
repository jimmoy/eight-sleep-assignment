// screens/common.js

import React, { Component } from 'react'

// This class has the navigation option that applies to all screens

export class BaseScreen extends Component {

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)
  }
}
