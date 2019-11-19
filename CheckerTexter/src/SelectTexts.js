import React, {Component} from 'react';
import { View, Alert, StyleSheet, Button } from 'react-native';

const Separator = () => {
    return <View style={styles.separator} />;
}

const Select = ({selection, callback}) => {
    console.log(selection)
    return (
        <View style={[styles.button, {backgroundColor: selection.backgroundColor[0]}]}>
            <Button
                title={selection.text[0]}
                color={selection.textColor[0]}
                onPress={() => callback()}
            />
        </View>
    );
}

class SelectTexts extends Component {
    state = {
        complete: {
            text: ["Select students with 'complete'", "Students with 'complete' selected"],
            backgroundColor: ['#99b5c9'],
            textColor: ['black'],
        },
        semiComplete: {
            text: ["Select students with 'semi-complete'",  "Students with 'semi-complete' selected"],
            backgroundColor: ['#E8AB5C'],
            textColor: ['black'],
        },
        incomplete: {
            text: ["Select students with 'incomplete'",  "Students with 'incomplete' selected"],
            backgroundColor: ['#AFBAB5'],
            textColor: ['black'],
        },
    }
    
    render() { 
        return (
          <View style={styles.container} >
              
            <Separator style={styles.separator} />
            
            <Select selection={this.state.complete} callback={() => Alert.alert('Simple Button pressed')}/>
            <Select selection={this.state.semiComplete} callback={() => Alert.alert('Simple Button pressed')}/>
            <Select selection={this.state.incomplete} callback={() => Alert.alert('Simple Button pressed')}/>
            
            <Separator style={styles.separator} />

            <View>
              <Button
                title="Press me"
                disabled
                onPress={() => Alert.alert('Cannot press this one')}
              />
            </View>
            
          </View>
        );     
    }
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 8,
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    button: {
        paddingVertical: 4,
        marginBottom: 8,
    }
  });
  
export default SelectTexts;