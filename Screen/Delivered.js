import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DeliveredItem from './Component/DeliveredItem'

const Delivered = () => {
  return (
    <View style={styles.container}>
     <DeliveredItem/>
     <DeliveredItem/>
    </View>
  )
}

export default Delivered

const styles = StyleSheet.create({
  container:{
    backgroundColor:"white",
    flex:1
  }
})