import * as React from 'react';
import { Text, View } from 'react-native';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import {
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

//Screens
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen'
import SearchScreen from './screens/SearchScreen';
import ListScreen from './screens/ListScreen';
import FriendsScreen from './screens/FriendsScreen';

const Tab = createBottomTabNavigator();
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
      <Tab.Navigator
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
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false}}/>
        <Tab.Screen name="Friends" component={FriendsScreen} options={{ headerShown: false}}/>
        <Tab.Screen name="Search" component={SearchScreen} options={{ headerShown: false}}/>
        <Tab.Screen name="List" component={ListScreen} options={{ headerShown: false}}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}


