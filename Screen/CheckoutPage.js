import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const CheckoutPage = () => {
    const { navigate } = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <Image source={require("../Icons/back1.png")} style={styles.backicon} />
                <Text style={styles.carttext}>Check Out</Text>
            </View>
            <View style={styles.box2}>
                <Text style={styles.sat}>Shipping Address</Text>
                <Image style={styles.editicon} source={require("../Icons/edit.png")} />

            </View>
            <View>
                <View style={styles.box3}>
                    <Text style={styles.boxtxt}>Christo Kurian</Text>
                </View>
                <View style={styles.box4}>
                    <Text style={styles.box4txt}>25 rue Robert Latouche, Nice, 06200, Côte D’azur, France</Text>
                </View>
            </View>
            <View style={styles.box2}>
                <Text style={styles.sat}>Payment</Text>
                <Image style={styles.editicon} source={require("../Icons/edit.png")} />
            </View>
            <View style={styles.box5}>
                <Image style={styles.cardicon} source={require("../Icons/card.png")} />
                <Text style={styles.cardtxt}>**** **** **** 2002</Text>
            </View>
            <View>
                <View style={styles.box2}>
                    <Text style={styles.sat}>Delivery Method</Text>
                    <Image style={styles.editicon} source={require("../Icons/edit.png")} />
                </View>
                <View style={styles.box5}>
                    <Image style={styles.dhlicon} source={require("../Icons/dhl.png")} />
                    <Text style={styles.cardtxt}>Fast (2-3 Days)</Text>
                </View>
            </View>

            <View style={styles.costbox}>
                <View style={styles.desc}>
                    <Text style={styles.desctxt}>Order</Text>
                    <Text style={styles.desctxt1}>$95.00</Text>
                </View>
                <View style={styles.desc}>
                    <Text style={styles.desctxt}>Delivery</Text>
                    <Text style={styles.desctxt1}>$5.00</Text>
                </View>
                <View style={styles.desc}>
                    <Text style={styles.desctxt}>Total</Text>
                    <Text style={styles.desctxt1}>$100.00</Text>
                </View>
            </View>



            <View style={styles.checkoutbox}>
                <TouchableOpacity onPress={() => navigate('CongratsPage')}>
                    <Text style={styles.checkouttext}>SUBMIT ORDER</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CheckoutPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    checkoutbox: {
        height: 50,
        width: 300,
        backgroundColor: "black",
        marginLeft: 55,
        marginBottom: 20,
        borderRadius: 10,
        marginTop:45
    },
    checkouttext: {
        color: "white",
        textAlign: "center",
        marginTop: 15,
        fontFamily: "NunitoSansSemiBold",

    },
    backicon: {
        height: 25,
        width: 25,
        marginLeft: 10,
        marginTop: 10
    },
    box1: {
        flexDirection: "row"
    },
    carttext: {
        marginLeft: 130,
        fontFamily: "MerriweatherBold",
        fontSize: 20,
        marginTop: 10
    },
    box2: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20
    },
    sat: {
        fontFamily: "NunitoSansSemiBold",
        fontSize: 18,
        color: "#909090",
        marginLeft: 20
    },
    editicon: {
        height: 24,
        width: 24,
        marginRight: 10
    },
    box3: {
        // height:127,
        height: 50,
        width: 337,
        backgroundColor: "#F5F5F5",
        marginLeft: 30,
        marginTop: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    boxtxt: {
        fontFamily: "NunitoSansSemiBold",
        fontSize: 18,
        marginTop: 10,
        marginLeft: 20
    },
    box4: {
        height: 77,
        width: 337,
        backgroundColor: "#f5f5f5",
        marginLeft: 30,
        marginTop: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    box4txt: {
        fontFamily: "NunitoSansSemiBold",
        fontSize: 14,
        marginLeft: 20
    },
    box5: {
        height: 60,
        width: 337,
        backgroundColor: "#f5f5f5",
        marginLeft: 30,
        marginTop: 10,
        borderRadius: 10,
        flexDirection: "row",
        marginBottom:10
    },
    cardicon: {
        height: 50,
        width: 60,
        marginLeft: 10,
        marginTop: 5
    },
    cardtxt: {
        marginTop: 20,
        marginLeft: 20,
        fontFamily: "NunitoSansSemiBold",
        fontSize: 16
    },
    dhlicon:{
        marginLeft: 10,
        marginTop: 5,
        marginTop:20
    },
    costbox:{
        height: 150,
        width: 337,
        backgroundColor: "#f5f5f5",
        marginLeft: 30,
        marginTop: 120,
        borderRadius:10
    },
    desc:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginLeft:20,
        marginRight:20,
        marginTop:15,
    },
    desctxt:{
        fontFamily:"NunitoSansRegular",
        fontSize:18
    },
    desctxt1:{
        fontFamily:"NunitoSansSemiBold",
        fontSize:18
    }
    
})