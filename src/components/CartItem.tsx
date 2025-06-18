import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import { Product } from './ProductItem'
import { colors } from '../Types'

interface CartItemProps {
    product: Product
}

const { width, height } = Dimensions.get("window")

export default function CartItem({ product }: CartItemProps) {
    return (
        <View style={{
            height: height * .13, paddingHorizontal: width * .04, backgroundColor: "#fff", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottomWidth: .5, borderBottomColor: "lightgray"
        }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={{ uri: product.image }} style={{ width: height * .09, height: height * .09, borderWidth: .5, borderColor: "lightgray", borderRadius: 10 }} />
                <View style={{ marginLeft: 8 }}>
                    <Text style={{ fontSize: 13, fontWeight: 600, maxWidth: width * .44 }}>{product.name}</Text>
                    <Text style={{ fontSize: 12, color: colors.gri, marginTop: 3, fontWeight: 600 }}>{product.miktar}</Text>
                    <Text style={{ color: colors.mainColor, fontWeight: "bold", marginTop: 6, fontSize: 15 }}>₺{product.fiyat}</Text>
                </View>
            </View>

            <View style={{ flexDirection: "row", width: width * .21, borderWidth: .5, borderColor: "lightgray", borderRadius: 10, height: height * .037, justifyContent: "space-around", alignItems: "center", shadowOpacity: .4, shadowColor: "gray" }}>
                <View style={{ flex: 1, alignItems: "center" }}>
                    <Text>-</Text>
                </View>
                <View style={{ flex: 1, alignItems: "center", backgroundColor: colors.mainColor, height: height * .037, justifyContent: "center", }}>
                    <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 12 }}>2</Text>
                </View>
                <View style={{ flex: 1, alignItems: "center" }}>
                    <Text>+</Text>
                </View>
            </View>
        </View>
    )
}