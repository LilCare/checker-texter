import React from 'react';
import {Modal, Text, TouchableOpacity, View, StyleSheet} from 'react-native';

function SaveAndText ({visible, step, switchModal, saveScores, textFamilies, goBack}) {
  // step can equal 'save', 'text', complete
  console.log('step');
  let stepFunction = () => {};
  let stepForwardText = '';
  if (step === 'save') {
    stepFunction = saveScores;
    stepForwardText = 'Save scores and continue';
  } else if (step === 'text') {
    stepFunction = textFamilies;
    stepForwardText = 'Text families for selected scores';
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

              <TouchableOpacity
                onPress={() => {
                    switchModal();
                    stepFunction();
                }}
                style={styles.stepForward}
                >
                <Text style={[styles.font, styles.select]}>{stepForwardText}</Text>
              </TouchableOpacity>
             
            {(step === 'save' || step === 'text') && (
              <TouchableOpacity
                onPress={() => {
                    goBack();
                }}
                style={styles.goBack}
                >
                <Text style={[styles.font, styles.select]}>Go back</Text>
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
    font: {
        fontSize: 14,
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
        fontSize: 18,
        color: '#afbab5',
        fontWeight: 'bold',
    },
    stepForward: {
        padding: 16,
        fontSize: 20,
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