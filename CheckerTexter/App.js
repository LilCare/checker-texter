import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import StudentList from './src/StudentList.js';
import students from './sampleData/sampleStudentData.js';

export default class App extends Component {
  state = { students: [] };

  componentDidMount() {
    this.setState({ students })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Checker Texter Grades</Text>
        <StudentList students={this.state.students}/>
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
