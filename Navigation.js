
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import Page1 from './Screen/Page1';
import Page2 from './Screen/Page2';

const Stack = createNativeStackNavigator();

const LoadFonts=()=>{
    return useFonts({
        GelasioRegular:require('./Fonts/static/Gelasio-Regular.ttf'),
        GelasioBold:require('./Fonts/static/Gelasio-Bold.ttf')
    })
}

function TabScreen() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Page1" component={Page1} />
      <Stack.Screen name='Page2' component={Page2}/>
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
