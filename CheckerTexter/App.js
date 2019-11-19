import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import StudentList from './src/StudentList.js';
import Indicator from './src/ActivityIndicator.js';

class App extends Component {
  state = { students: [] };

  componentDidMount() {
    return fetch('http://localhost:19002/api/class/1')
      .then((response) => response.json())
      .then((responseJson) => this.setState({ students: responseJson }))
      .catch((error) => console.log(error));
  }

  render() {
    let readyToRender = (this.state.students.length > 0) ? true : false;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>CheckerTexter</Text>
        <View style={styles.assignmentContainer}>
          <Text style={styles.assignment}>Assignment: MVP</Text>
          <Text style={[styles.assignment, styles.date]}>Date: 11/19/19</Text>
        </View>
        {readyToRender ? (
          <StudentList students={this.state.students}/>
        ) : (
          <Indicator/>
        )}
      </View>
    );
  }
}

// <StudentList students={sampleStudents}/>

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
});

export default App;
