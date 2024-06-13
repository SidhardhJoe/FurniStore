import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react'
import Home from './Screen/Home';
import Favourite from './Screen/Favourite';
import Notification from './Screen/Notification';
import Profile from './Screen/Profile';


const Bottomtab = createBottomTabNavigator();


const BottomNav = () => {
    return (

        <Bottomtab.Navigator screenOptions={({ route, Navigation }) => ({
            tabBarIcon: ({ color, focused, size }) => {
                let iconName;
                if (route.name === "Home") {
                    iconName = focused ? "home" : "home-outline"
                }
                else if (route.name === "Favourite") {
                    iconName = focused ? "bookmark" : "bookmark-outline"
                }
                else if (route.name === "Notification") {
                    iconName = focused ? "notifications" : "notifications-outline"
                }
                else if (route.name === "Profile") {
                    iconName = focused ? "person" : "person-outline"
                } return <Ionicons name={iconName} size={size} color={color} />
            }, headerShown: false
        })}>
            <Bottomtab.Screen name='Home' component={Home} />
            <Bottomtab.Screen name='Favourite' component={Favourite} />
            <Bottomtab.Screen name='Notification' component={Notification} />
            <Bottomtab.Screen name='Profile' component={Profile} />
        </Bottomtab.Navigator>
    )
}

export default BottomNav