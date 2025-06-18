import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { colors } from '../Types'

export default function CartButton() {
    const { height, width } = Dimensions.get("window")

    return (
        <TouchableOpacity style={{ width: "95%", height: height * .06, backgroundColor: colors.lightPurple, position: "absolute", bottom: 40, justifyContent: "center", alignItems: "center", borderRadius: 10, marginHorizontal: "2%", }}>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 15 }}>Sepete Ekle</Text>
        </TouchableOpacity>
    )
}