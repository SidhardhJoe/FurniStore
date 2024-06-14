import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Switch } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { set } from 'firebase/database';

const SettingsPage = () => {
  
  const { navigate } = useNavigation();
  const [name, setName] = useState('Sidhardh Joe');
  const [email, setEmail] = useState('sidhardhjoe@gmail.com')
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState(false);
  const [arrivals, setArrivals]=useState(true);
  const [delivery, setDelivery]=useState(false);
  const toggledel=()=>setDelivery(previousState=> !previousState);
  const togglenoti=()=>setArrivals(previousState=> !previousState)
  const toggleSwitch = () => setNotification(previousState => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <TouchableOpacity onPress={() => navigate('Profile')}>
          <Image source={require("../../Icons/back.png")} style={styles.backicon} />
        </TouchableOpacity>
        <Text style={styles.toptxt}>Settings</Text>
      </View>
      <View>
        <View>
          <Text style={styles.text}>Personal Information</Text>
          <View style={styles.box}>
            <Text style={styles.header} >Name</Text>
            <TextInput style={styles.inputboxstyle}
              value={name}
              onChangeText={text => setName(text)}
            />
          </View>
          <View style={styles.box}>
            <Text style={styles.header} >Email</Text>
            <TextInput style={styles.inputboxstyle}
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>
          <View>
            <Text style={styles.text}>Password</Text>
            <View style={styles.box}>
              <Text style={styles.header} >Password</Text>
              <View style={{ flexDirection: "row", gap: 5 }}>
                <TextInput style={styles.inputboxstyle}
                  value={password}
                  onChangeText={text => setPassword(text)}
                  secureTextEntry
                />
                <TouchableOpacity onPress={() => alert('Password Cannot be Changed')}>
                  <Image source={require("../../Icons/edit.png")} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.text}>Notifications</Text>
            <View style={styles.box}>
              <View style={{flexDirection:"row"}}>
                <Text style={styles.header1} >Sales</Text>
                <Switch
                  trackColor={{ false: '#767577', true: '#81b0ff' }}
                  thumbColor={notification ? '#f4f3f4' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={notification}
                  style={styles.switch}
                />
              </View>
            </View>
            <View style={styles.box}>
              <View style={{flexDirection:"row"}}>
                <Text style={styles.header1} >New Arrivals</Text>
                <Switch
                  trackColor={{ false: '#767577', true: '#81b0ff' }}
                  thumbColor={arrivals ? '#f4f3f4' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={togglenoti}
                  value={arrivals}
                  style={styles.switch}
                />
              </View>
            </View>
            <View style={styles.box}>
              <View style={{flexDirection:"row"}}>
                <Text style={styles.header1} >Delivery Alerts</Text>
                <Switch
                  trackColor={{ false: '#767577', true: '#81b0ff' }}
                  thumbColor={arrivals ? '#f4f3f4' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggledel}
                  value={delivery}
                  style={styles.switch}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.savebox}>
          <TouchableOpacity onPress={()=>alert('Changes Saved')}>
          <Text style={styles.svt}>Save Changes</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  )
}

export default SettingsPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  topbar: {
    flexDirection: "row",
    gap: 145
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
  box: {
    height: 60,
    width: 300,
    borderWidth: 0.8,
    borderRadius: 10,
    marginLeft: 50,
    marginBottom: 20,
  },
  text: {
    marginLeft: 50,
    marginTop: 30,
    marginBottom: 10,
    fontSize: 18
  },
  inputboxstyle: {
    marginTop: 0,
    fontSize: 18,
    marginLeft: 10,
    width: 250
  },
  header: {
    marginLeft: 10,
    marginTop: 5
  },
  header1: {
    marginTop: 15,
    fontSize: 18,
    marginLeft: 10,
    width: 200
  },
  switch:{
    marginTop:8,
    marginLeft:35
  },
  savebox:{
    height:60,
    width:200,
    backgroundColor:"black",
    borderRadius:10,
    marginLeft:100,
    marginTop:70
  },
  svt:{
    color:"white",
    fontSize:18,
    textAlign:"center",
    marginTop:15
  }
})