import { View, Text, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import productsGetis from '../../../assets/productsGetis'
import CartItem from '../../components/CartItem'
import { colors } from '../../Types'

const { height, width } = Dimensions.get("window")

export default function CartScreen() {
    return (
        <View>
            <FlatList data={productsGetis.slice(0, 5)}
                renderItem={({ item }) => (
                    <CartItem product={item} />
                )}
            />
            <View style={{ backgroundColor: "#fff", height: width * .13, width: height * .4, borderRadius: 10, marginHorizontal: 25, marginTop: 120 }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity style={{ flex: 2, backgroundColor: colors.mainColor, height: width * .13, justifyContent: "center", borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}>
                        <Text style={{ color: "#fff", textAlign: "center", fontSize: 15, fontWeight: 600 }}>Devam</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1 }}>
                        <Text style={{ color: colors.mainColor, textAlign: "center", fontSize: 15, fontWeight: 600 }}>₺24,00</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}