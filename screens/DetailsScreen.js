import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function DetailsScreen({route}) {
  const {title,year,crew,image_src,rating,description} = route.params;
  return (
    <View style={{flex:1}}>
      <Image source={{uri: image_src}} resizeMode={'cover'} style={{height: 300, width: '100%'}}/>
      <View style={styles.categories}>
        <View style={styles.category}>
          <Text>Драма</Text>
        </View>
        <View style={styles.category}>
          <Text>Триллер</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>
          {description == null ? 
                    <><Text>Оценка: {rating} {"\n"}</Text><Text>Год выпуска: {year} {"\n"}</Text><Text>Актерский состав: {crew} {"\n"}</Text></> :
                    <Text>Описание: {description} {"\n"}</Text>
          }
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    marginTop: 26,
    marginBottom: 26,
    fontWeight: '700',
    fontSize: 24,
    width: '70%'
  },
  description: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
  },
  content:{ 
    marginHorizontal: 20,
  },
  categories: {
      width: '100%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 20,
      marginLeft: 10,
  },
  category: {
      backgroundColor: '#fff',
      padding: 14,
      marginRight: 14,
      borderRadius: 10,
  },
})