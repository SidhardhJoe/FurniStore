import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native';


const Page2 = () => {
    const { navigate } = useNavigation();
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

                    <TextInput
                    autoCapitalize='none'

                    />
                </View>
                <View style={styles.passbox}>
                    <Text style={styles.passtext}>Password</Text>
                    <TextInput
                    secureTextEntry
                     />
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigate('Page1')} >
                        <Text style={styles.forgot}>Forgot Password</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.login}>
                    <TouchableOpacity onPress={() => navigate('BottomNav')}>
                        <Text style={styles.logintext}>Log In</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigate('SignUp')}>
                        <Text style={styles.signup}>SIGN UP</Text>
                    </TouchableOpacity>
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
        fontFamily: "MerriweatherBold",
        fontSize: 30,
        marginLeft: 30
    },
    loginbox: {
        marginRight: 10,
        height: "50%",
    },
    emailbox: {
        borderBottomColor: "black",
        borderBottomWidth: 0.5,
        width: "80%",
        marginLeft: 30,
        marginTop: "10%"
    },
    emailtext: {
        marginBottom: 20,
        fontSize: 20,
        fontFamily: "GelasioRegular",
        color: "#909090"
    },
    passbox: {
        borderBottomColor: "black",
        borderBottomWidth: 0.5,
        width: "80%",
        marginLeft: 30,
        marginTop: "10%"
    },
    passtext: {
        marginBottom: 20,
        fontSize: 20,
        fontFamily: "GelasioRegular",
        color: "#909090"
    },
    forgot: {
        fontSize: 18,
        fontFamily: "NunitoSansSemiBold",
        textAlign: "center",
        marginTop: 40
    },
    login: {
        height: 50,
        width: 285,
        backgroundColor: "black",
        borderRadius: 10,
        marginLeft: 60,
        marginTop: 30
    },
    logintext: {
        color: "white",
        fontSize: 18,
        fontFamily: "NunitoSansSemiBold",
        textAlign: "center",
        marginTop: 10
    },
    signup: {
        fontSize: 18,
        fontFamily: "NunitoSansSemiBold",
        textAlign: "center",
        marginTop: 30
    }
})