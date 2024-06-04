import { StyleSheet, Text, View, Image, } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'

const CongratsPage = () => {
    const { navigate } = useNavigation();
    return (
        <View style={styles.container}>

            <Text style={styles.text1}>SUCCESS!</Text>
            <View>
                <Image source={require("../Images/seatoutline.png")} style={styles.seat} />
                <Image source={require("../Images/checkmark.png")} style={styles.checkmark} />
            </View>
            <View style={styles.textbox}>

                <Text style={styles.text2}>Your order will be delivered soon.
                    Thank you for choosing our app!</Text>
            </View>
            <View style={styles.tyobox}>
                <TouchableOpacity onPress={() => navigate('OrderPage')}>
                    <Text style={styles.tyotext}>Track your orders</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bthbox}>
                <TouchableOpacity onPress={()=>navigate('Home')}>
                    <Text style={styles.bthtext}>BACK TO HOME</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CongratsPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    text1: {
        fontFamily: "MerriweatherBold",
        textAlign: "center",
        fontSize: 35,
        marginTop: 130
    },
    seat: {
        marginLeft: "25%",
        marginTop: 20
    },
    checkmark: {
        marginLeft: "45%"
    },
    text2: {
        fontFamily: "NunitoSansRegular",
        fontSize: 18
    },
    textbox: {
        width: "80%",
        marginLeft: "15%",
        marginTop: 20
    },
    tyobox: {
        width: 250,
        height: 50,
        backgroundColor: "black",
        marginTop: 60,
        marginLeft:80,
        borderRadius: 10
    },
    tyotext: {
        color: "white",
        fontFamily: "NunitoSansSemiBold",
        fontSize: 18,
        textAlign: "center",
        justifyContent: "center",
        marginTop: 10
    },
    bthbox: {
        width: 250,
        height: 50,
        marginTop: 20,
        marginLeft: 80,
        borderRadius: 10,
        borderWidth: 1
    },
    bthtext: {
        fontFamily: "NunitoSansSemiBold",
        fontSize: 18,
        textAlign: "center",
        justifyContent: "center",
        marginTop: 10
    }
})


// 412