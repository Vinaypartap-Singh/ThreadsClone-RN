import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  HomeIcon,
  MagnifyingGlassIcon as SearchOutline,
  PencilSquareIcon,
  HeartIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import {
  HomeIcon as HomeSolid,
  MagnifyingGlassIcon as SearchSolid,
  PencilSquareIcon as PencilSolid,
  HeartIcon as HeartSolid,
  UserIcon as UserSolid,
} from "react-native-heroicons/solid";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import SearchScreen from "./screens/SearchScreen";
import NewPostScreen from "./screens/NewPostScreen";
import ActivityScreen from "./screens/ActivityScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ProfileInformation from "./screens/ProfileInformation";

export default function StackNavigator() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  function BottomTabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "black",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            title: "Home",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <HomeSolid color={"black"} />
              ) : (
                <HomeIcon color={"gray"} />
              ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            headerShown: false,
            title: "Search",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <SearchSolid color={"black"} />
              ) : (
                <SearchOutline color={"gray"} />
              ),
          }}
        />
        <Tab.Screen
          name="Post"
          component={NewPostScreen}
          options={{
            headerShown: false,
            title: "New Thread",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <PencilSolid color={"black"} />
              ) : (
                <PencilSquareIcon color={"gray"} />
              ),
          }}
        />
        <Tab.Screen
          name="Activity"
          component={ActivityScreen}
          options={{
            headerShown: false,
            title: "Activtiy",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <HeartSolid color={"black"} />
              ) : (
                <HeartIcon color={"gray"} />
              ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
            title: "Profile",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <UserSolid color={"black"} />
              ) : (
                <UserIcon color={"gray"} />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileSetup"
          component={ProfileInformation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
