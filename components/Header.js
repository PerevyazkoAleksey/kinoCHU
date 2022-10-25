import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

export default function Header(props) {
  return (
    <View style={styles.header}>
        <Text style={styles.title2}>{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
      flex: 'flex-start',
      backgroundColor: '#272727',
      width: '100%',
      height: 90,
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingBottom: 20,
    },
    title2: {
      color: '#FEFEFE',
    }
  })