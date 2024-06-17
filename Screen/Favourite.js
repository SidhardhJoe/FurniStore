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
        {/* <TouchableOpacity onPress={() => navigate('CartPage')}>
          <Image source={require("../Icons/Cart.png")} style={styles.carticon} />
        </TouchableOpacity> */}
      </View>
      <ScrollView>
        <FavItemComponent />
        
      </ScrollView>

      <View style={styles.altmcbox}>
        <TouchableOpacity >
        <Text style={styles.altmctext}>Add to cart</Text>
        </TouchableOpacity>
      </View>


    </View>
  )
}

 {/* line:27 onPress={()=>navigate('CartPage')} */}
export default Favourite

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  view1: {
    flexDirection: "row",
    gap:120,
    marginTop: "5%"
  },
  headertext: {
    // fontFamily: "MerriweatherBold",
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
    width: 290,
    backgroundColor: "black",
    marginLeft: "15%",
    marginBottom: 20,
    borderRadius: 10,
  },
  altmctext: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    marginTop: 10,
    // fontFamily: "NunitoSansSemiBold"
  },
  // outerview:{
  //   width:"auto"
  // }
})