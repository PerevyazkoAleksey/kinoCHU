import { View, Text,Image} from 'react-native'
import React from 'react'
import Icons from '@expo/vector-icons/MaterialIcons'

//Styles
import SearchItemsStyles from '../styles/SearchItemsStyles'

export default function SearchItems(props) {
  return (
    <View>
      <Text style={{marginBottom: 35, marginHorizontal: 20}}>{props.items.length} movies was found</Text>
      {props.items.map(el => 
        el.image ? 
        <View key={el.title+el.year+el.image} style={SearchItemsStyles.container}>
          <Image style={{borderRadius: 10}} source={{height: 80,width: '20%',uri: el.image}} resizeMode={'cover'} height={80} width={'20%'}/>
          <Text style={SearchItemsStyles.card_content}>{el.title}{el.description}</Text>
          <Icons name="favorite-border" size={30} style={SearchItemsStyles.favorite}/>
        </View> : null
      )}
    </View>
  )
}