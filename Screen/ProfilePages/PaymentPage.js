import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Checkbox from 'expo-checkbox'
import { useState } from 'react'

const PaymentPage = ({route}) => {
  const { navigate } = useNavigation();
  const [isChecked, setChecked] = useState(true);
  const [isChecked1, setChecked1] = useState(false);
  const { details = {} } = route.params || {};
  return (
    <View style={styles.container} >
      {/* {console.log(details)} */}
      <View style={styles.topbar}>
        <TouchableOpacity onPress={() => navigate('CheckoutPage', {details})}>
          <Image source={require("../../Icons/back.png")} style={styles.backicon} />
        </TouchableOpacity>
        <Text style={styles.toptxt}>Payment Method</Text>
      </View>
      <View style={styles.cardview}>
        <Checkbox value={isChecked} onValueChange={() => { setChecked(true), setChecked1(false) }} style={styles.checkbox1} />
        <Image source={require('../../Images/Paymentcard.png')} />
      </View>
      <View style={styles.cardview1}>
        <Checkbox value={isChecked1} onValueChange={() => { setChecked(false), setChecked1(true) }} style={styles.checkbox2}  />
        <Image source={require("../../Images/Paymentcard1.png")} />
      </View>
    </View>
  )
}

export default PaymentPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  topbar: {
    flexDirection: "row",
    gap: 110
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
  cardview: {
    marginTop: 30,
    marginLeft: 18,
    flexDirection: "row"
  },
  checkbox1: {
    marginTop: 30
  },
  cardview1:{
    marginTop:20,
    marginLeft:20,
    flexDirection:"row",
  },
  checkbox2:{
    marginRight:20
  }
})

// import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
// import React, { useState } from 'react';
// import { useNavigation } from '@react-navigation/native';
// import Checkbox from 'expo-checkbox';

// const PaymentPage = ({ route }) => {
//   const navigation = useNavigation();
//   const [isChecked, setChecked] = useState(true);
//   const [isChecked1, setChecked1] = useState(false);
//   const { details = {} } = route.params || {};

//   const handleCheckboxChange = (index) => {
//     if (index === 1) {
//       setChecked(true);
//       setChecked1(false);
//     } else {
//       setChecked(false);
//       setChecked1(true);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {console.log(details)}
//       <View style={styles.topbar}>
//         <TouchableOpacity
//           onPress={() => navigation.navigate('CheckoutPage')}
//           accessibilityLabel="Go back"
//         >
//           <Image source={require('../../Icons/back.png')} style={styles.backicon} />
//         </TouchableOpacity>
//         <Text style={styles.toptxt}>Payment Method</Text>
//       </View>
//       <View style={styles.cardview}>
//         <Checkbox
//           value={isChecked}
//           onValueChange={() => handleCheckboxChange(1)}
//           style={styles.checkbox}
//         />
//         <Image source={require('../../Images/Paymentcard.png')} style={styles.cardImage} />
//       </View>
//       <View style={styles.cardview}>
//         <Checkbox
//           value={isChecked1}
//           onValueChange={() => handleCheckboxChange(2)}
//           style={styles.checkbox}
//         />
//         <Image source={require('../../Images/Paymentcard1.png')} style={styles.cardImage} />
//       </View>
//     </View>
//   );
// };

// export default PaymentPage;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   topbar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingTop: 20,
//   },
//   backicon: {
//     height: 25,
//     width: 25,
//   },
//   toptxt: {
//     fontSize: 18,
//     marginLeft: 'auto',
//     marginRight: 'auto',
//   },
//   cardview: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginHorizontal: 20,
//     marginVertical: 10,
//   },
//   checkbox: {
//     marginRight: 20,
//   },
//   cardImage: {
//     height: 50,
//     width: 100,
//     resizeMode: 'contain',
//   },
// });
