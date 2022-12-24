import React from 'react'
import { View, Text,Image } from 'react-native'
import * as Progress from 'react-native-progress';
import Header from '../components/Header'

//Styles
import ProfileScreenStyles from '../styles/ProfileScreenStyles'

export default function ProfileScreen() {
  const progress = 0.45;
  return (
    <View>
      <Header name={'Profile page'}/>
      <View>
        <View style={ProfileScreenStyles.profile}>
          <Image style={{borderRadius: 50, marginLeft: 15, marginVertical: 28}} source={{height: 80,width: 80,uri: 'https://i.pinimg.com/736x/8c/a6/e7/8ca6e7826336c6783aa05059737edbc9.jpg'}} resizeMode={'cover'}/>
          <View style={ProfileScreenStyles.profile_info}>
            <Text style={ProfileScreenStyles.name}>Kekani</Text>
            <View style={ProfileScreenStyles.progress}>
              <Progress.Bar style={{height:8, marginRight: 10}} progress={progress} width={173} color={'linear-gradient(90deg, rgba(255,180,90,1) 0%, rgba(255,180,90,1) 100%)'}/>
              <Text>{progress*100}%</Text>
            </View>
          </View>
        </View>
        <View style={ProfileScreenStyles.statistic}>
          <View style={ProfileScreenStyles.rank}>
            <Image style={{width: 48, height: 48}} source={require('../assets/Rank.png')} resizeMode={'cover'}/>
            <Text style={{fontWeight: '400', fontSize: 12, marginTop: 5}}>Rank</Text>
          </View>
          <View style={ProfileScreenStyles.film_stat}>
            <Text style={{fontSize: 30, fontWeight: '300', padding: 3}}>2</Text>
            <Text style={{fontWeight: '400', fontSize: 12, marginTop: 10}}>Serial</Text>
          </View>
          <View style={ProfileScreenStyles.film_stat}>
            <Text style={{fontSize: 30, fontWeight: '300', padding: 3}}>24</Text>
            <Text style={{fontWeight: '400', fontSize: 12, marginTop: 10}}>Episode</Text>
          </View>
        </View>
        <View style={ProfileScreenStyles.navigation}>
          
        </View>
      </View>
    </View>
  )
}
