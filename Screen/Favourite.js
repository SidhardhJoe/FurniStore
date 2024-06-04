import { StyleSheet, Text, View, StatusBar, Image, ScrollView } from 'react-native'
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
        <TouchableOpacity onPress={() => navigate('SearchPage')}>
          <Image source={require("../Icons/Search.png")} style={styles.searchicon} />
        </TouchableOpacity>
        <Text style={styles.headertext}>Favourites</Text>
        <TouchableOpacity onPress={() => navigate('CartPage')}>
          <Image source={require("../Icons/Cart.png")} style={styles.carticon} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <FavItemComponent />
        <FavItemComponent />
        <FavItemComponent />
        <FavItemComponent />
        <FavItemComponent />
        <FavItemComponent />
        <FavItemComponent />
        <FavItemComponent />
        <FavItemComponent />
        <FavItemComponent />
        <FavItemComponent />
        <FavItemComponent />
        <FavItemComponent />
        <FavItemComponent />
        <FavItemComponent />
      </ScrollView>

      <View style={styles.altmcbox}>
        <TouchableOpacity onPress={()=>navigate('CartPage')}>
        <Text style={styles.altmctext}>Add to cart</Text>
        </TouchableOpacity>
      </View>


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
  },
  altmcbox: {
    height: 50,
    width: 323,
    backgroundColor: "black",
    marginLeft: "10%",
    marginBottom: 20,
    borderRadius: 10,
  },
  altmctext: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    marginTop: 10,
    fontFamily: "NunitoSansSemiBold"
  },
  // outerview:{
  //   width:"auto"
  // }
})