import React, {Component} from 'react';
import {Modal, Text, TouchableOpacity, View, Alert, StyleSheet, Picker} from 'react-native';

class ScoreSelect2 extends Component {
  state = {
    modalVisible: false,
    selected: 'complete',
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={styles.scoreContainer}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onDismiss={() => {
            Alert.alert(`Selected "${this.state.selected}"`);
          }}>
          <View style={{marginTop: 22}}>
            <View style={styles.picker}>     
              <Picker
                selectedValue={this.state.selected}
                style={{width: 100, justifyContent: 'flex-start'}}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({selected: itemValue})
                }>

                <Picker.Item label="Complete" value="complete" />
                <Picker.Item label="Semi-complete" value="semi-complete" />
                <Picker.Item label="Incomplete" value="incomplete" />
                <Picker.Item label="Absent" value="absent" />

              </Picker>

              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={[styles.font, styles.select]}>Done with selection</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <TouchableOpacity
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text style={styles.font}>{this.state.selected}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    picker: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#afbab5', 
        // color: '#afbab5',
    },
    scoreContainer: {
        backgroundColor: '#849cad',
        backgroundColor: '#99b5c9',
    },
    font: {
        fontSize: 14,
        letterSpacing: 1.5,
        padding: 8,

    },
    select: {
        fontSize: 20,
        padding: 8,
        color: '#182f40',
        fontWeight: 'bold',
    }
})

export default ScoreSelect2;