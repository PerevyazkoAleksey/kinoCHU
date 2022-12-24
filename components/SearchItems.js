import { View, Text,Image, StyleSheet} from 'react-native'
import React from 'react'
import Icons from '@expo/vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

//Styles
import SearchItemsStyles from '../styles/SearchItemsStyles'

export default function SearchItems(props) {
  const navigation = useNavigation();
  return (
    <View style={SearchItemsStyles.container}>
      <Text style={{marginBottom: 35}}>{props.items.length} movies was found</Text>
      {props.items.map(el => 
        <View style={SearchItemsStyles.card_container} key={el.id}>
          <TouchableOpacity key={el.id} onPress={()=>navigation.navigate('Details', {title:el.title, image_src:el.image, year: el.year, crew: el.crew, rating: el.imDbRating, description: el.description})}>
            <Image style={{borderRadius: 10}} source={{height: 80,width: '20%',uri: el.image}} resizeMode={'cover'} height={80} width={'20%'}/>
            <View style={SearchItemsStyles.card_content_container}>
              <Text style={SearchItemsStyles.card_content}>{el.title}</Text>
              <Text style={SearchItemsStyles.card_content}>{el.description}</Text>
            </View>
            <Icons name="favorite-border" size={20} style={SearchItemsStyles.favorite}/>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}