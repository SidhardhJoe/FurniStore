import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const Home = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.mainbar}>
        <TouchableOpacity onPress={() => navigate('SearchPage')}>
          <Image style={styles.search} source={require("../Icons/Search.png")} />
        </TouchableOpacity>
        <View>
          <View>
            <Text style={styles.heading1}>Make Home</Text>
          </View>
          <View>
            <Text style={styles.heading2}>BEAUTIFUL</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigate('CartPage')}>
            <Image style={styles.cart} source={require("../Icons/Cart.png")} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.view2}>
        <TouchableOpacity>
          <Image source={require("../Icons/Popular.png")} />
          <Text style={styles.bottomtext}>Popular</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../Icons/Chair.png")} />
          <Text style={styles.bottomtext}>Chair</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../Icons/Table.png")} />
          <Text style={styles.bottomtext}>Table</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../Icons/ArmChair.png")} />
          <Text style={styles.bottomtext}>Sofa</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../Icons/Bed.png")} />
          <Text style={styles.bottomtext}>Bed</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../Icons/Lamp.png")} />
          <Text style={styles.bottomtext}>Lamp</Text>
        </TouchableOpacity>
      </View>




    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  mainbar: {
    marginTop: "15%",
    height: 70,
    width: "100%",
    flexDirection: "row",
    gap: 90,
  },
  search: {
    height: 26,
    width: 26,
    marginLeft: 12,
    marginTop: 25
  },
  heading1: {
    fontSize: 20,
    fontFamily: "GelasioRegular",
    textAlign: "center"
  },
  heading2: {
    fontSize: 24,
    fontFamily: "GelasioBold",
    textAlign: "center"
  },
  cart: {
    height: 26,
    width: 26,
    marginTop: 25
  },
  view2: {
    flexDirection: "row",
    marginLeft: 15,
    marginTop: 20,
    gap:20
  },
  bottomtext:{
    fontFamily:"NunitoSansRegular",
    textAlign:"center"
  }
})