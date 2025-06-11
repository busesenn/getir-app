import { View, Text } from 'react-native'
import React from 'react'
import ProductItem from './ProductItem'
import productsGetis from '../../assets/productsGetis'

export default function ProductContainer() {
    return (
        <View>
            <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#fff", }}>
                {
                    productsGetis.slice(0, 2).map((item) => (
                        <ProductItem key={item.id} item={item} />
                    ))
                }
            </View>
            <Text style={{ fontWeight: "bold", color: "gray", padding: 14 }}>Çubuk</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", backgroundColor: "#fff", paddingVertical: 10, alignItems: "center" }}>
                {
                    productsGetis.slice(2).map((item) => (
                        <ProductItem key={item.id} item={item} />
                    ))
                }
            </View>
        </View>
    )
}