import { Text, TouchableOpacity, Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { urlFor } from '../lib/client'

const CategoryCard = ({id, imgUrl, title}) => {
  return (
    <TouchableOpacity style={styles.card} className='overflow-hidden'>
        <Image
        source={{
            uri: urlFor(imgUrl).url()
        }}
        style={styles.image}
        />
        <View className='bg-gray-800 w-[100%] h-[100%] p-2 rounded-md opacity-20 absolute bottom-0 right-0'>
          
        </View>
      <Text className='p-2 absolute rounded-b-md text-white bottom-0 font-bold bg-[#00000060] w-[100%]'>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    image: {
        width: 80,
        height: 80,
        borderRadius: 5,
    },
    text: {
        position: 'absolute',
        bottom: 0,
        color: 'white',
        fontWeight: 'bold'
    },
    card: {
        marginEnd: 10
    }
})


export default CategoryCard