import { View, Text,Image, StyleSheet} from 'react-native'
import React from 'react'
import Icons from '@expo/vector-icons/MaterialIcons'

export default function SearchItems(props) {


  return (
    <View style={{marginLeft: 20,width:'100%'}}>
      <Text style={{marginBottom: 35}}>{props.items.length} movies was found</Text>
      {props.items.map(el => 
        <View style={{alignItems: 'left', marginBottom: 20,flexDirection: 'row', flexWrap: 'wrap'}} key={el.id}>
          <Image style={{borderRadius: 10}} source={{height: 80,width: '20%',uri: el.image}} resizeMode={'cover'} height={80} width={'20%'}/>
          <View style={{width: '50%',marginLeft: 10}}>
            <Text style={{textAlign: 'left', marginTop: 10}}>{el.title}</Text>
            <Text style={{textAlign: 'left', marginTop: 10}}>{el.description}</Text>
          </View>
          <Icons name="favorite-border" size={20} style={{marginLeft: '10%', marginTop: 20}}/>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  redRating: {
    width: 35,
    height: 35,
    position: 'absolute',
    zIndex: 1,
    right: '20%',
    top: '2%',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  orangeRating: {
    width: 35,
    height: 35,
    position: 'absolute',
    zIndex: 1,
    right: '20%',
    top: '2%',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  greenRating: {
    width: 35,
    height: 35,
    position: 'absolute',
    zIndex: 1,
    right: '20%',
    top: '2%',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  rating_text: {
    color: '#fff',
  }
})