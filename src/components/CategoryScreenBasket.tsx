import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { colors } from '../Types';


const { height, width } = Dimensions.get("window")

export default function CategoryScreenBasket() {
    const navigation = useNavigation()

    return (
        <TouchableOpacity style={{ width: width * .22, height: 33, backgroundColor: "#fff", borderRadius: 9, flexDirection: "row", alignItems: "center" }} onPress={() => {
            navigation.navigate("CartScreen")
        }}>
            <View style={{ marginLeft: 5 }}>
                <FontAwesome5 name="shopping-basket" size={20} color={colors.mainColor} />
            </View>
            <View style={{ height: 33, width: 6, backgroundColor: "#fff" }} />
            <View style={{ flex: 1, backgroundColor: "#f3efef", height: 33, borderTopRightRadius: 9, borderBottomRightRadius: 9, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ color: colors.mainColor, fontSize: 12, fontWeight: "bold" }}>₺24,00</Text>
            </View>
        </TouchableOpacity>
    )
}