import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../Types'
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';


const { height, width } = Dimensions.get("window")

export interface Product {
    id: string,
    image: string,
    images: string[],
    name: string,
    miktar: string,
    fiyat: number,
    fiyatIndirimli?: number
}
interface ProductItemType {
    item: Product
}


export default function ProductItem({ item }: { item: Product }) {
    const navigation = useNavigation()

    return (
        <TouchableOpacity style={{ width: width * .28, marginTop: 12, height: height * .24, marginLeft: 12, marginBottom: 6, }} onPress={() => {
            navigation.navigate("ProductDetails", { product: item })
        }}>
            <Image source={{ uri: item.image }} style={{ width: width * .28, height: width * .24, borderRadius: 12, borderWidth: .2, borderColor: "gray" }} />
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                <Text style={{ fontSize: 11.4, color: colors.gri, textDecorationLine: "line-through", }}>{"\u20BA"} <Text>{item.fiyat}</Text></Text>
                <Text style={{ color: colors.mainColor, fontWeight: "bold", fontSize: 12, marginLeft: 4 }}>{"\u20BA"}<Text>{item.fiyatIndirimli}</Text></Text>
            </View>
            <Text style={{ fontSize: 13, fontWeight: 600, marginTop: 5 }}>{item.name}</Text>
            <Text style={{ color: colors.gri, fontSize: 12, marginTop: 4, fontWeight: 500 }}>{item.miktar}</Text>
            <View style={{ width: 30, height: 30, borderWidth: .3, borderColor: "lightgray", backgroundColor: "#fff", position: "absolute", right: -6, top: -6, borderRadius: 6, alignItems: "center", justifyContent: "center", shadowRadius: 3.8, shadowOpacity: .1 }}>
                <Entypo name="plus" size={22} color={colors.mainColor} />
            </View>
        </TouchableOpacity>
    )
}