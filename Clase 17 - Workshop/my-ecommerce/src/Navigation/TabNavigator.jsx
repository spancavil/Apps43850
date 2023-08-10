import {
    StyleSheet,
    View,
} from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import ShopStack from "./ShopStack";
import CartStack from "./CartStack";

import {
    Ionicons,
    Fontisto,
    Foundation,
    FontAwesome5,
} from "@expo/vector-icons";
import OrderStack from "./OrderStack";
import MyProfileStack from "./MyProfileStack";
import { colors } from "../Global/Colors";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar,
        }}
    >
        <Tab.Screen
            name="Shop"
            component={ShopStack}
            options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View>
                            <Fontisto
                                name="shopping-store"
                                size={24}
                                color={
                                    focused ? "black" : "gray"
                                }
                            />
                        </View>
                    );
                },
            }}
        />
        <Tab.Screen
            name="Cart"
            component={CartStack}
            options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View>
                            <Foundation
                                name="shopping-cart"
                                size={30}
                                color={
                                    focused ? "black" : "gray"
                                }
                            />
                        </View>
                    );
                },
            }}
        />
        <Tab.Screen
            name="Orders"
            component={OrderStack}
            options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View>
                            <FontAwesome5
                                name="list-ul"
                                size={24}
                                color={
                                    focused ? "black" : "gray"
                                }
                            />
                        </View>
                    );
                },
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
                                    focused ? "black" : "gray"
                                }
                            />
                        </View>
                    );
                },
            }}
        />
    </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.pink,
        shadowColor: "black",
        height: 60,
    }
})