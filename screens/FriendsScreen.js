import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import Header from '../components/Header'

//Style
import FriendsScreenStyles from '../styles/FriendsScreenStyles'

export default function FriendsScreen() {
  const friends = [
    {name: 'Aleksey Perevyazko',status: 'Added to friends',image: 'https://i.pinimg.com/736x/8c/a6/e7/8ca6e7826336c6783aa05059737edbc9.jpg'},
    {name: 'Mikhail Perevyazko',status: 'Remove from friends',image: 'https://img3.stockfresh.com/files/n/nyul/m/26/992398_stock-photo-portrait-of-handsome-young-man.jpg'},
    {name: 'Sofia Xramova',status: 'Added to friends',image: 'https://img.freepik.com/free-photo/winsome-beautiful-young-woman-posing-on-brown-wall-close-up-shot-of-wonderful-brunette-girl_197531-13994.jpg?w=2000'},
    {name: 'Egor Tenkov',status: 'The application has been sent',image: 'https://i.pinimg.com/736x/cd/70/d9/cd70d99ab6e85715510baf7d52825854.jpg'},
    {name: 'Dima Petrov',status: 'The application has been sent',image: 'https://img3.stockfresh.com/files/2/2design/m/35/8565544_stock-photo-portrait-of-handsome-teenage-boy-outdoors.jpg'},
    {name: 'Nikita Zemtcov',status: 'The application has been sent',image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbdQQ1uaho5K2gwsNECKEQUzAI9BpTmszBCA&usqp=CAU'},
    {name: 'Sasha Mosolova',status: 'Remove from friends',image: 'https://www.fotoprizer.ru/img/300816-125450-ft.jpg'},
    {name: 'Sofa Baramidze',status: 'Remove from friends',image: 'https://avatars.mds.yandex.net/i?id=afe4129a332b4e78cef7f9a016ddf3fe109c27c7-4285148-images-thumbs&n=13'},
  ];
  return (
    <View>
        <Header name='Friends page'/>
        <ScrollView showsHorizontalScrollIndicator={false} style={{marginBottom: 100}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {friends.map(el=>
                <Image key={el.name} style={{borderRadius: 50, marginLeft: 15, marginVertical: 28}} source={{height: 80,width: 80,uri: el.image}} resizeMode={'cover'}/>
              )}
          </ScrollView>
          <View style={FriendsScreenStyles.line}></View>
          <View>
            {friends.map(el=>
              <View style={FriendsScreenStyles.friend_container}>
                <Image style={{borderRadius: 50, marginLeft: 15, marginVertical: 28}} source={{height: 48,width: 48,uri: el.image}} resizeMode={'cover'}/>
                <View style={{marginLeft: 14}}>
                  <Text style={FriendsScreenStyles.name}>{el.name}</Text>
                  <Text style={FriendsScreenStyles.status}>{el.status}</Text>
                </View>
              </View>
            )}
          </View>
      </ScrollView>
    </View>
  )
}