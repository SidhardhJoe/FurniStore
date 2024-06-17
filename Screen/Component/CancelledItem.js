import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CancelledItem = () => {
    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <View style={styles.odno}>
                    <Text style={styles.txt}>Order No: 451231354681651</Text>
                    <Text style={styles.txt}>22/10/25</Text>
                </View>
                <View style={styles.quan}>
                    <Text style={styles.txt}>Quantity: 03</Text>
                    <Text style={styles.txt}>Total Amount: $73</Text>
                </View>
                <View style={styles.view3}>
                    <View style={styles.detailbox} >
                        <Text style={styles.dtxt}>Details</Text>
                    </View>
                    <Text style={styles.dtxt2}>Cancelled</Text>
                </View>
            </View>
        </View>
    )
}

export default CancelledItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white"
    },
    view1: {
        height: 170,
        width: 350,
        marginLeft: 30,
        borderRadius: 10,
        marginTop: 30,
        borderWidth: 1,
        borderColor: "grey"
    },
    odno: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5
    },
    txt: {
        fontSize: 18
    },
    quan: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 5,
        marginRight: 5,
        marginTop: 20,

    },
    detailbox: {
        height: 40,
        width: 100,
        backgroundColor: "black",
        marginTop: 25,
    },
    dtxt: {
        color: "white",
        textAlign: "center",
        marginTop: 5,
        fontSize: 18
    },
    view3: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    dtxt2: {
        marginTop: 30,
        fontSize: 18,
        color: "red",
        marginRight: 20
    }
})