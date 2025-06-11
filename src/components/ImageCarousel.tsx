import { View, Text, FlatList, Image, Dimensions } from 'react-native'
import React from 'react'


const { height, width } = Dimensions.get("window")

export default function ImageCarousel({ images }: { images: string[] }) {
    return (
        <FlatList
            data={images}
            style={{ width: width * .5, height: height * .21 }}
            renderItem={(item) => (
                <Image source={{ uri: item.item }} style={{ width: width * .5, height: height * .21 }} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={width}
            snapToAlignment={"center"}
            decelerationRate={"fast"}
        />
    )
}