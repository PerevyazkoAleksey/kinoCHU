import { View, Text, FlatList, StyleSheet, Animated,Image } from 'react-native'
import React, {useRef, useState} from 'react'
import slides from '../src/data/slides'
import OnBoardingItem from '../components/OnBoardingItem'
import Paginator from '../components/Paginator'
import Close from '../assets/close.png'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function OnBoarding() {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null)
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  return (
    <View style={{flex:1}}>
      <View style={styles.closeBtnContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
          <Image style={styles.img} source={Close} resizeMode={'cover'}/>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <FlatList data={slides} renderItem={({item})=> <OnBoardingItem item={item}/>} 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          pagingEnabled
          bounces={false}
          keyExtractor={(item)=>item.id}
          onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}],{
            useNativeDriver: false,
          })}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      <Paginator data={slides} scrollX={scrollX}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  closeBtnContainer: {
    flex: 0.2,
    justifyContent: 'flex-end' ,
    alignItems: 'flex-end',
  },
  img: {
    width: 35,
    height: 35,
    borderRadius: '50%',
    margin: 10,
  },
  slider: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  }
})