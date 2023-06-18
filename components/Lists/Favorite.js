import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase-config';
import { Error } from '../Error';
import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native';
import { RefreshControl } from 'react-native';

import HomeItemsStyles from '../../styles/HomeItemsStyles'


export default function List() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState();
  const data = useSelector(state=>state.user.user)
  const navigation = useNavigation();
  
  const onRefresh = React.useCallback(()=>{
    setRefresh(true);
    setTimeout(()=>{
      setRefresh(false);
    }, 2000)
    getData();
  },[])

  async function getData(){
    setIsLoading(true)
    let movieArr = [];
    try{
      await getDocs(collection(db, `favoriteList/${data}/favorite`)).then((response)=>{
        response.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          movieArr.push(doc.data())
        })
      }).then(()=>{
        setMovies(movieArr);
        setIsLoading(false)})
    } catch(err) {
      Error(error.code,error.message)
    }
  }
  useEffect(()=>{
    getData();
  },[])
  return (
    <ScrollView refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} color='#FF862D' tintColor='#FF862D'/>}>
      <View style={{marginVertical: 40}}>
        {isLoading ? <ActivityIndicator size="large" color="#FF862D" /> : null}
        <View style={HomeItemsStyles.container}>
          {movies.map(movie=>
            <View key={movie.id} style={HomeItemsStyles.card_container}>
              <TouchableOpacity key={movie.id} onPress={()=>navigation.navigate('Details', {genre:movie.genres,
                                                                                                  image_src:movie.posterUrl,
                                                                                                  countries: movie.countries,
                                                                                                  year: movie.year,
                                                                                                  rating:movie.ratingImdb,
                                                                                                  id: movie.id,
                                                                                                  type: null})}>
                  <Image style={{borderRadius: 10}} source={{height: 216,width: 152,uri: movie.posterUrl}} resizeMode={'cover'} height={216} width={152}/>
                  <Text style={{marginVertical: 10}}>{movie.nameRu}</Text>
                  <Text>{movie.year}</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  )
}