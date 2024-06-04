import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import FavItemComponent from './Component/FavItemComponent'

const CartPage = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>

      <View style={styles.topbox}>
        <TouchableOpacity onPress={() => navigate('Favourite')}>
          <Image style={styles.backicon} source={require("../Icons/back1.png")} />
        </TouchableOpacity>
        <Text style={styles.txtin} >My cart</Text>
      </View>



      <ScrollView style={styles.cbox}>
        <FavItemComponent />
        <FavItemComponent />
        <FavItemComponent />

      </ScrollView>

      <View style={styles.ttlbox}>
        <Text style={styles.txttotal}>Total :</Text>
        <Text style={styles.txtmoney}>$150.00</Text>
      </View>
      <View style={styles.checkoutbox}>
        <TouchableOpacity onPress={()=>navigate('CheckoutPage')}>
          <Text style={styles.checkouttxt}>Check Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CartPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  topbox: {
    flexDirection: "row",
    marginTop: 10
  },
  backicon: {
    height: 25,
    width: 25,
    marginLeft: 10,
    marginTop: 4
  },
  txtin: {
    marginLeft: 130,
    fontFamily: "MerriweatherBold",
    fontSize: 20
  },
  cbox: {
    marginTop: 10
  },
  ttlbox: {
    flexDirection: "row"
  },
  checkoutbox: {
    height: 50,
    width: 300,
    backgroundColor: "black",
    marginLeft: 56,
    marginBottom: 20,
    borderRadius: 10,
  },
  checkouttxt: {
    color: "white",
    fontFamily: "NunitoSansSemiBold",
    textAlign: "center",
    fontSize: 18,
    marginTop: 10
  },
  txttotal: {
    fontFamily: "NunitoSansSemiBold",
    fontSize: 20,
    color: "#808080",
    marginBottom: 10,
    marginLeft: 27
  },
  txtmoney: {
    fontFamily: "NunitoSansSemiBold",
    fontSize: 18,
    marginLeft: 220,
    marginTop: 5
  }
})