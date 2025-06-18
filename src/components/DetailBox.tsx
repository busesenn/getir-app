import { View, Text } from 'react-native'
import React from 'react'
import { colors } from '../Types'

interface DetailBoxProps {
    price: number,
    name: string,
    quantity: string
}

export default function DetailBox({ price, name, quantity }: DetailBoxProps) {
    return (
        <View style={{ width: "100%", backgroundColor: "#fff", alignItems: "center", }}>
            <Text style={{ color: colors.mainColor, fontWeight: "bold", marginTop: 12, fontSize: 18 }}>₺{price}</Text>
            <Text style={{ fontWeight: 600, fontSize: 16, marginTop: 12 }}>{name}</Text>
            <Text style={{ color: colors.gri, fontWeight: 600, marginTop: 8, paddingBottom: 20 }}>{quantity}</Text>
        </View>


    )
}