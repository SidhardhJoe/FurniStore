import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import ItemComponent from '../Component/ItemComponent'
import { useNavigation } from '@react-navigation/native'

const SofaPage = () => {
  const { navigate } = useNavigation();

  return (
    <View>
        <View style={styles.mainbar}>
          <TouchableOpacity onPress={() => navigate('SearchPage')}>
            <Image style={styles.search} source={require("../../Icons/Search.png")} />
          </TouchableOpacity>
          <View>
            <View>
              <Text style={styles.heading2}>Sofa</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigate('CartPage')}>
              <Image style={styles.cart} source={require("../../Icons/Cart.png")} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <ItemComponent/>
        </ScrollView>
      </View>
  )
}

export default SofaPage

const styles = StyleSheet.create({
  mainbar: {
    // marginTop: "10%",
    height: 70,
    width: "100%",
    flexDirection: "row",
    gap: 145,
    backgroundColor:"white"
  },
  search: {
    height: 25,
    width: 25,
    marginLeft: 12,
    marginTop: 25
  },
  heading1: {
    fontSize: 20,
    // fontFamily: "GelasioRegular",
    textAlign: "center"
  },
  heading2: {
    fontSize: 24,
    // fontFamily: "GelasioBold",
    textAlign: "center",
    marginTop:20
  },
  cart: {
    height: 25,
    width: 25,
    marginTop: 25
  },
})