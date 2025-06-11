import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CategoryFilter from '../../components/CategoryFilter'
import TypeFilter from '../../components/TypeFilter'
import ProductItem from '../../components/ProductItem'
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