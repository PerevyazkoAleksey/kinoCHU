import { View, Text, TouchableOpacity ,StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function Categories(props) {
  const categories = [
    {
        key: 'all',
        name: 'All',
    },
    {
        key: 'horror',
        name: 'Horror',
    },
    {
        key: 'comedy',
        name: 'Comedy',
    },
    {
        key: 'drama',
        name: 'Drama',
    },
    {
        key: 'anime',
        name: 'Anime',
    }
  ]

  const [categorie, setCategorie] = useState(categories)

  return (
    <View>
      <Text>Genres</Text>
      <View style={styles.categories}>
        {categorie.map(el => (
            <TouchableOpacity style={styles.category} key={el.key} onPress={()=> props.chooseCategories(el.key)}>
                <Text>{el.name}</Text>
            </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    categories: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,
    },
    category: {
        backgroundColor: '#fff',
        padding: 14,
        marginRight: 14,
        marginBottom: 14,
        borderRadius: 10,
    }
})