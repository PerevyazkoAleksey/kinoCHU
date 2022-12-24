import { View, Text, StatusBar, StyleSheet, ScrollView} from 'react-native'
import React, { useState, useEffect }from 'react'
import axios from 'axios'
import Header from '../components/Header'
import Categories from '../components/Categories'
import Items from '../components/HomeItems'

export default function HomeScreen() {
  const API_KEY = 'k_3y9a81jt'
  const items = [
    {
      name: 'Horror 1',
      genre: 'horror',
    },
    {
      name: 'Comedy Club',
      genre: 'comedy',
    },
    {
      name: 'Titanic',
      genre: 'drama',
    },
    {
      name: 'Naruto',
      genre: 'anime',
    }
  ]
  const [movies, setMovies] = useState([])

  async function getMovies() {
    try{
      const {data:{items}} = await axios.get("https://imdb-api.com/en/API/MostPopularMovies/k_3y9a81jt")
      setMovies(items)
    }
    catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    getMovies();
  },[])

  const [currentItems, setCurrentItems] = useState(movies)
  const chooseCategories = (category) => {
    if (category === 'all') {
      setCurrentItems(items)
      return
    }
    setCurrentItems(items.filter(el=>el.genre === category))
  }
  return (
      <View style={{marginBottom: 80}}>
        <Header name={'home page'}/>
        <ScrollView>
          <Categories chooseCategories={chooseCategories}/>
          <Items items={movies}/>
        </ScrollView>
      </View>
  )
}
