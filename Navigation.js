
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Page1 from './Screen/Page1';

const Stack = createNativeStackNavigator();

function TabScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Page1" component={Page1} />
    </Stack.Navigator>
  );
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <TabScreen />
    </NavigationContainer>
  );
};

export default Navigation;
