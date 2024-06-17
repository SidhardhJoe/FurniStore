import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import ReviewTab from '../Component/ReviewTab'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const ReviewPage = () => {
  const {navigate}=useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topbar}>
        <TouchableOpacity onPress={()=>navigate('Profile')}>
          <Image source={require("../../Icons/back.png")} style={styles.backicon} />
        </TouchableOpacity>
        <Text style={styles.toptxt}>Rating & Review</Text>
      </View>
      <View>
        <ReviewTab />
        <ReviewTab />
        <ReviewTab />
        <ReviewTab />
        <ReviewTab />
      </View>
    </ScrollView>
  )
}

export default ReviewPage

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  },
  topbar: {
    flexDirection: "row",
    gap: 120
  },
  backicon: {
    height: 25,
    marginLeft: 20,
    marginTop: 20

  },
  toptxt: {
    marginTop: 20,
    fontSize: 18
  }
})