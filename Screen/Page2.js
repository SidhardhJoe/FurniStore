import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'


const Page2 = () => {
    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <View style={styles.topview}>
                <Image source={require("../Images/Rectangle50.png")} style={styles.line1} />
                <Image source={require("../Images/Group.png")} />
                <Image source={require("../Images/Rectangle51.png")} style={styles.line1} />
            </View>
            <View>
                <Text style={styles.hello}>HELLO !</Text>
            </View>
            <View>
                <Text style={styles.welcomeback}>WELCOME BACK</Text>
            </View>
            <View style={styles.loginbox}>
                <View style={styles.emailbox}>
                    <Text style={styles.emailtext}>Email</Text>

                    <TextInput />
                </View>
                <View style={styles.passbox}>
                    <Text style={styles.passtext}>Password</Text>
                    <TextInput/>
                </View>
            </View>
        </View>
    )
}

export default Page2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    topview: {
        display: "flex",
        flexDirection: "row",
        marginTop: 90,
        justifyContent: "center",
        gap: 40
    },
    line1: {
        marginTop: "8%"
    },
    hello: {
        fontFamily: "GelasioRegular",
        fontSize: 30,
        color: "#606060",
        marginTop: 50,
        marginLeft: 30
    },
    welcomeback: {
        fontFamily: "GelasioRegular",
        fontSize: 30,
        marginLeft: 30
    },
    loginbox:{
        borderWidth:1,
        marginRight:50,
        height:"50%"
    },
    emailbox: {
        borderBottomColor: "black",
        borderBottomWidth: 0.5,
        width: "80%",
        marginLeft: "10%",
        marginTop:"10%"
    },
    emailtext:{
        marginBottom:20,
        fontSize:20,
        fontFamily:"GelasioRegular",
        color:"#909090"
    },
    passbox:{
        borderBottomColor: "black",
        borderBottomWidth: 0.5,
        width: "80%",
        marginLeft: "10%",
        marginTop:"10%"
    },
    passtext:{
        marginBottom:20,
        fontSize:20,
        fontFamily:"GelasioRegular",
        color:"#909090"
    }
})