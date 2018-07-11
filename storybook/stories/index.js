import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './Button';
import CenterView from './CenterView';
import Welcome from './Welcome';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      <Text>Hello Button</Text>
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));

// Add EightSleep project stories down here

import { HomeView } from '../../src/views/HomeView'
import { userNames } from '../../src/api/data'

class TestHomeView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: 'john'
    }
  }

  userSelect = (user) => { this.setState({ currentUser: user }) }

  render = () =>
    <HomeView {...this.props} users={userNames}
      selected={this.state.currentUser}
      onUserSelect={this.userSelect}
    />
}

const pieData1 = [
  { x: 'awake', y: 1000 },
  { x: 'light', y: 3000 },
  { x: 'deep', y: 2000 },
  { x: 'out', y: 1000 },
]

const pieData2 = [
  { x: 'awake', y: 1200 },
  { x: 'light', y: 2000 },
  { x: 'deep', y: 4000 },
  { x: 'out', y: 500 },
]

const pieData3 = [
  { x: 'awake', y: 200 },
  { x: 'light', y: 1000 },
  { x: 'deep', y: 2000 },
  { x: 'out', y: 1000 },
]

storiesOf('HomeView', module)
  .add('default', () => (
    <HomeView />
  ))
  .add('users, selected user', () => (
    <TestHomeView stagePieData={[pieData1, pieData2, pieData3]} />
  ))


