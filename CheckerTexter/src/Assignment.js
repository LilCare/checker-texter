import React from 'react';
import { Modal, Text, TouchableOpacity, View, StyleSheet, DatePickerIOS, TextInput } from 'react-native';

function Assignment ({setModalInvisible, setTitle, setDate, visible, assignment}) {
 
  return (
    <View >
      <Modal
        animationType="none"
        transparent={false}
        visible={visible}
        presentationStyle="fullScreen"
      >
        <View style={{ marginTop: 22 }}>
          <View style={styles.modal}>

            <Text>Enter information about your assignment.</Text>
            
            <Text style={styles.font}>Title:</Text>
            <TextInput
              style={[styles.font, styles.titleInput]}
              placeholder="Assignment Title"
              onChange={ e => setTitle(e.nativeEvent.text) }
              value={assignment.title}
            />

            <TouchableOpacity
              onPress={() => setModalInvisible(false)} 
              style={styles.createAssignment}
            >
              <Text style={[ styles.select ]}>Create Assignment</Text>
            </TouchableOpacity>

          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
    modal: {
        marginTop: 20,
        height: 800,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#afbab5', 
        alignContent:'stretch',
        // color: '#afbab5',
    },
    font: {
        fontSize: 18,
        letterSpacing: 1.5,
        padding: 8,
    },
    select: {
        fontSize: 18,
        padding: 16,
        letterSpacing: 1.5,
        color: '#182f40',
        color: '#afbab5',
        fontWeight: 'bold',
    },
    titleInput: {
      padding: 10,
      borderColor: 'gray',
      borderWidth: 1,
      backgroundColor: 'white',
      width: 350,
      marginBottom: 16,
    },
    createAssignment: {
        marginTop: 8,
        alignContent: 'center',
        backgroundColor: '#182f40',  
        borderRadius: 5,
    },

})

export default Assignment;
