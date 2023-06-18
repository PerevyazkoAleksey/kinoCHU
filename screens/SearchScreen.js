import { View, Text, TextInput, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

//Components
import Header from '../components/Header'
import SearchItems from '../components/SearchItems'
import { Error } from '../components/Error'
import { ActivityIndicator } from 'react-native'
//Styles
import SearchScreenStyles from '../styles/SearchScreenStyles'

export default function SearchScreen() {
  const [search, setSearch] = useState('')
  const [result, setResult] = useState()
  const [isLoading, setIsLoading] = useState(false);

  async function getSearchItems(search) {
    setIsLoading(true)
    const {data:{results}} = await axios.get(`https://imdb-api.com/en/API/Search/k_3y9a81jt/` + search).catch((error)=>{
      Error(error.code,error.message)
    })
    setResult(results)
    setIsLoading(false)
  }

  useEffect(() => {
    getSearchItems(search)
  },[search])

  return (
    <View style={{marginBottom: 80}}>
      <Header name={'Search page'}/>
      <ScrollView>
        <Text style={SearchScreenStyles.title}>Research</Text>
        <TextInput                                          //Search input
          value={search}
          onChangeText={setSearch}
          placeholder='Search'
          style={SearchScreenStyles.input}
          onSubmitEditing={()=> getSearchItems(search)} //Search func 
        />
        <View style={SearchScreenStyles.line}></View>
        {isLoading? <ActivityIndicator size="large" color="#FF862D" />:null}
        <View>
          {result ? <SearchItems items={result}/> : null} 
        </View>
      </ScrollView>
    </View>
  )
}
