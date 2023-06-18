import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
import Favorite from '../components/Lists/Favorite'

export default function ListScreen() {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#FF862D',
      tabBarInactiveTintColor: '#272727',
      tabBarIndicatorStyle: {backgroundColor: "#FF862D"},
      tabBarItemStyle: { paddingTop: 50,height: 100, backgroundColor: '#fff' },
    }}
  >
    <Tab.Screen name="Избранное" component={Favorite} />
    <Tab.Screen name="Смотрел" component={Favorite} />
  </Tab.Navigator>
  )
}