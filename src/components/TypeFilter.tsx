import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../Types'

const { height, width } = Dimensions.get("window")

const TypeBox = ({ setCat, item, active }: { item: string, active: string, setCat: any }) => {
    return (
        <TouchableOpacity style={[{
            paddingHorizontal: 10, marginRight: 12, flexDirection: "row", alignItems: "center", borderRadius: 6, height: height
                * .045
        }, item === active ? { backgroundColor: colors.mainColor } : { borderColor: "#f0eff7", borderWidth: 1.3 }]} onPress={() => setCat(item)}>
            <Text style={[{ fontSize: 13, color: colors.lightPurple, fontWeight: 600, paddingHorizontal: 12 }, item === active && { color: "#fff" }]}>{item}</Text>
        </TouchableOpacity>
    )
}

export default function TypeFilter() {
    const [category, setCategory] = useState<String>("Birlikte İyi Gider")
    return (
        <ScrollView showsHorizontalScrollIndicator={false} bounces={true} horizontal style={{ width: "100%", backgroundColor: "#fff", height: height * .07, flexDirection: "row", paddingVertical: height * .014, paddingHorizontal: 12, borderBottomColor: "lightgrey", borderBottomWidth: 1, }}>
            {[
                "Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"
            ].map((item) => (
                <TypeBox setCat={setCategory} item={item} key={item} active={category} />
            ))}
        </ScrollView>
    )
}