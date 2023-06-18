import { View, Text, Button, Image } from 'react-native'
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from '@firebase/firestore';
import { auth, db } from '../firebase-config';
import { TextInput } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { addUser } from '../src/store/userSlice';
import { Error } from '../components/Error';
import Logo from '../assets/Logo.png'

export default function AuthForm() {
  const [password, usePassword] = useState('');
  const [email, useEmail] = useState('');

  const dispatch = useDispatch();
  const setUser = (id) => dispatch(addUser(id))

  const navigation = useNavigation();


  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      try {
        const favRef = setDoc(doc(db, "favoriteList", user.uid), {
        });
        navigation.navigate('OnBoarding')
      } catch (e) {
        Error(error.code,error.message)
      }
    }).catch((error) => {
      Error(error.code,error.message)
    })
  }

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      await AsyncStorage.setItem('user',JSON.stringify({userId: user.uid}))
      setUser(user.uid)
      navigation.navigate('Home')
    }).catch((error) => {
      Error(error.code,error.message)
    })
  }

  return (
    <View style={styles.container}>
      <Image source={Logo} resizeMode={'cover'}/>
      <View style={styles.field}>
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={useEmail}
          value={email}
        />
      </View>
      <View style={styles.field}>
        <Text>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          onChangeText={usePassword}
          value={password}
        />
      </View>
      <LinearGradient style={styles.btn} colors={['#FFB45A', '#F45919']}>
        <View>
          <Button onPress={signIn} title='Войти' color={'#FEFEFE'} />
        </View>
      </LinearGradient>
      <LinearGradient style={styles.btn} colors={['#FFB45A', '#F45919']}>
        <View style={styles.active}>
          <Button onPress={createUser} title='Зарегистрироваться' color={'#F45919'} />
        </View>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 100
  },
  field: {
    width: '60%',
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderRadius: 5,
    backgroundColor: '#FEFEFE',
  },
  btn: {
    marginVertical: 10,
    width: '60%',
    padding: 5,
    borderRadius: 8,
  },
  active: {
    margin: -3,
    borderRadius: 8,
    backgroundColor: 'rgb(242, 242, 242)',
    justifyContent: 'center',
  },
})