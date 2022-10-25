import { View, Text,Image} from 'react-native'
import React from 'react'

export default function Items(props) {
  return (
    <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap',width:'100%'}}>
      {props.items.map(el => 
        <View style={{width: '50%', alignItems: 'center', marginBottom: 20}} key={el.id}>
          <Image style={{borderRadius: 10}} source={{height: 200,width: 160,uri: el.image}} resizeMode={'cover'} height={200} width={160}/>
          <Text>{el.title}</Text>
          <Text>{el.year}</Text>
        </View>
      )}
    </View>
  )
}