import { View, Text } from 'react-native'
import React, { useState } from 'react'
import CategoryItem from './CategoryItem'
import categoriesGetir from '../../assets/categoriesGetir'

export interface Category {
    id: string,
    name: string,
    src: string,
    subCategories: string[]
}

export default function MainCategories() {
    const [categories, setCategories] = useState<Category[]>(categoriesGetir)

    return (
        <View>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                {
                    categories.map((item) => (
                        <CategoryItem key={item.id} item={item} />
                    ))
                }
            </View>
        </View>
    )
}