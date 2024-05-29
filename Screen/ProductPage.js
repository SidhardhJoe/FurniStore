import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';


const ProductPage = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => navigate('BottomNav')}>
            <Image source={require("../Icons/back.png")} style={styles.back} />
          </TouchableOpacity>
          <Image source={require("../Listing/Bed/Bed1.png")} style={styles.coverimage} />
        </View>
        <Text style={styles.title1}>Simple Bed Cover</Text>
        <Text style={styles.title2}>$ 50.00</Text>
        <View style={styles.reviewbox}>
          <Image source={require(".././Icons/star.png")} style={styles.star} />
          <Text style={styles.text3}>4.2</Text>
          <Text style={styles.text4}>(50 reviews)</Text>
        </View>
        <View style={styles.descbox}>
          <Text style={styles.desctxt}>
            Minimal Stand is made of by natural wood.
            The design that is very simple and minimal.
            This is truly one of the best furnitures in any family for now.
            With 3 different colors, you can easily select the best match for your home.
          </Text>
        </View>
      </View>
      <View style={styles.lastbar}>
        <TouchableOpacity onPress={() => navigate('Favourite')}>
          <Image source={require("../Icons/Fav.png")} style={styles.favsicon} />
        </TouchableOpacity>
        <View style={styles.addtocart}>
          <TouchableOpacity onPress={() => navigate('CartPage')}>
            <Text style={styles.atct}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ProductPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  coverimage: {
    width: 364,
    height: 500,
    marginLeft: 20,
    borderBottomLeftRadius: 100
  },
  back: {
    marginTop: 60,
    marginLeft: 20
  },
  title1: {
    fontFamily: "GelasioRegular",
    fontSize: 30,
    marginLeft: 20,
    marginTop: 10
  },
  title2: {
    fontFamily: "NunitoSansSemiBold",
    fontSize: 32,
    marginLeft: 20,
    marginTop: 10
  },
  star: {
    marginTop: 10,
    marginLeft: 20
  },
  reviewbox: {
    flexDirection: "row",
  },
  text3: {
    fontFamily: "NunitoSansSemiBold",
    fontSize: 18,
    marginTop: 7,
    marginLeft: 10
  },
  text4: {
    fontFamily: "NunitoSansSemiBold",
    fontSize: 14,
    marginTop: 9,
    marginLeft: 15
  },
  descbox: {
    width: 350,
    marginLeft: 20,
    marginTop: 20
  },
  desctxt: {
    fontFamily: "NunitoSansRegular",
    fontSize: 14,
    textAlign: "justify"
  },
  addtocart: {
    height: 60,
    width: 280,
    backgroundColor: "black",
    borderRadius: 10
  },
  lastbar: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40
  },
  atct: {
    color: "white",
    textAlign: "center",
    fontFamily: "NunitoSansSemiBold",
    fontSize: 20,
    marginTop: 13
  },
  favsicon: {
    marginRight: 30
  }
})