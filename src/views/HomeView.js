// HomeView.js

import React, { Component } from 'react'

import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  helloContainer: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hello: {
    fontSize: 18,
  },
  button: {
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
  },
})

export const HomeView  = ({ data, onClick }) =>
  <View style={styles.root}>
    <View style={styles.helloContainer}>
      <Text style={styles.hello}>
        { (data && data.length > 0)
          ? `Done, received ${data.length} results`
          : 'Network request...'
        }
      </Text>
    </View>
    <TouchableOpacity onPress={onClick}>
      <Text style={styles.button}>Button</Text>
    </TouchableOpacity>
  </View>
