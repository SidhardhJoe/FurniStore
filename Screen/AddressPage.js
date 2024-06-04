import { StyleSheet, Text, View,   } from 'react-native'
import React, {useState} from 'react'
import Checkbox from 'expo-checkbox';


const AddressPage = () => {
  const [isChecked, setChecked] = useState(false);
  const [isChecked1, setChecked1] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Do you like React Native?</Text>
        <Checkbox  value={isChecked} onValueChange={()=>{setChecked1(false),setChecked(true)}} />
        <Checkbox value={isChecked1} onValueChange={()=>{setChecked1(true),setChecked(false)}} />
        
      </View>
      
    </View>
  )
}

export default AddressPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"
  },
 
})