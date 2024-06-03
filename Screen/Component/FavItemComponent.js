import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FavItemComponent = () => {
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.headers}>
                    <View>
                        <Image source={require("../../Listing/Bed/Bed1.png")} style={styles.cover} />
                    </View>
                    <View style={styles.textinside}>
                        <Text style={styles.sbc}>Simple Bed Cover</Text>
                        <Text style={styles.cost}>$ 50.00</Text>
                    </View>
                    <View style={styles.iconset}>
                        <Image source={require("../../Icons/close.png")} style={styles.icon1} />
                        <Image source={require("../../Icons/favs.png")} style={styles.icon2} />
                    </View>
                </View>
            </View>
            
        </View>
    )
}

export default FavItemComponent

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white"
    },
    cover: {
        height: 85,
        width: 75,
        marginTop: 20,
        marginLeft: 20,
        borderRadius: 10
    },
    headers: {
        width: "100%",
        height: 105,
        flexDirection: "row",

    },
    textinside: {
        marginTop: 17,
        marginLeft: 15
    },
    sbc: {
        fontFamily: "NunitoSansSemiBold",
        fontSize: 16
    },
    cost: {
        fontFamily: "NunitoSansSemiBold",
        fontSize: 18
    },
    iconset: {
        marginTop: 20,
        marginLeft: 60
    },
    icon1: {
        height: 20,
        width: 20
    },
    icon2: {
        height: 20,
        width: 25,
        marginTop: 30
    },
})