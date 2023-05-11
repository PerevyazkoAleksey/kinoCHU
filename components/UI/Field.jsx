import { View,Text,TextInput } from 'react-native'
import React,{ useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

export default function Field(props) {
  const [text, onChangeText] = useState(props.placeholder);
  useEffect(() => {
    props.change(text);
  }, [text])
  return (
    <View style={styles.container}>
        <Text>{props.title}</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: '60%',
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderRadius: 5,
    backgroundColor: '#FEFEFE',
    padding: 10,
  },
});