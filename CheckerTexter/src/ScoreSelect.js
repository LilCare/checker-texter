import React, {Component} from 'react';
import {Modal, Text, TouchableOpacity, View, StyleSheet, Picker} from 'react-native';

class ScoreSelect extends Component {
  state = {
    modalVisible: false,
    selected: 'complete',
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    let scoreColor = '#99b5c9';
    if (this.state.selected === 'complete') {
      scoreColor = '#99b5c9';
    } else if (this.state.selected === 'semi-complete') {
      scoreColor = '#E8AB5C';
    } else if (this.state.selected === 'incomplete') {
      scoreColor = '#AA5D5C';
    } else {
      scoreColor = '#AFBAB5';
    }
    return (
      <View style={[styles.scoreContainer, {backgroundColor: scoreColor}]}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
        >
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
        marginTop: 22,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#afbab5', 
        // color: '#afbab5',
    },
    scoreContainer: {
        backgroundColor: '#849cad',
        backgroundColor: '#99b5c9',
        width: 135,
        alignItems: 'center',
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

export default ScoreSelect;