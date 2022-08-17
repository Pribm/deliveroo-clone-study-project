import { View, Text, StyleSheet, StatusBar, SafeAreaView, ScrollView, TouchableOpacity, Pressable, Animated } from 'react-native'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import RestaurantScreenHeader from '../components/RestaurantScreenHeader'
import { ChevronRightIcon, MinusCircleIcon, PlusCircleIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/solid'
import DishCard from '../components/DishCard'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { useSelector } from 'react-redux'

const RestaurantScreen = () => {

    const navigation = useNavigation()
    const items = useSelector(selectBasketItems)
    const basketTotal = useSelector(selectBasketTotal)

    const { params: {
        _id,
        name,
        rating,
        address,
        imgUrl,
        short_description,
        type,
        long,
        lat,
        dishes
    }
    } = useRoute()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    useEffect(() => {
        if(items.length >= 1){
            slideInBasketButton()
        }
        if(items.length === 0){
            slideOutBasketButton()
        }
    }, [items])

    const slideAnim = useRef(new Animated.Value(-500)).current;

    const slideInBasketButton = () => {
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false
        }).start()
    }

    const slideOutBasketButton = () => {
        Animated.timing(slideAnim, {
            toValue: -500,
            duration: 300,
            useNativeDriver: false
        }).start()
    }

    return (
        <SafeAreaView style={styles.container} className='bg-gray-200 relative'>
            <RestaurantScreenHeader
                id={_id}
                name={name}
                image={imgUrl}
                description={short_description}
                rating={rating}
                address={address}
                type={type}
                long={long}
                lat={lat}
            />
            <TouchableOpacity className='bg-white flex flex-row justify-between items-center p-4 border-t border-b border-slate-400'>
                <View className='flex justify-start flex-row items-center'>
                    <QuestionMarkCircleIcon size={15} color='#ccc'/>
                    <View className='ml-2'/>
                    <Text>Have Food Allergy?</Text>
                </View>
                <View>
                    <ChevronRightIcon size={20} color='#00CCBB' />
                </View>

            </TouchableOpacity>
            <Text className='font-bold text-base p-4'>
                Menu
            </Text>
            <ScrollView className='flex-1 bg-white'>
                {
                    dishes?.map((dish, i) => (
                        <React.Fragment key={'dish_card' + i}>
                            <DishCard dish={dish}/>
                        </React.Fragment>
                    )
                    )
                }
                <View className='h-[150px]'/>
            </ScrollView>

            {
                <Animated.View
                style={[
                    styles.basketButton,
                    {
                        bottom: slideAnim
                    }
                ]}
                className='h-[150px] absolute bottom-0 w-[100%] flex flex-row items-center p-4'
                >
                    <Pressable
                    onPress={() => navigation.navigate('Basket')}
                    android_ripple={{ color: 'cyan' }}
                    className='flex-1 flex flex-row justify-between items-center bg-teal-500 h-[60%] rounded-md px-4'>
                        <View className='bg-teal-700 p-2 px-3 rounded-md'>
                            <Text className='text-white text-lg font-bold'>
                                {items.length}
                            </Text>
                        </View>
                        <View>
                            <Text className='text-white text-lg font-bold'>
                                View basket
                            </Text>
                        </View>
                        <View>
                            <Text className='text-white text-lg font-bold'>
                                $ {basketTotal}
                            </Text>
                        </View>
                    </Pressable>
                </Animated.View>
            }

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    },
    basketButton: {

    }
});

export default RestaurantScreen