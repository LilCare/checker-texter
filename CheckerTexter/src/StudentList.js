import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
//import students from '../sampleData/sampleStudentData.js';

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'Student 1',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Student 2',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Student 3',
//   },
// ];

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    firstName: 'Student1',
    lastName: 'One',
    phoneNumber: '+14025987648',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    firstName: 'Student2',
    lastName: 'Two',
    phoneNumber: '+14025987648',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    firstName: 'Student3',
    lastName: 'Three',
    phoneNumber: '+14025987648',
  },
];

function Student({ firstName, lastName }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{firstName} {lastName}</Text>
    </View>
  );
}


export default function StudentList() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
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
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    width: 200,
    padding: 4,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
});
