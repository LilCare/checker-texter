import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import StudentList from './src/StudentList.js';

const sampleStudents = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    'first_name': 'Student 1',
    'last_name': 'One',
    'phone_number': '+14025987648'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    'first_name': 'Student 2',
    'last_name': 'Two',
    'phone_number': '+14025987648'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    'first_name': 'Student 3',
    'last_name': 'Three',
    'phone_number': '+14025987648'
  },
];

export default class App extends Component {
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
          <StudentList students={sampleStudents}/>
        )}
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
});
