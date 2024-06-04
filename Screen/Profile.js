import { StyleSheet, Text, View, StatusBar, ScrollView, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'
import { signOut } from 'firebase/auth'
import { auth, } from '../config/Firebase'
import useAuth from '../hooks/useAuth'



const Profile = () => {
  const { navigate } = useNavigation();
  const {user} = useAuth()
  const handleLogout=async()=>{
    await signOut(auth);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="white" />
      <View style={styles.topview}>
        <TouchableOpacity onPress={() => navigate('SearchPage')}>
          <Image source={require("../Icons/Search.png")} style={styles.search} />
        </TouchableOpacity>
        <Text style={styles.text1}>Profile</Text>

        <TouchableOpacity onPress={handleLogout}>
          <Image source={require("../Icons/Logout.png")} style={styles.logout} />
        </TouchableOpacity>
      </View>
      <View style={styles.namebox} >
        <View style={styles.pp}>
          <TouchableOpacity onPress={()=>navigate('SettingsPage')}>
          <Image source={require("../Images/pp.png")} style={styles.img1}/>
          </TouchableOpacity>
        </View>
        <View style={styles.insidetext}>
          <TouchableOpacity onPress={()=>navigate('CongratsPage')}>
          <Text style={styles.name1}>Christo Kurian</Text>
          </TouchableOpacity>
          <Text style={styles.name2}>{user?.email}</Text>
        </View>
      </View>
      <View style={styles.minibox}>

        <View >
          <TouchableOpacity style={styles.orderbox} onPress={()=>navigate('OrderPage')}>
          <View style={styles.miniboxinside}>
            <Text style={styles.text3}>My Orders</Text>
            <Text style={styles.text31}>You have 10 orders</Text>
          </View>
          <View style={styles.forwardicon}>
            <Image source={require("../Icons/forward.png")} />
          </View>
          </TouchableOpacity>
        </View>




        <View >
          <TouchableOpacity style={styles.orderbox} onPress={()=>navigate('ShippingPage')}>
          <View style={styles.miniboxinside}>
            <Text style={styles.text3}>Shipping Addresses</Text>
            <Text style={styles.text31}>02 Addresses</Text>
          </View>
          <View style={styles.forwardicon}>
            <Image source={require("../Icons/forward.png")} />
          </View>
          </TouchableOpacity>
        </View>
        <View >
          <TouchableOpacity style={styles.orderbox} onPress={()=>navigate('PaymentPage')}>
          <View style={styles.miniboxinside}>
            <Text style={styles.text3}>Payment Method</Text>
            <Text style={styles.text31}>2 saved cards</Text>
          </View>
          <View style={styles.forwardicon}>
            <Image source={require("../Icons/forward.png")} />
          </View>
          </TouchableOpacity>
        </View>
        <View >
          <TouchableOpacity style={styles.orderbox} onPress={()=>navigate('ReviewPage')}>
          <View style={styles.miniboxinside}>
            <Text style={styles.text3}>My Reviews</Text>
            <Text style={styles.text31}>Reviews for 5 items </Text>
          </View>
          <View style={styles.forwardicon}>
            <Image source={require("../Icons/forward.png")} />
          </View>
          </TouchableOpacity>
        </View>
        <View >
          <TouchableOpacity style={styles.orderbox} onPress={()=>navigate('SettingsPage')}>
          <View style={styles.miniboxinside}>
            <Text style={styles.text3}>Settings</Text>
            <Text style={styles.text31}>Notification, Password, FAQ, Contact</Text>
          </View>
          <View style={styles.forwardicon}>
            <Image source={require("../Icons/forward.png")} />
          </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  topview: {
    // marginTop: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  search: {
    height: 25,
    width: 25,
    marginLeft: 12,
    marginTop: 25
  },
  text1: {
    fontFamily: "MerriweatherBold",
    fontSize: 20,
    marginTop: "6%"
  },
  logout: {
    height: 25,
    width: 25,
    marginTop: 25,
    marginRight: 10
  },
  pp: {
    marginTop: 35,
    marginLeft: 20
  },
  namebox: {
    flexDirection: "row",
  },
  insidetext: {
    marginTop: 40,
    marginLeft: 20
  },
  name1: {
    fontFamily: "NunitoSansSemiBold",
    fontSize: 20,
  },
  name2: {
    fontFamily: "NunitoSansRegular",
    fontSize: 16,
    color: "#808080"
  },
  minibox: {
    height: 600,
    marginTop: 30,
  },
  orderbox: {
    height: 100,
    backgroundColor: "#DEDEDE",
    width: 360,
    marginLeft: 27,
    marginBottom: 18,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent:"space-between"
  },
  text3:{
    fontFamily:"NunitoSansSemiBold",
    fontSize:18
  },
  text31:{
    fontFamily:"NunitoSansRegular",
    fontSize:14
  },
  miniboxinside:{
    marginTop:25,
    marginLeft:15
  },
  forwardicon:{
    marginRight:20,
    marginTop:40
  },
  img1:{
    height:80,
    width:80
  }
})