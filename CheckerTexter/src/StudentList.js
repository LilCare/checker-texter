import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import ScoreSelect from './ScoreSelect.js';
import SelectTexts from './SelectTexts.js';

function Student({ firstName, lastName }) {
  return (
    <View style={styles.item}>
      <Text style={styles.student}>{firstName} {lastName}</Text>
      <ScoreSelect style={styles.score}/>
    </View>
  );
}

export default function StudentList(props) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={props.students}
        renderItem={({ item }) => 
          <Student firstName={item['first_name']} lastName={item['last_name']} />
        }
        keyExtractor={item => item.id.toString()}
        ListFooterComponent={SelectTexts}
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
