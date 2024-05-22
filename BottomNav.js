import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Screen/Home';
import Favourite from './Screen/Favourite';
import Notification from './Screen/Notification';
import Profile from './Screen/Profile';


const Bottomtab=createBottomTabNavigator();


const BottomNav = () => {
  return (

    <Bottomtab.Navigator screenOptions={{headerShown:false}}>
        <Bottomtab.Screen name='Home' component={Home}/>
        <Bottomtab.Screen name='Favourite' component={Favourite}/>
        <Bottomtab.Screen name='Notification' component={Notification}/>
        <Bottomtab.Screen name='Profile' component={Profile}/>
    </Bottomtab.Navigator>
  )
}

export default BottomNav