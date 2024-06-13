import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import ReviewTab from '../Component/ReviewTab'

const ReviewPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <Image source={require("../../Icons/back.png")} style={styles.backicon} />
        <Text style={styles.toptxt}>Rating & Review</Text>
      </View>
      <View>
        <ReviewTab/>
      </View>
    </View>
  )
}

export default ReviewPage

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1
  },
  topbar: {
    flexDirection: "row",
    gap: 120
  },
  backicon:{
    height:25,
    marginLeft:20,
    marginTop:20
  
  },
  toptxt:{
    marginTop:20,
    fontSize:18
  }
})