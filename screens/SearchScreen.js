import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import SearchItems from '../components/SearchItems'
import axios from 'axios'

export default function SearchScreen() {
  const [search, setSearch] = useState('')
  const [result, setResult] = useState()

  async function getSearchItems(search) {
    const {data:{results}} = await axios.get(`https://imdb-api.com/en/API/Search/k_3y9a81jt/` + search)
    setResult(results)
  }

  return (
    <View style={{marginBottom: 80}}>
      <Header name={'Search page'}/>
      <ScrollView>
        <Text style={styles.title}>Research</Text>
        <TextInput                                          //Search input
          value={search}
          onChangeText={setSearch}
          placeholder='Search'
          style={styles.input}
          onSubmitEditing={()=> getSearchItems(search)} //Search func 
        />
        <View style={styles.line}></View>
        {result ? <SearchItems items={result}/> : <Text>Not found</Text>} 
      </ScrollView>
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
  input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    height: 40,
    width: '89%',
    marginLeft: 20,
    borderRadius: 8,
    backgroundColor: '#fefefe'
  },
  line: {
    height: 1,
    backgroundColor: '#000',
    opacity: 0.1,
    marginVertical: 35,
  }
})