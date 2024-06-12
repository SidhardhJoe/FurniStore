import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { details } from '../../Data/Data'

const ItemComponent = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      {details?.map((details, index) => {
        return (
          <View key={index} style={styles.box}>
            <TouchableOpacity onPress={() => navigate('ProductPage', { details })}>
              <View>
                <Image source={{ uri: details.image }} style={styles.outline} />
              </View>
              <Text style={styles.text1}>{details.name}</Text>
              <Text style={styles.text2}>$ 50.00</Text>
            </TouchableOpacity>
          </View>)
      })}
    </View>
  )
}

export default ItemComponent

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "white",
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  outline: {
    height: 180,
    width: 180,
    borderRadius: 10
  },
  box: {
    height: 200,
    width: 170,
    marginLeft: 15,
    marginTop: 30,
    marginBottom:10,
    marginRight:15,
    // backgroundColor:"black"
  },
  text1: {
    // fontFamily: "NunitoSansRegular",
    fontSize: 16,
    marginTop: 10
  },
  text2: {
    fontSize: 16,
    // fontFamily: "NunitoSansSemiBold"
  }
})