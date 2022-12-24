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
    <View style={{marginLeft: '3%', width: '100%'}}>
      <Text style={styles.title}>Genres</Text>
      <View style={styles.categories}>
        {categorie.map(el => (
            <TouchableOpacity style={styles.category} key={el.key} onPress={()=> props.chooseCategories(el.key)}>
                <Text>{el.name}</Text>
            </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.more}>
          <Text>More genres</Text>
        </TouchableOpacity>
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
    more: {
      width: '30%',
      backgroundColor: '#fff',
      padding: 14,
      marginLeft: 20,
      marginBottom: 30,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#272727',
    }
})