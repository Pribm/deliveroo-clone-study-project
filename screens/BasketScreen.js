import { View, Text, SafeAreaView, StyleSheet, StatusBar, Image, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { groupedBasketItems, selectBasketTotal, removeItemFromBasket } from '../features/basketSlice'
import { XCircleIcon } from 'react-native-heroicons/solid'
import { urlFor } from '../lib/client'



const BasketScreen = () => {

    const navigation = useNavigation()
    const dispatch = useDispatch()

    const items = useSelector(groupedBasketItems)
    const subtotal = useSelector(selectBasketTotal)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <SafeAreaView style={styles.container} className='bg-gray-100'>

            <View className='h-[80px] bg-white px-4 flex flex-row justify-between items-center'>
                <View />
                <View className='flex flex-col items-center'>
                    <Text className='font-bold text-base'>
                        Basket
                    </Text>
                </View>

                <TouchableOpacity
                onPress={() => navigation.goBack()}
                >
                    <XCircleIcon size={40} color='#00CCBB' />
                </TouchableOpacity>
            </View>

            <View className='flex flex-row bg-white items-center h-[60px] mt-4 mr-auto justify-between px-4'>
                <View className='mr-auto flex flex-row items-center'>
                    <Image
                        source={{
                            uri: 'https://links.papareact.com/wru'
                        }}
                        className='h7 w-7 bg-slate-300 p-4 rounded-full mr-2'
                    />
                    <Text>
                        Deliver in 50-75 min
                    </Text>
                </View>
                <View>
                    <Text className='text-teal-500'>
                        Change
                    </Text>
                </View>
            </View>

            <ScrollView className='mt-6'>
                {
                    items.map((item, i) => (
                        <View
                        key={'basket_dish'+i}
                        className='bg-white py-2 px-4 border-b-[1px] border-slate-100 flex flex-row items-center justify-between'>
                            <View className='flex flex-row items-center flex-1'>
                                <Text className='text-[#00CCBB]'>
                                    {item.quantity}x
                                </Text>
                                <Image
                                    source={{
                                        uri: urlFor(item.image).url()
                                    }}
                                    className='h-[50px] w-[50px] rounded-full mx-2'
                                />
                                <View className='w-[200px]'>
                                    <Text>{item.name}</Text>
                                </View>
                            </View>


                            <View className='flex flex-row items-center'>
                                <Text>
                                    $ {item.price}
                                </Text>
                                <View className='mr-2'/>
                                <Pressable
                                onPress={() => dispatch(removeItemFromBasket(item))}
                                >
                                    <Text className='text-teal-500 text-xs'>
                                    Remove
                                    </Text>
                                </Pressable>
                            </View>
                        </View>
                    )
                    )
                }
            </ScrollView>
            <View className='bg-white h-[200px] p-6'>
                <View className=' flex flex-row justify-between pb-2'>
                    <Text className='text-xs text-gray-400'>
                        Subtotal
                    </Text>
                    <Text className='text-xs text-gray-400'>
                        $ {subtotal}
                    </Text>
                </View>

                <View className=' flex flex-row justify-between pb-2'>
                    <Text className='text-xs text-gray-400'>
                        Delivery Fee
                    </Text>
                    <Text className='text-xs text-gray-400'>
                        $5.55
                    </Text>
                </View>

                <View className=' flex flex-row justify-between mb-6'>
                    <Text className='text-xs'>
                        Order Total
                    </Text>
                    <Text className='text-xs font-bold'>
                        $ {(parseFloat(subtotal)+parseFloat(5.55)).toFixed(2)}
                    </Text>
                </View>

                <Pressable
                    onPress={() => navigation.navigate('PreparingOrderScreen')}
                    android_ripple={{ color: 'white' }}
                    className='flex flex-row justify-center items-center bg-teal-500 h-[60px] rounded-md px-4'>
                    <View>
                        <Text className='text-white text-lg font-bold'>
                            Place Order
                        </Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    },
});

export default BasketScreen