import { View, ScrollView} from 'react-native'
import React, { useState, useEffect }from 'react'
import axios from 'axios'
import Header from '../components/Header'
import Categories from '../components/Categories'
import Items from '../components/HomeItems'

export default function HomeScreen() {
  const API_KEY = 'k_3y9a81jt';
  const [movies, setMovies] = useState([])

  async function getMovies() {
    try {
      if(sortKey == "Movie"){
        const {data:{items}} = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films?type=FILM`,{
          headers: {
            'X-API-KEY': '4d19da17-37ec-4a2e-837b-6e12cdb42c8a',
            'Content-Type': 'application/json',
          }
      })
        setMovies(items)
      }
      else if (sortKey == "Serials"){
        const {data:{items}} = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films?type=TV_SERIES`,{
        headers: {
          'X-API-KEY': '4d19da17-37ec-4a2e-837b-6e12cdb42c8a',
          'Content-Type': 'application/json',
        }
    })
        setMovies(items)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const [sortKey, setSortKey] = useState("Movie");
  useEffect(() => {
    getMovies();
  },[sortKey]);

  return (
      <View style={{marginBottom: 80}}>
        <Header name={'home page'}/>
        <ScrollView>
          <Categories sortKeyChange={setSortKey}/>
          <Items items={movies}/>
        </ScrollView>
      </View>
  )
}
