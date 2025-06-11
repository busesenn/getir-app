import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { getFocusedRouteNameFromRoute, useNavigation } from '@react-navigation/native'
import Entypo from '@expo/vector-icons/Entypo';
import ImageCarousel from '../../components/ImageCarousel';
import { colors } from '../../Types';
import { Product } from '../../components/ProductItem';

export default function ProductDetails({ props }: any) {
    const navigation = useNavigation()

    const [product, setProduct] = useState<Product>()

    useEffect(() => {
        setProduct(props?.route.params.product
        )
    }, [])
    console.log("product", product);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity style={{ marginLeft: -10 }} onPress={() => (
                    navigation.goBack()
                )}>
                    <Entypo name="cross" size={28} color="white" />
                </TouchableOpacity>
            )
        })
    }, [])

    // if (!product) {
    //     return (
    //         <ActivityIndicator color={colors.mainColor} style={{ marginTop: 20 }} />
    //     )
    // }

    return (
        <View>
            <ImageCarousel images={product?.images} />
        </View>
    )
}