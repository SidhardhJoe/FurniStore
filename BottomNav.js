import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Home from './Screen/Home';
import Favourite from './Screen/Favourite';
import Notification from './Screen/Notification';
import Profile from './Screen/Profile';
import { Ionicons } from '@expo/vector-icons';
import { View, Image } from 'react-native';


const Bottomtab = createBottomTabNavigator();


const BottomNav = () => {
    return (

        <Bottomtab.Navigator screenOptions={{ headerShown: false }}>
            <Bottomtab.Screen name='Home' component={Home} options={{
                tabBarIcon: () => {
                    return (
                        <View>
                            <Image
                                source={require("./Icons/back.png")}
                                resizeMode="contain"
                                style={{ width: 25 }}
                            />
                        </View>
                    );
                }
            }} />
            <Bottomtab.Screen name='Favourite' component={Favourite} omponent={Home} options={{
                tabBarIcon: () => {
                    return (
                        <View>
                            <Image
                                source={require("./Icons/back.png")}
                                resizeMode="contain"
                                style={{ width: 25 }}
                            />
                        </View>
                    );
                }
            }} />
            <Bottomtab.Screen name='Notification' component={Notification} omponent={Home} options={{
                tabBarIcon: () => {
                    return (
                        <View>
                            <Image
                                source={require("./Icons/back.png")}
                                resizeMode="contain"
                                style={{ width: 25 }}
                            />
                        </View>
                    );
                }
            }} />
            <Bottomtab.Screen name='Profile' component={Profile} omponent={Home} options={{
                tabBarIcon: () => {
                    return (
                        <View>
                            <Image
                                source={require("./Icons/back.png")}
                                resizeMode="contain"
                                style={{ width: 25 }}
                            />
                        </View>
                    );
                }
            }} />
        </Bottomtab.Navigator>
    )
}

export default BottomNav