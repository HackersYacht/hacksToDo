import React from 'react'
import {
  View, Text, StyleSheet
} from 'react-native'

export default ({name})=>(
  <View style={styles.todo}>
    <Text style={styles.txt}>{name}</Text>
  </View>
)

const styles = StyleSheet.create({
  todo: {
    borderBottomWidth: 0.4,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    justifyContent: 'center',
  },
  txt: {
    padding: 20,
    fontSize: 20
  }
})
