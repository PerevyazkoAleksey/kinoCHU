import { View, ScrollView} from 'react-native'
import React, { useState, useEffect }from 'react'
import axios from 'axios'
import Header from '../components/Header'
import Categories from '../components/Categories'
import OnBoarding from './OnBoarding'
import Items from '../components/HomeItems'
import { Error } from '../components/Error'
import { Text } from 'react-native'
import { ActivityIndicator } from 'react-native'

export default function HomeScreen() {
  const API_KEY = 'k_3y9a81jt';
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [OnBoarding, setOnBoarding] = useState(true);

  async function getMovies() {
    try {
      setIsLoading(true)
      if(sortKey == "Movie"){
        const {data:{items}} = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films?type=FILM`,{
          headers: {
            'X-API-KEY': 'e96b6b02-f513-47fc-b0fd-2c7cfd54ca54',
            'Content-Type': 'application/json',
          }
      })
        setMovies(items)
        setIsLoading(false)
      }
      else if (sortKey == "Serials"){
        const {data:{items}} = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films?type=TV_SERIES`,{
        headers: {
          'X-API-KEY': 'e96b6b02-f513-47fc-b0fd-2c7cfd54ca54',
          'Content-Type': 'application/json',
        }
    })
        setMovies(items)
        setIsLoading(false)
      }
    } catch (error) {
      Error(error.code,error.message)
    }
  }
  const [sortKey, setSortKey] = useState("Movie");
  useEffect(() => {
    getMovies();
  },[sortKey]);

  return (
        <View style={{marginBottom: 80}}>
          <Header name={'home page'}/>
          {isLoading ? <ActivityIndicator size="large" color="#FF862D" /> : null}
          <ScrollView>
            <Categories sortKeyChange={setSortKey}/>
            <Items items={movies}/>
          </ScrollView>
        </View>
  )
}
