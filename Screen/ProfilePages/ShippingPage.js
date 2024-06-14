import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';

const ShippingPage = () => {
  const {navigate}=useNavigation();
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [ad1, setAd1] = useState('Albert john');
  const [ad2, setAd2] = useState('Albert john');
  const [ad3, setAd3] = useState('Albert john');
  const [add1, setAdd1] = useState('25 rue Robert Latouche, Nice, 06200, Côte D’azur, France');
  const [add2, setAdd2] = useState('25 rue Robert Latouche, Nice, 06200, Côte D’azur, France');
  const [add3, setAdd3] = useState('25 rue Robert Latouche, Nice, 06200, Côte D’azur, France');

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <TouchableOpacity onPress={() => navigate('Profile')}>
          <Image source={require("../../Icons/back.png")} style={styles.searchicon} />
        </TouchableOpacity>
        <Text style={styles.headertext}>Shipping Address</Text>
      </View>
      <View>
        <View style={{ flexDirection: "row" }}>
          <Checkbox style={styles.box}  
          value={check1}
          onValueChange={()=>{setCheck1(true), setCheck2(false), setCheck3(false)}}
          />
          <Text style={styles.textin}>Set this as default address</Text>
        </View>
        <View style={styles.addressbox}>
          <View style={{ flexDirection: "row" }}>
            <TextInput style={styles.topname}
              value={ad1}
              onChangeText={text => setAd1(text)}
            />
            <Image source={require("../../Icons/edit.png")} style={styles.editicon} />
          </View>
          <TextInput style={styles.textpara}
            value={add1}
            onChangeText={text => setAdd1(add1)}
          />
        </View>
      </View>
      <View>
        <View style={{ flexDirection: "row" }}>
          <Checkbox style={styles.box} 
          value={check2}
          onValueChange={()=>{setCheck1(false), setCheck2(true), setCheck3(false)}}/>
          <Text style={styles.textin}>Set this as default address</Text>
        </View>
        <View style={styles.addressbox}>
          <View style={{ flexDirection: "row" }}>
            <TextInput style={styles.topname}
              value={ad2}
              onChangeText={text => setAd2(text)}
            />
            <Image source={require("../../Icons/edit.png")} style={styles.editicon} />
          </View>
          <TextInput style={styles.textpara}
            value={add2}
            onChangeText={text => setAdd2(add1)}
          />
        </View>
      </View>
      <View>
        <View style={{ flexDirection: "row" }}>
          <Checkbox style={styles.box} 
          value={check3}
          onValueChange={()=>{setCheck1(false), setCheck2(false), setCheck3(true)}}/>
          <Text style={styles.textin}>Set this as default address</Text>
        </View>
        <View style={styles.addressbox}>
          <View style={{ flexDirection: "row" }}>
            <TextInput style={styles.topname}
              value={ad3}
              onChangeText={text => setAd3(text)}
            />
            <Image source={require("../../Icons/edit.png")} style={styles.editicon} />
          </View>
          <TextInput style={styles.textpara}
            value={add3}
            onChangeText={text => setAdd3(text)}
          />
        </View>
      </View>
      <View style={styles.savebox}>
        <TouchableOpacity onPress={()=>alert('Adress Changed')}>
        <Text style={styles.savetext}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ShippingPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  view1: {
    flexDirection: "row",
    gap: 110,
    marginTop: "5%"
  },
  headertext: {
    // fontFamily: "MerriweatherBold",
    fontSize: 20
  },
  searchicon: {
    marginTop: 7,
    marginLeft: 10
  },
  box: {
    marginTop: 20,
    marginLeft: 20
  },
  textin: {
    marginTop: 20,
    marginLeft: 20
  },
  addressbox: {
    height: 150,
    width: 350,
    marginTop: 10,
    marginLeft: 30,
    borderRadius: 1,
    elevation: 3,

  },
  topname: {
    marginTop: 15,
    marginLeft: 20,
    fontSize: 18,
    width: 150,
    height: 40,
    // backgroundColor:"black",
  },
  editicon: {
    marginTop: 15,
    marginLeft: 140
  },
  textpara: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 18,
    width: 300,
    height: 50,
  },
  savebox:{
    height:60,
    width:300,
    borderRadius:10,
    backgroundColor:"black",
    marginTop:140,
    marginLeft:50
  },
  savetext:{
    color:"white",
    fontSize:20,
    textAlign:"center",
    marginTop:15
  }
})