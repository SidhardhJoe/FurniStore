import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useFonts } from 'expo-font';
import Page1 from './Screen/Page1';
import Page2 from './Screen/Page2';
import Signup from './Screen/Signup';
import BottomNav from './BottomNav';
import SearchPage from './Screen/SearchPage';
import CartPage from './Screen/CartPage';
import OrderPage from './Screen/ProfilePages/OrderPage';
import PaymentPage from './Screen/ProfilePages/PaymentPage';
import ReviewPage from './Screen/ProfilePages/ReviewPage'
import SettingsPage from './Screen/ProfilePages/SettingsPage';
import ShippingPage from './Screen/ProfilePages/ShippingPage';
import ProductPage from './Screen/ProductPage';
import BedPage from './Screen/TopBarIconPages/BedPage';
import ChairPage from './Screen/TopBarIconPages/ChairPage';
import LampPage from './Screen/TopBarIconPages/LampPage';
import SofaPage from './Screen/TopBarIconPages/SofaPage';
import TablePage from './Screen/TopBarIconPages/TablePage';
import CongratsPage from './Screen/CongratsPage';
import CheckoutPage from './Screen/CheckoutPage';
import useAuth from './hooks/useAuth';
import AddressPage from './Screen/AddressPage';
import EditPayment from './Screen/EditPayment';
import Delivered from './Screen/Delivered';
import Cancelled from './Screen/Cancelled';
import Processing from './Screen/Processing';



const Topbar=createMaterialTopTabNavigator();

function TopBars(){
  return(
    <Topbar.Navigator>
      <Topbar.Screen name='Delivered' component={Delivered }/>
      <Topbar.Screen name='Processing' component={Processing}/>
      <Topbar.Screen name='Cancelled' component={Cancelled}/>
    </Topbar.Navigator>
  )
}



const Stack = createNativeStackNavigator();


// const LoadFonts = () => {
//   return useFonts({
//     GelasioRegular: require('./Fonts/static/Gelasio-Bold.ttf'),
//     GelasioBold: require('./Fonts/static/Gelasio-Bold.ttf'),
//     NunitoSansRegular: require('./Fonts/static/NunitoSansRegular.ttf'),
//     NunitoSansSemiBold: require('./Fonts/static/NunitoSansSemiBold.ttf'),
//     MerriweatherRegular: require('./Fonts/static/Merriweather-Regular.ttf'),
//     MerriweatherBold: require('./Fonts/static/Merriweather-Bold.ttf')
//   })
// }

const Navigation = () => {

  // const [loaded] = LoadFonts();
  const { user } = useAuth();
  
  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Page1'>
          <Stack.Screen name='BottomNav' component={BottomNav} />
          <Stack.Screen name='SearchPage' component={SearchPage} />
          <Stack.Screen name='CartPage' component={CartPage} />
          <Stack.Screen name='OrderPage' component={TopBars} />
          <Stack.Screen name='PaymentPage' component={PaymentPage} />
          <Stack.Screen name='ReviewPage' component={ReviewPage} />
          <Stack.Screen name='SettingsPage' component={SettingsPage} />
          <Stack.Screen name='ShippingPage' component={ShippingPage} />
          <Stack.Screen name='ProductPage' component={ProductPage} />
          <Stack.Screen name='BedPage' component={BedPage} />
          <Stack.Screen name='ChairPage' component={ChairPage} />
          <Stack.Screen name='LampPage' component={LampPage} />
          <Stack.Screen name='SofaPage' component={SofaPage} />
          <Stack.Screen name='TablePage' component={TablePage} />
          <Stack.Screen name='CongratsPage' component={CongratsPage}/>
          <Stack.Screen name='CheckoutPage' component={CheckoutPage}/>
          <Stack.Screen name='AddressPage' component={AddressPage} />
          <Stack.Screen name='EditPayment' component={EditPayment}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Page1'>
          <Stack.Screen name="Page1" component={Page1} />
          <Stack.Screen name='Page2' component={Page2} />
          <Stack.Screen name='SignUp' component={Signup} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

};

export default Navigation;
