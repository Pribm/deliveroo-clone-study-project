import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { XIcon } from 'react-native-heroicons/solid'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import MapView, {Marker} from 'react-native-maps'

const DeliveryScreen = () => {
  return (
    <View className='bg-[#00CCBB] flex-1' style={styles.container}>
      <SafeAreaView className='z-50'>
        <View className='flex-row justify-between items-center p-5'>
          <TouchableOpacity>
            <XIcon color={'white'} size={30}/>
          </TouchableOpacity>
            <Text className='font-light text-white text-lg'>Order Help</Text>
        </View>

        <View className='bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md'>
          <View className='flex-row justify-between'>
            <View>
              <Text className='text-lg text-gray-400'>Estimated Arrival</Text>
              <Text className='text-4xl font-bold'>44-55 Minutes</Text>
            </View>
            <Animatable.Image
              source={require('../assets/giphy.gif')}
              animation="slideInUp"
              iterationCount={1}
              className='w-20 h-20'
            />
          </View>
          <Progress.Bar size={30} color='#00CCBB' indeterminate={true}/>

          <Text className='mt-3 text-gray-500'>
            Your Order is being prepared
          </Text>
        </View>
      </SafeAreaView>

      <MapView
        className='flex-1 -mt-10 z-0'
        mapType='mutedStandard'
        initialRegion={{
          latitude: -60.0375103,
          longitude: -3.059778,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >

      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight
  }
})

export default DeliveryScreen