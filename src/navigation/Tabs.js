import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { NavigationButton } from "../components/buttons";
import HomeScreen from "../screens/HomeScreen";
import NotificationScreen from "../screens/NotificationScreen";
import OptionScreen from "../screens/OptionScreen";
import ProfileScreen from "../screens/ProfileScreen";

import { Bell, Home, Options, Profile } from "../components/icons";
import theme from "../constants/theme";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: 75,
          backgroundColor: theme.colors.dark1,
          borderTopColor: theme.colors.dark2,
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          return (
            <NavigationButton>
              {route.name === "Home" && (
                <Home
                  color={focused ? theme.colors.white : theme.colors.gray}
                />
              )}
              {route.name === "Option" && (
                <Options
                  color={focused ? theme.colors.white : theme.colors.gray}
                />
              )}
              {route.name === "Notification" && (
                <Bell
                  color={focused ? theme.colors.white : theme.colors.gray}
                />
              )}
              {route.name === "Profile" && (
                <Profile
                  color={focused ? theme.colors.white : theme.colors.gray}
                />
              )}
            </NavigationButton>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Option" component={OptionScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default Tabs;
