import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header'

export default function ListScreen() {
  return (
    <View>
      <Header name={'List page'}/>
      <Text>ListScreen</Text>
    </View>
  )
}