import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { MainHeader } from '../../components/MainHeader'
import BannerCarousel from '../../components/BannerCarousel'
import MainCategories from '../../components/MainCategories'


export default function Home() {


  return (
    <View style={{ backgroundColor: "#f5f5f5", flex: 1, }}>
      <ScrollView stickyHeaderIndices={[0]}>
        <MainHeader />
        <BannerCarousel />
        <MainCategories />
      </ScrollView>
    </View>
  )
}