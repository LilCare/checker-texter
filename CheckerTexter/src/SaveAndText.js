import React from 'react';
import {Modal, Text, TouchableOpacity, View, StyleSheet} from 'react-native';

function SaveAndText ({visible, step, switchModal}) {
  // step can equal 'save', 'text', complete
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
            }}>
            <Text style={[styles.font, styles.select]}>{step}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
    modal: {
        marginTop: 22,
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
        fontSize: 20,
        padding: 8,
        color: '#182f40',
        fontWeight: 'bold',
    }
})

export default SaveAndText;