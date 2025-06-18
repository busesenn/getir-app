import { View, Text, ScrollView, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { Category } from './MainCategories'
import categoriesGetir from '../../assets/categoriesGetir'


const { width, height } = Dimensions.get("window")

const CategoryBox = ({ item }: { item: Category }) => {
    return (
        <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 9 }}>
            <Text style={{ fontSize: 14, fontWeight: 600, color: "white" }}>{item.name}</Text>
        </View>
    )
}


export default function CategoryFilter({ category }: { category: Category }) {
    const [categories, setCategories] = useState<Category[]>(categoriesGetir)
    return (
        <ScrollView showsHorizontalScrollIndicator={false} bounces={true} horizontal style={{ width: "100%", backgroundColor: "#7849f7", height: height * .055 }}>
            {
                categories.map((item) => (
                    <CategoryBox item={item} key={item.id} />
                ))
            }
        </ScrollView>
    )
}