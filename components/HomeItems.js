import { View, Text,Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
//Styles
import HomeItemsStyles from '../styles/HomeItemsStyles'
import { TouchableOpacity } from 'react-native-gesture-handler'


export default function Items(props) {
  const navigation = useNavigation();
  const getColor = (rating) => {
    if (rating<4.5) {
      return <View style={HomeItemsStyles.redRating}><Text style={HomeItemsStyles.rating_text}>{rating}</Text></View>
    }else if (rating>4.5 && rating<7.5) {
      return <View style={HomeItemsStyles.orangeRating}><Text style={HomeItemsStyles.rating_text}>{rating}</Text></View>
    }else {
      return <View style={HomeItemsStyles.greenRating}><Text style={HomeItemsStyles.rating_text}>{rating}</Text></View>
    }
  }
  console.log('items render')
  return (
      <View style={HomeItemsStyles.container}>
        {props.items.map(el =>
        <View style={HomeItemsStyles.card_container}>
          <TouchableOpacity key={el.id} onPress={()=>navigation.navigate('Details', {title:el.title, image_src:el.image, year: el.year, crew: el.crew, rating: el.imDbRating})}>
              {getColor(el.imDbRating)}
              <Image style={{borderRadius: 10}} source={{height: 216,width: 152,uri: el.image}} resizeMode={'cover'} height={216} width={152}/>
              <Text style={HomeItemsStyles.card_title}>{el.title}</Text>
              <Text style={HomeItemsStyles.card_content}>{el.year}</Text>
          </TouchableOpacity>
        </View>
        )}
      </View>
  )
}