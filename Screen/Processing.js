import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProcessingItem from './Component/ProcessingItem'

const Processing = () => {
  return (
    <View style={styles.container}>
      <ProcessingItem/>
    </View>
  )
}

export default Processing

const styles = StyleSheet.create({
  container:{
    backgroundColor:"white",
    flex:1
  }
})