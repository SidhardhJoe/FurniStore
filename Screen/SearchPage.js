import { ScrollView, StatusBar, StyleSheet, Text, TextInput, View, Image } from 'react-native'
import React, { useState } from 'react'
import ItemComponent from "./Component/ItemComponent"
import { TouchableOpacity } from 'react-native';

const SearchPage = () => {
  const [search, Setsearch] = useState('');
  return (
    <ScrollView style={styles.container}>
      <StatusBar></StatusBar>
      <View style={styles.view12}>
        <View style={styles.search_bar}>
          <TextInput style={styles.txtbox}
            placeholder='Search'
            value={search}
            onChangeText={text => Setsearch(text)}
          />
        </View>
        <TouchableOpacity>
          <Image source={require("../Icons/Search.png")} style={styles.srhicon} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.txt1}>Explore new items</Text>
      </View>
      <ItemComponent />
    </ScrollView>
  )
}

export default SearchPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  search_bar: {
    height: 50,
    width: 320,
    backgroundColor: "white",
    marginTop: 20,
    marginLeft: 10,
    borderRadius: 20,
    borderWidth: 2
  },
  txtbox: {
    fontSize: 22,
    marginTop: 8,
    marginLeft: 10
  },
  txt1: {
    fontSize: 18,
    marginTop: 10,
    marginLeft: 15
  },
  view12: {
    flexDirection: "row"
  },
  srhicon: {
    marginTop: 30,
    marginLeft: 20,
    height: 30,
    width: 30
  }
})