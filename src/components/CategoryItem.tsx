import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import { Category } from './MainCategories'
import { useNavigation } from '@react-navigation/native'

const { width, height } = Dimensions.get("window")

interface categoryItemProps {
    item: Category
}

export default function CategoryItem({ item }: categoryItemProps) {
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={{ width: width * .24, height: width * .24, alignItems: "center", justifyContent: "space-between", marginTop: 10 }} onPress={() => {
            navigation.navigate("CategoryScreen")
        }}>
            <Image source={{ uri: item.src }} style={{ width: width * .18, height: width * .18, borderRadius: 8 }} />
            <Text style={{ fontSize: 12, color: "#616161", fontWeight: 500 }}>{item.name}</Text>
        </TouchableOpacity>
    )
}