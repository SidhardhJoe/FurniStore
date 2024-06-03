import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import FavItemComponent from './Component/FavItemComponent'

const CartPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topbox}>
        <Image source={require("../Icons/back.png")}/>
        <Text>My cart</Text>
      </View>
      <View style={styles.cbox}>
      <FavItemComponent/>
      </View>
    </View>
  )
}

export default CartPage

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white"
  },
  cbox:{
  },
  topbox:{
    flexDirection:"row"
  }
})