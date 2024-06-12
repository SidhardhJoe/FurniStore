import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const NotificationComponent = () => {
  return (
    <View style={styles.container}>


      <View style={styles.box}>
        <View style={styles.imgbox}>
            <Image source={require("../../Listing/Bed/Bed1.png")} style={styles.img}/>
        </View>
        <View style={styles.txtbox}>
            <Text style={styles.text1}>This is just a heading for the box</Text>
            <Text style={styles.text2}>Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit. 
                Turpis pretium et in arcu adipiscing nec. 
                Turpis pretium et in arcu adipiscing nec. </Text>
        </View>
      </View>
    </View>
  )
}

export default NotificationComponent

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white"
    },
    box:{
        height:120,
        width:412,
        flexDirection:"row"
        // backgroundColor:"grey"
    },
    img:{
        height:100,
        width:90,
        borderRadius:10,
        marginTop:10,
        marginLeft:10
    },
    text1:{
        marginTop:10,
        marginLeft:10,
        fontSize:16
    },
    text2:{
        marginLeft:10,
        marginTop:10,
        marginRight:85,
        // textAlign:"justify",
        marginRight:90,
       
    }
})