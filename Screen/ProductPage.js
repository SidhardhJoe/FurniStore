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
        <Text style={styles.title}>Simple Bed</Text>
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
    width: 340,
    height: 500,
    marginLeft: 44,
    borderBottomLeftRadius: 20
  },
  back: {
    marginTop: 60,
    marginLeft: 20
  }
})