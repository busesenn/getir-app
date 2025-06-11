import { View, Text, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { MainHeader } from '../../components/MainHeader'
import BannerCarousel from '../../components/BannerCarousel'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
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