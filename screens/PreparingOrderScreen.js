import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

const PreparingOrderScreen = () => {

    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('DeliveryScreen')
        }, 4000)
    }, [])

  return (
    <SafeAreaView className='bg-[#00CCBB] flex-1 flex justify-center items-center'>
      <Animatable.Image
      source={require('../assets/giphy.gif')}
      animation="slideInUp"
      iterationCount={1}
      className='w-96 h-96'
      />

      <Animatable.Text
      animation="slideInUp"
      iterationCount={2}
      className='text-lg my-10 text-white font-bold text-center'
      >
        Waiting for Restaurants to accept your order
      </Animatable.Text>
    </SafeAreaView>
  )
}

export default PreparingOrderScreen