import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import { doc, setDoc, deleteDoc } from '@firebase/firestore';
import { collection, addDoc } from "firebase/firestore"; 
import { auth, db } from '../firebase-config';
import axios from 'axios';

//svg
import Like from '../assets/img/Like.png'
import Dislike from '../assets/img/Dislike.png'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DetailsScreen({route}) {
  const {id,type} = route.params;
  const [user, setUser] = useState();
  const [like, setLike] = useState(true);
  const [seasons, setSeasons] = useState([]);
  const [visable,setVisable] = useState(false);
  const [awards,setAwards] = useState({});
  const [info,setInfo] = useState({});
  const [currentSeason, setCurrentSeason] = useState();

  async function getInfo() {
    try {
      const user = await AsyncStorage.getItem('@user')
      setUser(user)
      if(type=="TV_SERIES"){
      const {data:{items}} = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/seasons`,{
        headers: {
          'X-API-KEY': '4d19da17-37ec-4a2e-837b-6e12cdb42c8a',
          'Content-Type': 'application/json',
        }
      })
        setSeasons(items);
      }
      const {data} = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/awards`,{
        headers: {
          'X-API-KEY': '4d19da17-37ec-4a2e-837b-6e12cdb42c8a',
          'Content-Type': 'application/json',
        }
      })
      await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`,{
        headers: {
          'X-API-KEY': '4d19da17-37ec-4a2e-837b-6e12cdb42c8a',
          'Content-Type': 'application/json',
        }
      }).then((res)=>setInfo(res.data));
      setAwards(data.items);
    } catch (error) {
      console.log(error)
    }
  }
  async function setFavorite() {
    try{
      const favRef = setDoc(doc(db, `favoriteList/${user}/favorite`, `${id}`), {
        id: id,
        name: info.nameRu,
        img: info.posterUrlPreview,
      })
    } catch(err) {
      console.log(err)
    }
  }
  async function removeFavorite() {
    try{
      await deleteDoc(doc(db, `favoriteList/${user}/favorite`, `${id}`));
    } catch(err){
      console.log(err)
    }
  }
  async function checkFavorite() {
    
  }

  const changleLike = () => {
    setLike(!like)
  }

  useEffect(()=>{
      getInfo();
  },[])

  return (
    <View style={{flex:1}}>
        <Image source={{uri: info.posterUrlPreview}} resizeMode={'cover'} style={{height: 300, width: '100%'}}/>
      <ScrollView>
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
                <TouchableOpacity style={styles.season} onPress={()=> {
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
                      <TouchableOpacity style={styles.episode}>
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