import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import FeaturedCard from './FeaturedCard'
import { ArrowRightIcon } from 'react-native-heroicons/solid'
import { client } from '../lib/client'


const FeaturedRow = ({id, title, description}) => {

  const [restaurants, setRestaurants] = useState([])

  React.useEffect(() => {
    const query = `
    *[_type == "featured" && _id ==  $id]{
      ...,
      restaurants[]->{
        ...,
        'type': type->name,
        dishes[]->{_id, name, price, image, short_description}
      }
    }[0]
    `
    client.fetch(query,{id}).then(data => setRestaurants(data?.restaurants))
  }, [])

  return (
    <View className='ml-4 mt-4'>
      <View className='mb-3 flex flex-row items-center justify-between'>
        <View>
          <Text className='text-xl font-bold'>{title}</Text>
          <Text className='text-gray-500 text-xs'>{description}</Text>
        </View>

        <TouchableOpacity className='mr-8'>
          <ArrowRightIcon size={25} color={'#00CCBB'} />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal
        showsHorizontalScrollIndicator={false}
      >
        {
          restaurants.map((
            {
              _id,
              name,
              rating,
              address,
              image,
              short_description,
              type,
              long,
              lat,
              dishes
            }, i) => (
            <React.Fragment key={'featuredCard'+i}>
              <FeaturedCard
                id={_id}
                name={name}
                imgUrl={image}
                title={name}
                rating={rating}
                genre={type}
                address={address}
                short_description={short_description}
                dishes={dishes}
                long={long}
                lat={lat}
              />
            </React.Fragment>
          ))
        }     
      </ScrollView>
    </View>
  )
}

export default FeaturedRow