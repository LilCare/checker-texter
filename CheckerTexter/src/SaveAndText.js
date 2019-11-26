import React from 'react';
import {Modal, Text, TouchableOpacity, View, StyleSheet} from 'react-native';

function SaveAndText ({visible, step, switchModal, saveScores, textFamilies, goBack}) {
  // step can equal 'save', 'text', complete
  let stepFunction = () => {};
  let TextDisplay;
  let stepForwardText = '';

  if (step === 'save') {
    stepFunction = saveScores;
    stepForwardText = 'Save scores and continue';
  } else if (step === 'text') {
    stepFunction = textFamilies;
    stepForwardText = 'Text families for selected scores';
    TextDisplay = () => (
      <View style={styles.textDisplay}>
        <Text style={styles.displayLabel}>Below is the outline of the message that will be sent to each family:</Text>
        <View style={styles.textContainer}>
          <Text style={styles.font}>Just a heads up: [STUDENT FIRST NAME]'s homework is [STUDENT SCORE]. Thanks for checking in on them later!</Text>
        </View>
      </View>
    );
  } else {
    stepForwardText = 'Finished texting families';
  }

  return (
    <View >
      <Modal
        animationType="fade"
        transparent={false}
        visible={visible}
        presentationStyle='fullScreen'
      >
        <View style={{marginTop: 22}}>
          <View style={styles.modal}>

            {TextDisplay && <TextDisplay/>}

            <TouchableOpacity
              onPress={() => {
                  switchModal();
                  stepFunction();
              }}
              style={styles.stepForward}
              >
              <Text style={[styles.font, styles.select]}>{stepForwardText}</Text>
            </TouchableOpacity>

            {(step === 'save') && (
              <TouchableOpacity
                onPress={() => {
                    goBack();
                }}
                style={styles.goBack}
                >
                <Text style={[styles.font, styles.back]}>Go back</Text>
              </TouchableOpacity>
            )}

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
    textDisplay: {
      margin: 20,
    },
    displayLabel: {
      fontSize: 20,
      color: '#182f40',
      alignContent: 'center',
      letterSpacing: 1.5,
      marginBottom: 10,
    },
    textContainer:{
      backgroundColor: 'white',
      borderRadius: 5,
      borderColor:'#182f40',
      borderWidth: 1,
      height: 125,
    },
    font: {
      fontSize: 16,
      letterSpacing: 1.5,
      padding: 8,
    },
    select: {
      fontSize: 18,
      padding: 16,
      color: '#182f40',
      color: '#afbab5',
      fontWeight: 'bold',
    },
    back: {
      padding: 8,
      fontSize: 14,
      color: '#afbab5',
      fontWeight: 'bold',
    },
    stepForward: {
      // padding: 8,
      fontSize: 18,
      alignContent: 'center',
      backgroundColor: '#182f40',  
      color: '#afbab5',
      borderRadius: 5,
    },
    goBack: {
      marginTop: 8,
      alignContent: 'center',
      backgroundColor: '#182f40',  
      borderRadius: 5,
    }
})

export default SaveAndText;