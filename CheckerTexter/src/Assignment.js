import React, { Component } from 'react';
import { Modal, Text, TouchableOpacity, View, StyleSheet, DatePickerIOS, TextInput } from 'react-native';

class Assignment extends Component {
  state = {
    title: '',
    date: new Date(),
  }
  
  render() {
    return (
      <View >
        <Modal
          animationType="none"
          transparent={false}
          visible={this.props.visible}
          presentationStyle="fullScreen"
        >
          <View style={{ marginTop: 22 }}>
            <View style={styles.modal}>
  
              <Text style={styles.directions}>Enter the title and date for the assignment</Text>
              
              <TextInput
                style={[styles.font, styles.titleInput]}
                placeholder="Assignment Title"
                onChange={ (e) => this.setState({title: e.nativeEvent.text}) }
                value={this.state.title}
              />
  
              <DatePickerIOS
                style={[styles.font, styles.dateInput]}
                mode="date"
                date={this.state.date}
                onDateChange={ e => this.setState({date: e}) }
              />
  
              <TouchableOpacity
                onPress={() => { this.props.setModalInvisible(false); this.props.setTitleAndDate(this.state.title, this.state.date) }} 
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
}

const styles = StyleSheet.create({
  modal: {
    marginTop: 20,
    height: 800,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#afbab5', 
    backgroundColor: 'white', 
    alignContent:'stretch',
    // color: '#afbab5',
  },
  directions: {
    color: '#182f40',
    fontSize: 26,
    letterSpacing: 1.5,
    textAlign: 'center',
    marginBottom: 60,
    width: 300
  },
  font: {
    color: '#182f40',
    fontSize: 18,
    letterSpacing: 1.5,
    padding: 8,
  },
  label: {
    alignContent: 'flex-start',
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
    borderColor: '#182f40',
    borderWidth: 1,
    borderRadius: 2,
    backgroundColor: 'white',
    width: 300,
    marginBottom: 16,
  },
  dateInput: {
    backgroundColor: 'white',
    width: 300,
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
