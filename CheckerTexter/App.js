import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import StudentList from './src/StudentList.js';
//import sampleStudents from './sampleData/sampleStudentData.js';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Student 1',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Student 2',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Student 3',
  },
];

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
    let studentListReadyToRender = (this.state.students.length > 0) ? true : false;

    return (
      <View style={styles.container}>
        <Text>Checker Texter Grades</Text>
        {studentListReadyToRender ? (
          <StudentList students={this.state.students}/>
        ): (
          <StudentList students={DATA}/>
        )}
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
