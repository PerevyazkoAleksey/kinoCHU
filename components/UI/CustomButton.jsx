import { View, Text, Button, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'

export default function CustomButton(props) {
  return (
    <LinearGradient style={styles.container} colors={['#FFB45A','#F45919']}>
      <View style={props.type=='active'? '' : styles.active}>
        <Button onPress={props.onPress} title={props.title} color={props.type=='active'? '#FEFEFE' : '#F45919'}/>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '60%',
    padding: 5,
    borderRadius: 8,
  },
  active: {
    margin: -3,
    borderRadius: 8,
    backgroundColor: 'rgb(242, 242, 242)',
    justifyContent: 'center',
  },
})