import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment';
import Constants from 'expo-constants';
import StudentList from './src/StudentList.js';
import Indicator from './src/ActivityIndicator.js';
import Assignment from './src/Assignment.js';

class App extends Component {
  state = {
    modalVisible: true,
    assignment: {
      title: '',
      date: moment().format('MM/DD/YY'),
      id: 0,
    },
  }

  setModalInvisible(invisible) {
    this.setState({modalVisible: invisible});
  }

  setTitleAndDate(title, date) {
    let assignment = this.state.assignment;
    const assignmentDate = moment(date).format('MM/DD/YY');
    assignment.title = title;
    assignment.date = assignmentDate;
    this.setState({ assignment });
  }

  setId(id) {
    let assignment = this.state.assignment;
    assignment.id = id;
    this.setState({ id })
  }

  componentDidMount() {
    return fetch('http://localhost:19002/api/class/1/assignment', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.assignment),
    })
      .then( (response) => response.json() )
      .then( (responseJson) => {
        let assignment = this.state.assignment;
        assignment.id = responseJson.id;
        this.setState({ assignment })
      })
      .catch( (err)=> console.log('err from response: ', err) );
  }

  render() {
    
    return (
      <View style={styles.container}>
        <Assignment
          setModalInvisible={this.setModalInvisible.bind(this)}
          setTitleAndDate={this.setTitleAndDate.bind(this)}
          visible={this.state.modalVisible}
        />
        <Text style={styles.title}>CheckerTexter</Text>
        <View style={styles.assignmentContainer}>
          <Text style={styles.assignment}>{this.state.assignment.title}</Text>
          <Text style={[styles.assignment, styles.date]}>Due Date: {this.state.assignment.date}</Text>
        </View>
        <StudentList assignmentId={this.state.assignment.id} />   
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
