import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const ItemComponent = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TouchableOpacity onPress={()=>navigate('ProductPage')}>
          <View>
            <Image source={require('../../Listing/Bed/Bed1.png')} style={styles.outline} />
          </View>
          <Text style={styles.text1}>Simple Bed Cover</Text>
          <Text style={styles.text2}>$ 50.00</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ItemComponent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  outline: {
    height: 180,
    width: 150,
    borderRadius: 10
  },
  box: {
    height: 300,
    width: 180,
    marginLeft: 15,
    marginTop: 30,
  },
  text1: {
    fontFamily: "NunitoSansRegular",
    fontSize: 16,
    marginTop: 10
  },
  text2: {
    fontSize: 16,
    fontFamily: "NunitoSansSemiBold"
  }
})