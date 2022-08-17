import { Text, View, SafeAreaView, StyleSheet, StatusBar, Image, TextInput, Button, ScrollView } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native'
import {
    AdjustmentsIcon,
    ChevronDownIcon, SearchIcon, UserIcon
} from 'react-native-heroicons/solid'
import Categories from "../components/categories";
import FeaturedRow from "../components/featuredRow";
import {client} from '../lib/client'

function HomeScreen() {

    const navigation = useNavigation()
    const [featuredCategories, setFeaturedCategories] = useState([])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    useEffect(() => {
        let query = `
        *[_type == "featured"]{
            _id,
            name,
            short_description
          }
        `
        client.fetch(query).then(data => setFeaturedCategories(data))
    }, [])
    
    return (
        <SafeAreaView style={styles.container} className='bg-white pt-5'>
            <View className='flex flex-row items-center '>
                {/* Header */}
                <View className='ml-2'>
                    <Image
                        source={{
                            uri: 'https://links.papareact.com/wru'
                        }}
                        className='h7 w-7 bg-slate-300 p-4 rounded-full mr-2'
                    />
                </View>

                <View className='flex-1'>
                    <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
                    <View className='flex flex-row items-center'>
                        <Text className='text-xl font-bold'>
                            Current Location
                        </Text>
                        <ChevronDownIcon size={20} color='#00CCBB' />
                    </View>
                </View>

                <View className='mr-2'>
                    <UserIcon size={35} color='#00CCBB' />
                </View>

            </View>

            {/* Search */}
            <View className='flex flex-row ml-2 mb-2 mt-2 items-center'>
                <View className='bg-slate-300 h-[40px] flex flex-row items-center flex-1 p-2 rounded-sm'>
                    <SearchIcon color={'#fff'} size={25} className='mr-2'/>
                    <TextInput className='w-[90%] text-slate-600' placeholder="Restaurants and cuisines" keyboardType="default"/>
                </View>
                <View className='mr-8 ml-2' >
                    <AdjustmentsIcon color={'#00CCBB'} />
                </View>
            </View>

            {/* Body */}
            <ScrollView
            className='bg-slate-200'
            contentContainerStyle={{
                paddingBottom: 100,
            }}
            >
                {/* Categories */}
                <Categories/>

                {
                    featuredCategories.map((featuredCategory, i) => (
                        <React.Fragment key={'featured_row'+i}>
                            <FeaturedRow
                                id={featuredCategory._id}
                                title={featuredCategory.name}
                                description={featuredCategory.short_description}
                            />
                        </React.Fragment>
                    ))
                }
            </ScrollView>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    },
});

export default HomeScreen