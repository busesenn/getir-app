import { View, Text, FlatList, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../Types'


const { height, width } = Dimensions.get("window")

export default function ImageCarousel({ images }: { images: string[] }) {

    const [activeIndex, setActiveIndex] = useState(0)
    const onViewRef = React.useRef(({ vieawableItems }) => {
        if (Array.isArray(vieawableItems) && vieawableItems.length > 0) {
            setActiveIndex(vieawableItems[0].index || 0)
        }
    })

    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })

    return (
        <View style={{ alignItems: "center", width: "100%", backgroundColor: "#FFF", height: height * .25, paddingTop: 25 }}>
            <FlatList
                data={images}
                style={{ width: width * .5, height: height * .21 }}
                renderItem={(item) => (
                    <Image source={{ uri: item.item }} style={{ width: width * .5, height: height * .21 }} resizeMode='stretch' />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={width * .5}
                pagingEnabled
                snapToAlignment={"center"}
                decelerationRate={"fast"}
                viewabilityConfig={viewConfigRef.current}
                onViewableItemsChanged={onViewRef.current}
            />
            <View style={{ flexDirection: "row", alignItems: "center", width: 30, height: 12, justifyContent: "space-around" }}>
                {images.map((image, index) => (
                    <View key={index} style={[{ width: 8, height: 8, borderRadius: 20, backgroundColor: activeIndex === index ? colors.mainColor : "#f2f0fd" }]}>
                    </View>
                ))}
            </View>
        </View >
    )
}