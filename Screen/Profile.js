import { StyleSheet, Text, View, StatusBar, ScrollView, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'

const Profile = () => {
  const { navigate } = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="white" />
      <View style={styles.topview}>
        <TouchableOpacity onPress={() => navigate('SearchPage')}>
          <Image source={require("../Icons/Search.png")} style={styles.search} />
        </TouchableOpacity>
        <Text style={styles.text1}>Profile</Text>
        <TouchableOpacity onPress={() => navigate('Page2')}>
          <Image source={require("../Icons/Logout.png")} style={styles.logout} />
        </TouchableOpacity>
      </View>
      <View style={styles.namebox} >
        <View style={styles.pp}>
          <Image source={require("../Images/pp.png")} />
        </View>
        <View style={styles.insidetext}>
          <Text style={styles.name1}>Christo Kurian</Text>
          <Text style={styles.name2}>ckking@gmail.com</Text>
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
    </ScrollView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  topview: {
    marginTop: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  search: {
    height: 26,
    width: 26,
    marginLeft: 12,
    marginTop: 25
  },
  text1: {
    fontFamily: "MerriweatherRegular",
    fontSize: 20,
    marginTop: "6%"
  },
  logout: {
    height: 26,
    width: 26,
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
    marginTop: 50,
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
    width: 350,
    marginLeft: 27,
    marginBottom: 18,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent:"space-between"
  },
  text3:{
    fontFamily:"NunitoSansSemiBold",
    fontSize:20
  },
  text31:{
    fontFamily:"NunitoSansRegular",
    fontSize:16
  },
  miniboxinside:{
    marginTop:20,
    marginLeft:15
  },
  forwardicon:{
    marginRight:20,
    marginTop:40
  }
})