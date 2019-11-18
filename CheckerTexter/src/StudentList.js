import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import ScoreSelect2 from './ScoreSelect2.js';

function Student({ firstName, lastName }) {
  return (
    <View style={styles.item}>
      <Text style={styles.student}>{firstName} {lastName}</Text>
      <ScoreSelect2 style={styles.score}/>
    </View>
  );
}

export default function StudentList(props) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={props.students}
        renderItem={({ item }) => 
          <Student firstName={item.firstName} lastName={item.lastName} />
        }
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
  },
  item: {
    backgroundColor: '#81ccb0',
    backgroundColor: '#b3cc81',
    backgroundColor: '#e8eda6',
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
