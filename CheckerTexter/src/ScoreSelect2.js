import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert, StyleSheet, Picker} from 'react-native';

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
      <View style={styles.item}>
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
                style={{height: 50, width: 100}}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({selected: itemValue})
                }>

                <Picker.Item label="Complete" value="complete" />
                <Picker.Item label="Unfinished" value="unfinished" />
                <Picker.Item label="Incomplete" value="incomplete" />
                <Picker.Item label="Absent" value="absent" />

              </Picker>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>{this.state.selected}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    picker: {
        backgroundColor: '#f9c2cc',
        fontWeight: 'bold',
        width: 75,
        padding: 4,
    },
    item: {
        backgroundColor: '#bbc4c0',
        padding: 4,
    },
})

export default ScoreSelect2;