import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

// Styles
import ErrorStyles from '../styles/ErrorStyles'

export default function Error(props) {
  return (
    <View style={{marginTop: 100}}>
      <Text style={ErrorStyles.text}>{props.content}</Text>
    </View>
  )
}
