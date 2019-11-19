import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import ScoreSelect from './ScoreSelect.js';
import SelectTexts from './SelectTexts.js';
import Indicator from './ActivityIndicator.js';

function Student({ firstName, lastName, index, updateScores }) {
  return (
    <View style={styles.item}>
      <Text style={styles.student}>{firstName} {lastName}</Text>
      <ScoreSelect style={styles.score} index={index} updateScores={updateScores} />
    </View>
  );
}

class StudentList extends Component {
  state = { students: [] };

  componentDidMount() {
    return fetch('http://localhost:19002/api/class/1')
      .then((response) => response.json())
      .then((responseJson) => this.setState({ students: responseJson }))
      .catch((error) => console.log(error));
  }

  updateScores(studentIndex, score) {
    this.setState((oldState) => {
      oldState.students[studentIndex].score = score;
      return oldState;
    });
  }

  saveScores(assignmentId) {
    fetch('http://localhost:19002/api/assignment/1/scores', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }

  textFamilies(toText) {

  }
  render() {
    let readyToRender = (this.state.students.length > 0) ? true : false;
    return (
      <SafeAreaView style={styles.container}>
        {readyToRender ? (
          <FlatList
            data={this.state.students}
            renderItem={({ item, index }) => 
              <Student firstName={item['first_name']} lastName={item['last_name']} index={index} updateScores={this.updateScores.bind(this)} />
            }
            keyExtractor={item => item.id.toString()}
            ListFooterComponent={SelectTexts}
          />
        ) : (
          <Indicator/>
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
  },
  item: {
    backgroundColor: '#EFF2C0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    marginVertical: 8,
  },
  student: {
    fontSize: 16,
    letterSpacing: 2,
    flex: .8,
    marginHorizontal: 4,
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
  score: {
    flex: .2,
  }
});

export default StudentList;