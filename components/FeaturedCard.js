import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { LocationMarkerIcon, StarIcon } from 'react-native-heroicons/solid'
import { urlFor } from '../lib/client'
import { useNavigation } from '@react-navigation/native'

const FeaturedCard = ({
    id,
    name,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
}) => {

  const navigation = useNavigation()

  return (
    <TouchableOpacity
    onPress={() => navigation.navigate('Restaurant', {
      id,
      name,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    })}
    style={styles.card}
    className='rounded-sm bg-white shadow-sm overflow-hidden'>
        <Image source={{
            uri: urlFor(imgUrl).url()
        }}
        style={styles.image}
        />
      <View className='pl-3 pt-1 flex-1 '>
        <Text className='text-black font-bold text-lg'>{title}</Text>
        <View className='flex flex-row items-center'>
            <StarIcon size={15} color={'#BBDD99'}/>
            <Text className='text-xs text-[#BBDD99]'>{rating}</Text>
            <Text className='text-xs text-slate-500'> 	&#8226; {genre}</Text>
        </View>

        <View className='flex flex-row items-start mt-1 overflow-hidden h-[25px] w-[100%]'>
            <LocationMarkerIcon size={20} color={'#CCC'}/>
            <Text className='ml-1 text-xs text-slate-400'>Nearby</Text>
            <Text className='text-sm text-slate-500 flex-1 text-ellipsis resize-x whitespace-nowrap'> &#8226; {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 130,
    },
    card: {
        height: 230,
        width: 250,
        marginEnd: 12,
    }
})

export default FeaturedCard