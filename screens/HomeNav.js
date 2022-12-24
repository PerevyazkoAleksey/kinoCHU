import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function HomeNav() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
        <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="Details"
        component = {DetailsScreen}
        />
      </Stack.Navigator>
  )
}