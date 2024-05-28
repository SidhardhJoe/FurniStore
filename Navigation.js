import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
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


const Stack = createNativeStackNavigator();

const LoadFonts = () => {
  return useFonts({
    GelasioRegular: require('./Fonts/static/Gelasio-Regular.ttf'),
    GelasioBold: require('./Fonts/static/Gelasio-Bold.ttf'),
    NunitoSansRegular: require('./Fonts/static/NunitoSansRegular.ttf'),
    NunitoSansSemiBold: require('./Fonts/static/NunitoSansSemiBold.ttf'),
    MerriweatherRegular: require('./Fonts/static/Merriweather-Regular.ttf'),
    MerriweatherBold: require('./Fonts/static/Merriweather-Bold.ttf')
  })
}

function TabScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Page1" component={Page1} />
      <Stack.Screen name='Page2' component={Page2} />
      <Stack.Screen name='SignUp' component={Signup} />
      <Stack.Screen name='BottomNav' component={BottomNav} />
      <Stack.Screen name='SearchPage' component={SearchPage} />
      <Stack.Screen name='CartPage' component={CartPage} />
      <Stack.Screen name='OrderPage' component={OrderPage}/>
      <Stack.Screen name='PaymentPage' component={PaymentPage}/>
      <Stack.Screen name='ReviewPage' component={ReviewPage}/>
      <Stack.Screen name='SettingsPage' component={SettingsPage}/>
      <Stack.Screen name='ShippingPage' component={ShippingPage}/>
    </Stack.Navigator>
  );
}

const Navigation = () => {
  const [loaded] = LoadFonts();

  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <TabScreen />
    </NavigationContainer>
  );
};

export default Navigation;
