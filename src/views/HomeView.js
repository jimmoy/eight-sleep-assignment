// HomeView.js

import React, { Component } from 'react'

import {
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native'

import {
  VictoryPie,
} from 'victory-native'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#e9e9ef',
  },
  userContainer: {
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // backgroundColor: '#ee8888',
  },
  selectedUser: {
    backgroundColor: '#88dd88',
  },
  buttonContainer: {
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
  },
  dataContainer: {
    // backgroundColor: '#88ee88',
  },
  stagePieHeadingContainer: {
    width: '100%',
    // backgroundColor: '#ddeedd',
  },
  stagePieHeading: {
    // backgroundColor: '#ee8888',
    paddingTop: 20,
    paddingHorizontal: 20,
    fontSize: 18,
  },
  stagePieChart: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: '#8888ee',
  },
})

const userSelect = (user, onSelect) => () => {
  onSelect(user.id)
}

const UserSelector  = ({ selected, users, onSelect }) =>
  <View style={styles.userContainer}>
    {users && users.map((user) => {
      const highlightStyle = (selected === user.id) ? styles.selectedUser : {}
      return (
        <View style={[styles.buttonContainer, highlightStyle]} key={user.id}>
          <TouchableOpacity onPress={userSelect(user, onSelect)}>
            <Text style={styles.buttonText}>{user.name}</Text>
          </TouchableOpacity>
        </View>
      )
    })}
  </View>

export const HomeView  = ({ selected, users, onUserSelect, stagePieData }) =>
  <View style={styles.root}>
    <UserSelector selected={selected} users={users} onSelect={onUserSelect} />
    <View style={styles.dataContainer}>
      <ScrollView>
        {stagePieData && stagePieData.map((data, index) => {
          return (
            <View style={styles.stagePieChart} key={`data-${index}`}>
              <View style={styles.stagePieHeadingContainer}>
                <Text style={styles.stagePieHeading}>Session #{index+1}</Text>
              </View>
              <VictoryPie height={300} data={data} />
            </View>
          )
        })}
      </ScrollView>
    </View>
  </View>
