import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import { client } from '../lib/client'

const Categories = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const query =  `
        *[_type == "category"]{
            name,
            _id,
            image
          }
        `
        client.fetch(query).then(data => setCategories(data))
    }, [])

    return (
        <ScrollView horizontal
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
            showsHorizontalScrollIndicator={false}
        >
            {
                categories.map((category, i) => (
                    <React.Fragment key={'category_card'+i}>
                        <CategoryCard id={category._id} imgUrl={category.image} title={category.name}/>
                    </React.Fragment>
                ))
            }
        </ScrollView>
    )
}

export default Categories