import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'

const EditPayment = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [cvv, setCvv] = useState('');
    const [exp, setExp] = useState('');
    return (
        <View style={styles.container}>
            <View style={styles.topbar}>
                <TouchableOpacity onPress={() => navigate('CheckoutPage')}>
                    <Image source={require("../Icons/back.png")} style={styles.backicon} />
                </TouchableOpacity>
                <Text style={styles.toptxt}>Edit Payments</Text>
            </View>
            <View style={styles.cardbox}>
                <Image source={require("../Images/Paymentcard3.png")} />
            </View>
            <View>
                <View style={styles.namebox} >
                    <Text style={styles.chn}>CardHolder Name</Text>
                    <TextInput style={styles.tib}
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                </View>
                <View style={styles.ccn}>
                    <Text style={styles.chn}>Card Number</Text>
                    <TextInput style={styles.tib}
                        defaultValue={number}
                        onChangeText={(text) => setNumber(text)}
                        keyboardType='numeric'
                        maxLength={14}
                    />
                </View>
                <View style={styles.smb}>
                    <View style={styles.smallbox}>
                        <Text style={styles.chn}>CVV</Text>
                        <TextInput style={styles.tib}
                            defaultValue={cvv}
                            onChangeText={(text) => setCvv(text)}
                            keyboardType='numeric'
                            maxLength={4} />
                    </View>
                    <View style={styles.smallbox1}>
                        <Text style={styles.chn}>Expiration Date</Text>
                        <TextInput style={styles.tib}
                            defaultValue={exp}
                            onChangeText={(text) => setExp(text)}
                            keyboardType='numeric'
                            maxLength={4} />
                    </View>
                </View>
            </View >
            <View style={styles.savecard}>
                <TouchableOpacity onPress={()=>alert('Card Saved Successfully ')}>
                    <Text style={styles.svc}>Save Card</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default EditPayment

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    topbar: {
        flexDirection: "row",
        gap: 130
    },
    backicon: {
        height: 25,
        marginLeft: 20,
        marginTop: 20

    },
    toptxt: {
        marginTop: 20,
        fontSize: 18
    },
    cardbox: {
        marginTop: 30,
        marginLeft: 30
    },
    namebox: {
        height: 66,
        width: 335,
        backgroundColor: "#B3B3B3",
        marginLeft: 40,
        marginTop: 30,
        borderRadius: 5
    },
    chn: {
        color: "#808080",
        marginTop: 5,
        marginLeft: 10
    },
    tib: {
        marginLeft: 11,
        color: "#808080",
        fontSize: 16
    },
    ccn: {
        height: 66,
        width: 335,
        backgroundColor: "white",
        marginLeft: 40,
        marginTop: 30,
        borderRadius: 5,
        borderWidth: 1,

    },
    smallbox: {
        height: 66,
        width: 157,
        marginLeft: 40,
        marginTop: 30,
        borderRadius: 5,
        borderWidth: 1,
    },
    smallbox1: {
        height: 66,
        width: 157,
        marginLeft: 20,
        marginTop: 30,
        borderRadius: 5,
        borderWidth: 1,
    },
    smb: {
        flexDirection: "row",
    },
    savecard: {
        height: 60,
        width: 200,
        backgroundColor: "black",
        borderRadius: 10,
        marginLeft: "25%",
        marginTop: 220
    },
    svc: {
        color: "white",
        fontSize: 18,
        textAlign: "center",
        marginTop: 15
    }
})