import React, {Component} from 'react';
import { View, Alert, StyleSheet, Button } from 'react-native';

const Separator = () => {
    return <View style={styles.separator} />;
}

const Select = ({selection, callback}) => {
    return (
        <View style={[styles.button, {backgroundColor: selection.backgroundColor[0]}]}>
            <Button
                title={selection.text[0]}
                color={selection.textColor[0]}
                onPress={() => callback()}
                style={{letterSpacing: 1.5}}
            />
        </View>
    );
}

class SelectTexts extends Component {
    state = {
        complete: {
            text: ["Select students with 'complete'", "Students with 'complete' selected"],
            backgroundColor: ['#D9E4EB', '#99b5c9'],
            textColor: ['#5F6060', 'black'],
            selected: false,
        },
        semiComplete: {
            text: ["Select students with 'semi-complete'",  "Students with 'semi-complete' selected"],
            backgroundColor: ['#F6E0C3', '#E8AB5C'],
            textColor: ['#5F6060', 'black'],
            selected: false,
        },
        incomplete: {
            text: ["Select students with 'incomplete'",  "Students with 'incomplete' selected"],
            backgroundColor: ['#E0C4C3', '#AA5D5C'],
            textColor: ['#5F6060', 'black'],
            selected: false,
        },
    }

    select(value) {
        let state = this.state[value];
        
        // Pop off each value to shift to front as new styling
        const newText = state.text.pop();
        const newBackgroundColor = state.backgroundColor.pop();
        const newTextColor = state.textColor.pop();

        // Shift each value to the front and switch selected to opposite
        state.text.unshift(newText);
        state.backgroundColor.unshift(newBackgroundColor);
        state.textColor.unshift(newTextColor);
        state.selected = !state.selected;

        // Store state for passed value as newState and set newState
        const newState = {};
        newState[value] = state;
        this.setState(newState);
    }
    
    render() { 
        return (
          <View style={styles.container} >

            <Separator style={styles.separator} />
            
            <Select selection={this.state.complete} callback={() => this.select('complete')}/>
            <Select selection={this.state.semiComplete} callback={() => this.select('semiComplete')}/>
            <Select selection={this.state.incomplete} callback={() => this.select('incomplete')}/>
            
            <Separator style={styles.separator} />

            <View style={styles.text}>
              <Button
                title="Save Scores and Text"
                color='#afbab5'
                onPress={() => {
                    this.props.saveScores();
                    Alert.alert('Save and text');
                }}
                style={{ letterSpacing: 2 }}
              />
            </View>
            
          </View>
        );     
    }
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        //marginVertical: 8,
        marginBottom: 22
    },
    separator: {
        marginTop: 8,
        marginBottom: 16,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    button: {
        paddingVertical: 4,
        marginHorizontal: 12,
        marginBottom: 8,
    },
    text: {
        padding: 8,
        fontSize: 20,
        alignContent: 'center',
        backgroundColor: '#182f40',   
      },
  });
  
export default SelectTexts;