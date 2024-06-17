import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CancelledItem from './Component/CancelledItem'

const Cancelled = () => {
  return (
    <View style={styles.container}>
      <CancelledItem/>
    </View>
  )
}

export default Cancelled

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white"
  }
})