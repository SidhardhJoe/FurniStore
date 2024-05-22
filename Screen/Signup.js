import { StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';


const Signup = () => {
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
                <Text style={styles.welcome}>WELCOME</Text>
            </View>
            <View style={styles.signupbox}>
                <View style={styles.namebox}>
                    <Text style={styles.nametext}>Name</Text>
                    <TextInput />
                </View>
                <View style={styles.namebox}>
                    <Text style={styles.nametext}>Email</Text>
                    <TextInput />
                </View>
                <View style={styles.namebox}>
                    <Text style={styles.nametext}>Password</Text>
                    <TextInput />
                </View>
                <KeyboardAvoidingView style={styles.namebox}>
                    <Text style={styles.nametext}>Confirm Password</Text>
                    <TextInput />
                </KeyboardAvoidingView>
            </View>
            <View style={styles.signupbox2}>
                <TouchableOpacity onPress={()=>navigate('BottomNav')}>
                    <Text style={styles.signuptext1}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.lastbox}>
                <View>
                    <Text style={styles.lastbox1}>Already have account?</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={()=>navigate('Page2')}>
                        <Text style={styles.lastbox2}>SIGN IN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1
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
    welcome: {
        marginLeft: 30,
        fontFamily: "MerriweatherBold",
        fontSize: 30,
        marginTop: 30
    },
    namebox: {
        borderBottomColor: "black",
        borderBottomWidth: 0.5,
        width: "80%",
        marginLeft: 30,
        marginTop: "8%",
    },
    nametext: {
        marginBottom: 20,
        fontSize: 20,
        fontFamily: "NunitoSansRegular",
        color: "#909090"
    },
    signupbox2: {
        height: 50,
        width: 285,
        backgroundColor: "black",
        marginLeft: 60,
        borderRadius: 10,
        marginTop: 50
    },
    signuptext1: {
        textAlign: "center",
        color: "white",
        fontStyle: "NunitoSansSemiBold",
        fontSize: 18,
        marginTop: 10
    },
    lastbox: {
        flexDirection: "row",
        gap: 5,
        justifyContent:"center",
        marginTop:30
    },
    lastbox1: {
        fontSize: 18,
        fontFamily: "NunitoSansRegular"
    },
    lastbox2: {
        fontSize: 18,
        fontFamily: "NunitoSansSemiBold"
    }

})