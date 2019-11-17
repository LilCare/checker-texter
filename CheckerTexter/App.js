import React, { Component } from 'react';
import StudentList from './src/StudentList.js';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
  state = { students: [] };

  componentDidMount() {
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Checker Texter Grades</Text>
        <StudentList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
