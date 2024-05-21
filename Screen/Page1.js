
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';

const Page1 = () => {
    const {navigate }=useNavigation();
    return (
        <ImageBackground
            source={require('../Images/Bgimg.png')}
            style={styles.background}>
            <StatusBar style="dark" />
            <Text style={styles.text1}>MAKE YOUR</Text>
            <Text style={styles.text2}>HOME BEAUTIFUL</Text>
            <View style={styles.view1}>
                <Text style={styles.text3}>The best simple place where you discover most wonderful furnitures and make your home beautiful</Text>
            </View>
            <TouchableOpacity onPress={()=>navigate('Page2')}>
            <View style={styles.getstarted}>
                <Text style={styles.textgetstarted}>Get Started</Text>
            </View>
            </TouchableOpacity>



        </ImageBackground>
    );
}

export default Page1;

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    text1: {
        fontSize: 24,
        marginTop: "62%",
        color: "#606060",
        marginLeft: "8%",
        fontFamily: "GelasioRegular"
    },
    text2: {
        fontSize: 30,
        fontFamily: "GelasioBold",
        marginLeft: "8%",
    },
    view1: {
        width: 300,
        marginLeft: "15%",
        marginTop: "5%",
        fontSize: 24
    },
    text3: {
        fontSize: 18,
        letterSpacing: 2,
        color: "#808080"
    },
    getstarted: {
        height: 54,
        width: 159,
        backgroundColor: "black",
        marginTop: "50%",
        marginLeft: "30%",
        borderRadius:5
    },
    textgetstarted:{
        color:"white",
        fontFamily:"GelasioRegular",
        fontSize:18,
        textAlign:"center",
        marginTop:"5%"

    }
});
