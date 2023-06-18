import { View, Text,Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
//Styles
import HomeItemsStyles from '../styles/HomeItemsStyles'
import { TouchableOpacity } from 'react-native-gesture-handler'


export default function FavoriteItem(props) {
  const navigation = useNavigation();
  const [items,setItems] = useState(props.items);
  const getColor = (rating) => {
    if (rating<4.5) {
      return <View style={HomeItemsStyles.redRating}><Text style={HomeItemsStyles.rating_text}>{rating}</Text></View>
    }else if (rating>4.5 && rating<7.5) {
      return <View style={HomeItemsStyles.orangeRating}><Text style={HomeItemsStyles.rating_text}>{rating}</Text></View>
    }else {
      return <View style={HomeItemsStyles.greenRating}><Text style={HomeItemsStyles.rating_text}>{rating}</Text></View>
    }
  }
  useEffect(()=>{
    setItems(props.items);
  },[props.items]);
  return (
      <View style={HomeItemsStyles.container}>
        {items.map(el =>
        <View style={HomeItemsStyles.card_container}>
          <TouchableOpacity key={el.kinopoiskId} onPress={()=>navigation.navigate('Details', {genre:el.genres,
                                                                                              image_src:el.posterUrl,
                                                                                              countries: el.countries,
                                                                                              year: el.year,
                                                                                              rating:el.ratingImdb,
                                                                                              id: el.kinopoiskId,
                                                                                              type: el.type,})}>
              {getColor(el.ratingImdb)}
              <Image style={{borderRadius: 10}} source={{height: 216,width: 152,uri: el.posterUrl}} resizeMode={'cover'} height={216} width={152}/>
              <Text style={HomeItemsStyles.card_title}>{el.nameRu}</Text>
              <Text style={HomeItemsStyles.card_content}>{el.year}</Text>
          </TouchableOpacity>
        </View>
        )}
      </View>
  )
}