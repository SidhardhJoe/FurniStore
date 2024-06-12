import { StyleSheet, Text, View, ScrollView, Image} from 'react-native'
import React from 'react'
import NotificationComponent from './Component/NotificationComponent'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Notification = () => {
  const { navigate } = useNavigation();
  return (
    <View>
      <View style={styles.topbar}>
        <TouchableOpacity onPress={()=>navigate('SearchPage')}>
          <Image source={require("../Icons/Search.png")} style={styles.search} />
        </TouchableOpacity>
        <Text style={styles.notification}>Notification</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} >
        <NotificationComponent />
        <NotificationComponent />
        <NotificationComponent />
        <NotificationComponent />
        <NotificationComponent />
        <NotificationComponent />
        <NotificationComponent />
        <NotificationComponent />
        <NotificationComponent />
      </ScrollView>
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  topbar: {
    flexDirection: "row",
    backgroundColor: "white",
    height: 50
  },
  search: {
    height: 25,
    width: 25,
    marginTop: 15,
    marginLeft: 10
  },
  notification: {
    marginLeft: "32%",
    fontSize: 18,
    marginTop: 15
  }
})