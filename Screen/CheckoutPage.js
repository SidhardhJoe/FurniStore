import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const CheckoutPage = () => {
    const { navigate } = useNavigation();
    return (
        <View style={styles.container}>
            <ScrollView>

            </ScrollView>
            <View style={styles.checkoutbox}>
                <TouchableOpacity onPress={()=>navigate('CongratsPage')}>
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
    },
    checkouttext: {
        color: "white",
        textAlign: "center",
        marginTop: 15,
        fontFamily: "NunitoSansSemiBold",

    }
})