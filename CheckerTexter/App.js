import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import StudentList from './src/StudentList.js';
import Indicator from './src/ActivityIndicator.js';
import SelectTexts from './src/SelectTexts.js';

class App extends Component {

  render() {
    
    return (
      <View style={styles.container}>
        <Text style={styles.title}>CheckerTexter</Text>
        <View style={styles.assignmentContainer}>
          <Text style={styles.assignment}>Assignment: MVP</Text>
          <Text style={[styles.assignment, styles.date]}>Due Date: 11/19/19</Text>
        </View>
        <StudentList />   
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: Constants.statusBarHeight,
    padding: 8,
    letterSpacing: 3,
    fontSize: 20,
    fontWeight: 'bold',
    alignContent: 'center',
    backgroundColor: '#182f40', 
    color: '#afbab5',
  },
  assignmentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  assignment: {
    fontSize: 16,
    letterSpacing: 1,
    fontWeight: 'bold',
  },
  date: {
    color: '#707774',
  }
});

export default App;
