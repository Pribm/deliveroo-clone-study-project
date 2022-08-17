import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import { urlFor } from '../lib/client'
import { formatCurrency } from 'react-native-format-currency'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, removeFromBasket, selectBasketItems } from '../features/basketSlice'

const DishCard = ({ dish }) => {

    const [valueFormattedWithSymbol, valueFormattedWithoutSymbol, symbol] = formatCurrency({ amount: Number(dish?.price), code: { code: "AUD", name: "Australia Dollar" } })
    const [isPressed, setPressed] = useState(false)

    const dispatch = useDispatch()
    const items = useSelector(selectBasketItems)

    const addItemToBasket = () => {
        dispatch(addToBasket(dish))
    }

    const removeItemFromBasket = () => {
        if(!items.length > 0) return;

        dispatch(removeFromBasket(dish))
    }

    return (
        <TouchableOpacity
        onPress={() => setPressed(!isPressed)}
        className='flex flex-row p-4 justify-start bg-white border-b-[1px] border-slate-200'>
            <View className='flex-1 mr-2'>
                <Text className='font-bold'>{dish?.name}</Text>
                <Text className='text-gray-400 text-xs mt-1'>{dish?.short_description}</Text>
                <Text className='text-gray-400 text-sm mt-1'>$ {valueFormattedWithSymbol}</Text>

                {
                    isPressed && (
                        <View className='flex flex-row items-center mt-2 '>
                            <TouchableOpacity
                            onPress={removeItemFromBasket}
                            className='mr-2'>
                                <MinusCircleIcon size={30} color={!items.length ? '#CCC' : '#00CCBB'} />
                            </TouchableOpacity>
          
                            <Text>
                                {items.filter(item => item._id === dish._id).length}
                            </Text>
                            <TouchableOpacity
                            onPress={addItemToBasket}
                            className='ml-2'>
                                <PlusCircleIcon size={30} color='#00CCBB' className='ml-2' />
                            </TouchableOpacity>
                        </View>
                    )
                }
            </View>
            <Image
                className='w-[80px] h-[80px]'
                source={{
                    uri: urlFor(dish?.image).url()
                }}
            />
        </TouchableOpacity>
    )
}

export default DishCard