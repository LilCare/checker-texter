import React, { Component } from 'react';
import { View, StyleSheet, Picker } from 'react-native';

export default class ScoreSelect extends Component {
    state = {selected: 'complete'};

    render() {
        return (
            <View style={styles.item}>
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
            </View>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2cc',
        fontWeight: 'bold',
        width: 75,
        padding: 4,
      },
})