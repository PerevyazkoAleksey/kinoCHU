import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import { doc, setDoc, deleteDoc } from '@firebase/firestore';
import { collection, addDoc } from "firebase/firestore"; 
import { auth, db } from '../firebase-config';
import { query, where, getDoc } from "firebase/firestore";
import axios from 'axios';
import { Error } from '../components/Error';
import { ActivityIndicator } from 'react-native';
//svg
import Like from '../assets/img/Like.png'
import Dislike from '../assets/img/Dislike.png'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DetailsScreen({route}) {
  const {id,type} = route.params;
  const [user, setUser] = useState(useSelector(state=>state.user.user));
  const [like, setLike] = useState();
  const [seasons, setSeasons] = useState([]);
  const [visable,setVisable] = useState(false);
  const [awards,setAwards] = useState({});
  const [info,setInfo] = useState({});
  const [currentSeason, setCurrentSeason] = useState();
  const [isLoading, setIsLoading] = useState(false);

  async function getInfo() {
    setIsLoading(true)
    try {
      if(type=="TV_SERIES"){
      const {data:{items}} = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/seasons`,{
        headers: {
          'X-API-KEY': 'e96b6b02-f513-47fc-b0fd-2c7cfd54ca54',
          'Content-Type': 'application/json',
        }
      })
        items.length > 1 ? setSeasons(items) : setSeasons([])
      }
      const {data} = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/awards`,{
        headers: {
          'X-API-KEY': 'e96b6b02-f513-47fc-b0fd-2c7cfd54ca54',
          'Content-Type': 'application/json',
        }
      })
      await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`,{
        headers: {
          'X-API-KEY': 'e96b6b02-f513-47fc-b0fd-2c7cfd54ca54',
          'Content-Type': 'application/json',
        }
      }).then((res)=>setInfo(res.data));
      setAwards(data.items);
      setIsLoading(false)
    } catch (error) {
      Error(error.code,error.message)
    }
  }
  async function setFavorite() {
    try{
      const favRef = setDoc(doc(db, `favoriteList/${user}/favorite`, `${id}`), {
        id: id,
        nameRu: info.nameRu,
        posterUrl: info.posterUrl,
        genres: info.genres,
        countries: info.countries,
        year: info.year,
        ratingImdb: info.ratingImdb
      })
      console.log('+')
      changleLike();
    } catch(err) {
      Error(error.code,error.message)
    }
  }
  async function removeFavorite() {
    try{
      await deleteDoc(doc(db, `favoriteList/${user}/favorite`, `${id}`));
      changleLike()
    } catch(err){
      Error(error.code,error.message)
    }
  }
  async function checkFavorite() {
    const favRef = await getDoc(doc(db, `favoriteList/${user}/favorite/${id}`)).then((res)=>{
      res.data() == undefined ? setLike(false) : setLike(true)
    })
  }

  const changleLike = () => {
    setLike(!like)
  }

  useEffect(()=>{
      getInfo();
      checkFavorite();
  },[])

  return (
    <View style={{flex:1}}>
        {isLoading ? <ActivityIndicator size="large" color="#FF862D" /> : null}
        <Image source={{uri: info.posterUrlPreview}} resizeMode={'cover'} style={{height: 300, width: '100%'}}/>
      <ScrollView>
        {isLoading ? <ActivityIndicator size="large" color="#FF862D" /> :
          <View style={styles.container}>
            <View style={styles.content}>
              <View style={styles.content_header}>
                <View>
                  <Text style={styles.title}>{info.nameRu}</Text>
                  <Text style={styles.year}>{info.year}</Text>
                </View>
                <View style={styles.row}>
                  <View style={styles.completed}>
                    {info.completed?
                      <Text>Закончен</Text>
                      :<Text>Идет</Text>
                    }
                  </View>
                  {like ?
                    <TouchableOpacity onPress={removeFavorite}>
                      <Image source={Like} resizeMode={'cover'} style={styles.like}/>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={setFavorite}>
                      <Image source={Dislike} resizeMode={'cover'} style={styles.like}/>
                    </TouchableOpacity>
                  }
                </View>
              </View>
              <View style={styles.awards}>
                <View style={styles.awards_item}>
                  <Text style={styles.awards_item_title}>{info.ratingImdb==undefined?'Неизвестно': info.ratingImdb}</Text>
                  <Text>Рейтинг iMDb</Text>
                </View>
                <View style={styles.awards_item}>
                  <Text style={styles.awards_item_title}>{awards.length}</Text>
                  <Text>Награды</Text>
                </View>
              </View>
            </View>
            {type=="TV_SERIES"?
            <View> 
              <View style={styles.seasons}>
                {seasons.map(el=> (
                  <TouchableOpacity key={el.number} style={styles.season} onPress={()=> {
                    setVisable(!visable);
                    setCurrentSeason(el.number)
                    }}>
                    <Text>{el.number}</Text>
                  </TouchableOpacity>
                ))}
              </View>
              {visable?
                    <View style={styles.episodes}>
                      {seasons[currentSeason].episodes.map(el=>
                        <TouchableOpacity key={el.episodeNumber} style={styles.episode}>
                          <View style={{justifyContent: 'center'}}><Text>{el.episodeNumber}</Text></View>
                          <View style={styles.episode_desc}>
                            <Text>{el.nameRu}</Text>
                            <Text style={{color: '#a1a1a1', paddingVertical: 5}}>{el.releaseDate}</Text>
                          </View>
                        </TouchableOpacity>
                      )}
                    </View>
                    : ''
              }
            </View>: ''}
            <View>
              <Text style={styles.details_heading}>Обзор</Text>
              <Text style={styles.description}>{info.description}</Text>
              <Text style={styles.shortDescription}>{info.shortDescription}</Text>
            </View>
          </View>
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  like: {
    height: 24,
    width: 26,
  },
  title: {
    marginVertical: 10,
    fontWeight: '700',
    fontSize: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  year: {
    fontWeight: '700',
    fontSize: 20,
    color: 'grey',
  },
  description: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
  },
  content:{ 
    width: '100%',
  },
  container: {
      width: '100%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 30,
  },
  category: {
      backgroundColor: '#fff',
      padding: 14,
      marginRight: 14,
      borderRadius: 10,
  },
  seasons: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  season: {
      backgroundColor: '#fff',
      padding: 14,
      marginRight: 14,
      marginBottom: 14,
      borderRadius: 10,
  },
  episodes: {
    flexDirection: 'column',
    width: '100%',
  },
  episode: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: '#fff',
      padding: 14,
      marginRight: 14,
      marginBottom: 14,
      borderRadius: 10,
  },
  episode_desc: {
    marginLeft: '5%',
    width: '90%'
  },
  awards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginVertical: 30,
  },
  awards_item: {
    alignItems: 'center',
  },
  awards_item_title:{
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  completed: {
    padding: 5,
    height: 30,
    fontSize: 16,
    fontWeight: '600',
    color: 'grey',
    borderWidth: 1,
    borderRadius: 20, 
    marginLeft: 10,
    marginVertical: 10,
    justifyContent: 'center',
  },
  content_header: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  details_heading: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 15,
  },
  description: {
    fontWeight: '600',
    color: '#707070',
  },
  shortDescription: {
    fontWeight: '600',
    color: '#707070',
  },
})