import React from 'react'
import {
  View, Text, StyleSheet, Modal
} from 'react-native'

export default ({modalVisible, children})=>(
  <View >
    <Modal animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            alert('Modal has been closed.');
          }}
        >
      <View style={styles.container}>
        {children}
      </View>
    </Modal>
  </View>
)

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    marginTop: 150,
    padding: 20,
    backgroundColor: '#E7E7E7',
    borderRadius: 10
  },
})
