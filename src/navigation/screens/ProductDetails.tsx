import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Entypo from '@expo/vector-icons/Entypo';
import { Product } from '../../components/ProductItem';
import { colors } from '../../Types';
import ImageCarousel from '../../components/ImageCarousel';
import DetailBox from '../../components/DetailBox';
import ExplanationBox from '../../components/ExplanationBox';
import CartButton from '../../components/CartButton';


export default function ProductDetails({ props }: any) {
    const navigation = useNavigation()

    const [product, setProduct] = useState<Product>()

    const route = useRoute()
    useEffect(() => {
        const { product } = route.params
        setProduct(product)
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

    if (!product) {
        return (
            <ActivityIndicator color={colors.mainColor} style={{ marginTop: 20 }} />
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <ImageCarousel images={product?.images} />
                <DetailBox price={product.fiyat} name={product.name} quantity={product.miktar} />
                <ExplanationBox />
            </ScrollView>
            <CartButton />
        </View>
    )
}