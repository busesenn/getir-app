import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../Types'
import Entypo from '@expo/vector-icons/Entypo';

export default function ExplanationBox() {
    const [details, setDetails] = useState<string[]>([
        "Sütlü kıtır çikolata ve badem parçacıklarıyla kaplı vanilya lezzeti", "İçindekiler", "Besin Değerleri"
        , "Kullanım", "Ek Bilgiler"])

    const TextComponent = ({ detail, index }: { detail: string, index: number }) => {
        return (
            <View style={{ paddingVertical: 16, borderBottomWidth: index === details.length - 1 ? 0 : .4, borderBottomColor: "lightgray", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text style={{ fontSize: index === 0 ? 13 : 14, color: index === 0 ? "#000" : "#687482", fontWeight: index === 0 ? 400 : 500 }}>{detail}</Text>
                {index != 0 && (
                    <Entypo name="chevron-down" size={24} color="#9f9f9f" />
                )}
            </View>
        )
    }

    return (
        <View>
            <Text style={{ paddingHorizontal: 10, paddingVertical: 14, color: colors.gri, fontWeight: 600 }}>Detaylar</Text>
            <View style={{ backgroundColor: "#fff", width: "100%", height: 280, paddingHorizontal: 16, paddingVertical: 8, marginTop: 10 }}>
                {details.map((item, index) => (
                    // <View>
                    //     <Text>{item}</Text>
                    // </View>
                    <TextComponent key={index} index={index} detail={item} />
                ))}
            </View>

        </View>
    )
}