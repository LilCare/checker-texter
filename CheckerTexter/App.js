import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import StudentList from './src/StudentList.js';

const sampleStudents = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    firstName: 'Student1',
    lastName: 'One',
    phoneNumber: '+14025987648'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    firstName: 'Student2',
    lastName: 'Two',
    phoneNumber: '+14025987648'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    firstName: 'Student3',
    lastName: 'Three',
    phoneNumber: '+14025987648'
  },
];

export default class App extends Component {
  state = { students: [] };

  componentDidMount() {
    this.setState({ students: sampleStudents })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>CheckerTexter</Text>
        <StudentList students={this.state.students}/>
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
    fontSize: 22,
    fontWeight: 'bold',
    alignContent: 'center',
    backgroundColor: '#182f40', 
    color: '#afbab5',
  }
});
