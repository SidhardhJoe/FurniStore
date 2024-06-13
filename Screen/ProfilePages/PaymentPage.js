import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Checkbox from 'expo-checkbox'
import { useState } from 'react'

const PaymentPage = () => {
  const { navigate } = useNavigation();
  const [isChecked, setChecked] = useState(true);
  const [isChecked1, setChecked1] = useState(false);
  return (
    <View style={styles.container} >
      <View style={styles.topbar}>
        <TouchableOpacity onPress={() => navigate('Profile')}>
          <Image source={require("../../Icons/back.png")} style={styles.backicon} />
        </TouchableOpacity>
        <Text style={styles.toptxt}>Payment Method</Text>
      </View>
      <View style={styles.cardview}>
        <Checkbox value={isChecked} onValueChange={() => { setChecked(true), setChecked1(false) }} style={styles.checkbox1} />
        <Image source={require('../../Images/Paymentcard.png')} />
      </View>
      <View style={styles.cardview1}>
        <Checkbox value={isChecked1} onValueChange={() => { setChecked(false), setChecked1(true) }} style={styles.checkbox2}  />
        <Image source={require("../../Images/Paymentcard1.png")} />
      </View>
    </View>
  )
}

export default PaymentPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  topbar: {
    flexDirection: "row",
    gap: 110
  },
  backicon: {
    height: 25,
    marginLeft: 20,
    marginTop: 20

  },
  toptxt: {
    marginTop: 20,
    fontSize: 18
  },
  cardview: {
    marginTop: 30,
    marginLeft: 18,
    flexDirection: "row"
  },
  checkbox1: {
    marginTop: 30
  },
  cardview1:{
    marginTop:20,
    marginLeft:20,
    flexDirection:"row",
  },
  checkbox2:{
    marginRight:20
  }
})