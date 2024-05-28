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
      <View>
        <View style={styles.pp}>
          <Image source={require("../Images/pp.png")} />
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
  }
})