import { View, Text, TouchableOpacity ,StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'

export default function Categories(props) {
  const categories = [
    {
        key: 'Movie',
        name: 'Movie',
    },
    {
        key: 'Serials',
        name: 'Serials',
    }
  ]
  const [key, setKey] = useState("Movie");
  useEffect(()=>{
    props.sortKeyChange(key);
  },[key]);

  return (
    <View style={{marginLeft: '3%', width: '100%'}}>
      <Text style={styles.title}>Genres</Text>
      <View style={styles.categories}>
        {categories.map(el => (
            <TouchableOpacity style={styles.category} key={el.key} onPress={()=>setKey(el.key)}>
                <Text>{el.name}</Text>
            </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
      fontWeight: '700',
      fontSize: 24,
      marginLeft: 20,
      marginBottom: 20,
      marginTop: 34,
    },
    categories: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,
        marginLeft: 10,
    },
    category: {
        backgroundColor: '#fff',
        padding: 14,
        marginRight: 14,
        marginBottom: 14,
        borderRadius: 10,
    },
})