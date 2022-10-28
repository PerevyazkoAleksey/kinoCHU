import { View, Text,Image, StyleSheet} from 'react-native'
import React from 'react'

export default function Items(props) {

  const geColor = (rating) => {
    if (rating<4.5) {
      return <View style={styles.redRating}><Text style={styles.rating_text}>{rating}</Text></View>
    }else if (rating>4.5 && rating<7.5) {
      return <View style={styles.orangeRating}><Text style={styles.rating_text}>{rating}</Text></View>
    }else {
      return <View style={styles.greenRating}><Text style={styles.rating_text}>{rating}</Text></View>
    }
  }

  return (
    <View style={{marginLeft: 20, flexDirection: 'row', flexWrap: 'wrap',width:'100%'}}>
      {props.items.map(el => 
        <View style={{width: '50%', alignItems: 'left', marginBottom: 20}} key={el.id}>
          {geColor(el.imDbRating)}
          <Image style={{borderRadius: 10}} source={{height: 216,width: 152,uri: el.image}} resizeMode={'cover'} height={216} width={152}/>
          <Text style={{width: '80%', textAlign: 'left', marginTop: 10}}>{el.title}</Text>
          <Text>{el.year}</Text>
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