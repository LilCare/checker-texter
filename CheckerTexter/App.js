import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import StudentList from './src/StudentList.js';
import Indicator from './src/ActivityIndicator.js';
import Assignment from './src/Assignment.js';

class App extends Component {
  state = {
    modalVisible: true,
    assignment: {
      title: '',
      date: '11/19/19',
    },
  }

  setModalInvisible(invisible) {
    this.setState({modalVisible: invisible});
  }

  setTitle(title) {
    console.log(title);
    let assignment = this.state.assignment;
    assignment.title = title;
    this.setState({ assignment });
  }

  setDate(date) {
    console.log(date)
    // let assignment = this.state.assignment;
    // assignment.date = date;
    // this.setState({ assignment });
  }

  render() {
    
    return (
      <View style={styles.container}>
        <Assignment
          setModalInvisible={this.setModalInvisible.bind(this)}
          setTitle={this.setTitle.bind(this)}
          setDate={this.setDate.bind(this)}
          visible={this.state.modalVisible}
          assignment={this.state.assignment}
        />
        <Text style={styles.title}>CheckerTexter</Text>
        <View style={styles.assignmentContainer}>
          <Text style={styles.assignment}>{this.state.assignment.title}</Text>
          <Text style={[styles.assignment, styles.date]}>Due Date: {this.state.assignment.date}</Text>
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
