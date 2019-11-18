import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';

function Student({ firstName, lastName }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{firstName} {lastName}</Text>
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
