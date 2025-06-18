import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryFilter from '../../components/CategoryFilter'
import TypeFilter from '../../components/TypeFilter'
import ProductContainer from '../../components/ProductContainer'


export default function CategoryScreen() {
    return (
        <ScrollView>
            <CategoryFilter />
            <TypeFilter />
            <ProductContainer />
        </ScrollView>
    )
}