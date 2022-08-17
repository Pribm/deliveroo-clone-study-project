import { View, Text, Image, TouchableOpacity, BackHandler } from 'react-native'
import React from 'react'
import { urlFor } from '../lib/client'
import { ChevronLeftIcon, LocationMarkerIcon, StarIcon } from 'react-native-heroicons/solid'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

const RestaurantScreenHeader = ({id, name, image, description, rating, address, type, long, lat}) => {

    const navigation = useNavigation()

    const handleBackButton = () => {
        navigation.goBack(null)
        return true
    }

  return (
    <View className={'bg-white flex-2 relative'}>
        <Image
        className='w-[100%] h-[200px] object-contain'
        source={{
            uri: urlFor(image).url()
        }}
        />

        <TouchableOpacity
        onPress={handleBackButton}
        className='w-[40px] h-[40px] rounded-full bg-white absolute flex justify-center items-center top-2 left-2'>
            <ChevronLeftIcon size={30} color='#00CCBB'/>
        </TouchableOpacity>
    
      <View className='p-2'>
        <Text className='text-2xl font-bold'>
            {name}
        </Text>

        <View className='flex flex-row items-center mt-1'>
            <StarIcon size={15} color={'#BBDD99'}/>
            <Text className='text-xs text-[#BBDD99]'>{rating}</Text>
            <Text className='text-xs text-slate-500'> 	&#8226; {type}</Text>

            <View className='ml-2'/>
            <LocationMarkerIcon size={20} color={'#CCC'}/>
            <Text className='text-sm text-slate-400'>Nearby</Text>
            <Text className='text-sm text-slate-500 flex-1 text-ellipsis resize-x whitespace-nowrap'> &#8226; {address}</Text>
        </View>

        <Text className='text-sm text-gray-500 mt-1'>
            {description}
        </Text>

      </View>
    </View>
  )
}

export default RestaurantScreenHeader