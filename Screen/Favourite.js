import { StyleSheet, Text, View, StatusBar, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import FavItemComponent from './Component/FavItemComponent';

const Favourite = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.view1}>
        <TouchableOpacity onPress={()=>navigate('SearchPage')}>
          <Image source={require("../Icons/Search.png")} style={styles.searchicon} />
        </TouchableOpacity>
        <Text style={styles.headertext}>Favourites</Text>
        <TouchableOpacity onPress={()=>navigate('CartPage')}>
          <Image source={require("../Icons/Cart.png")} style={styles.carticon} />
        </TouchableOpacity>
      </View>
        <FavItemComponent/>
        <FavItemComponent/>
        <FavItemComponent/>
        <FavItemComponent/>
      
    </View>
  )
}

export default Favourite

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  view1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "5%"
  },
  headertext: {
    fontFamily: "MerriweatherBold",
    fontSize: 20
  },
  searchicon: {
    height: 25,
    width: 25,
    marginLeft: 10
  },
  carticon: {
    height: 25,
    width: 25,
    marginRight: 10
  }
})