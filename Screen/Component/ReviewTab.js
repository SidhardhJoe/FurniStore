import { StyleSheet, Text, View, ViewComponent, Image } from 'react-native'
import React from 'react'

const ReviewTab = () => {
    return (
        <View style={styles.container}>
            <View style={styles.bar1}>
                <View>
                    
                    <Image source={require("../../Listing/Bed/Bed3.png")} style={styles.img} />
               
                </View>
                <View>
                    <Text style={styles.text1}>
                        Soft White Bed
                    </Text>
                    <Text style={styles.text2}>
                        $50
                    </Text>
                </View>
            </View>
            <View style={styles.midbar}>
                <Image source={require("../../Icons/stars.png")} style={styles.stars}/>
                <Text style={styles.datebar}>22/02/2023</Text>
            </View>
            <View style={styles.textbar}>
                <Text>Nice Furniture with good delivery. The delivery time is very fast. 
                    Then products look like exactly the picture in the app. 
                    Besides, color is also the same and quality is very good despite very cheap price</Text>
            </View>
        </View>
    )
}

export default ReviewTab

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#B3B3B3",
        height: 200,
        width: 300,
        marginTop: 30,
        marginLeft: 52,
        borderRadius: 10,
        // borderWidth: 1,
        // borderColor: "grey"
    },
    img: {
        height: 60,
        width: 60,
        marginTop: 10,
        marginLeft: 10,
        borderRadius: 10
    },
    bar1:{
        flexDirection:"row"
    },
    text1:{
        marginTop:10,
        fontSize:16,
        marginLeft:15
    },
    text2:{
        marginTop:5,
        marginLeft:15
    },
    stars:{
        marginLeft:10,
        marginTop:10
    },
    midbar:{
        flexDirection:"row",
        gap:100
    },
    datebar:{
        marginTop:8
    },
    textbar:{
        marginLeft:10,
        marginRight:10,
        textAlign:"justify",
        marginTop:5
    }
})