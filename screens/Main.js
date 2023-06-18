import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState,useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import ProfileScreen from './ProfileScreen'
import SearchScreen from './SearchScreen';
import ListScreen from './ListScreen';
import FriendsScreen from './FriendsScreen';
import HomeNav from './HomeNav';
import AuthForm from './AuthForm';

const Stack = createNativeStackNavigator();
const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: '#272727',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};
export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        tabBarOptions={{showLabel: false}}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home': 'home-outline';
            } else if (route.name === 'Friends') {
              iconName = focused ? 'people' : 'people-outline';
            }
            else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search';
            }
            else if (route.name === 'List') {
              iconName = focused ? 'list' : 'list';
            }
            else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FF862D',
          tabBarInactiveTintColor: '#FEFEFE',
        })}
      >
            <Stack.Screen name="Home" component={HomeNav} options={{ headerShown: true}}/>
            <Stack.Screen name="Friends" component={FriendsScreen} options={{ headerShown: false}}/>
            <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false}}/>
            <Stack.Screen name="List" component={ListScreen} options={{ headerShown: false}}/>
            <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}