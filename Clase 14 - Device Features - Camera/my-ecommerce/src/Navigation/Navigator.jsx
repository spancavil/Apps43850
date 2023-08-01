import { Platform, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import ShopStack from './ShopStack'
import CartStack from './CartStack'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../Global/Colors'
import { 
    Ionicons,
    Fontisto,
    Foundation,
    FontAwesome5
} from '@expo/vector-icons';
import OrderStack from './OrderStack'
import AuthStack from './AuthStack'
import { useSelector } from 'react-redux'
import MyProfileStack from './MyProfileStack'

const Tab = createBottomTabNavigator()

const Navigator = () => {

    const {email} = useSelector(state => state.userReducer.value)
  return (
    <SafeAreaView style = {styles.container}>
        <NavigationContainer>
            {
                email ? 
                <Tab.Navigator
                    screenOptions={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarStyle: styles.tabBar,
                    }}
                >
                    <Tab.Screen 
                        name='Shop'
                        component={ShopStack}
                        options={{
                            tabBarIcon: ({focused}) => {
                                return (
                                    <View>
                                        <Fontisto name="shopping-store" size={24} color={focused ? "black": "gray"} />
                                    </View>
                                )
                            }
                        }}
                    />
                    <Tab.Screen
                        name='Cart'
                        component={CartStack}
                        options={{
                            tabBarIcon: ({focused}) => {
                                return (
                                    <View>
                                        <Foundation name="shopping-cart" size={30} color={focused ? "black": "gray"} />    
                                    </View>
                                )
                            }
                        }}
                    />
                    <Tab.Screen
                        name='Orders'
                        component={OrderStack}
                        options={{
                            tabBarIcon: ({focused}) => {
                                return (
                                    <View>
                                        <FontAwesome5 name="list-ul" size={24} color={focused ? "black": "gray"} />
                                    </View>
                                )
                            }
                        }}
                    />
                    <Tab.Screen
                        name="MyProfile"
                        component={MyProfileStack}
                        options={{
                            tabBarIcon: ({ focused }) => {
                                return (
                                    <View style={styles.item}>
                                        <Ionicons
                                            name="person-circle-outline"
                                            size={24}
                                            color={
                                                focused
                                                    ? 'black'
                                                    : 'gray'
                                            }
                                        />
                                    </View>
                                );
                            },
                        }}
                    />
                </Tab.Navigator>
                :<AuthStack/>
            }
        </NavigationContainer>
    </SafeAreaView>
  )
}

export default Navigator

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    tabBar: {
        backgroundColor: colors.pink,
        shadowColor: 'black',
        height: 60,
    }
  })