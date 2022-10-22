import { View, Text, StatusBar, StyleSheet} from 'react-native'
import React from 'react'
import Header from '../components/Header'

export default function HomeScreen() {
  return (
      <View style={{
        flex: 1,
        alignItems: 'center',
      }}>
        <Header name={'home page'}/>
        <Text>Home page</Text>
        <StatusBar barStyle={'light-content'}/>
      </View>
  )
}
