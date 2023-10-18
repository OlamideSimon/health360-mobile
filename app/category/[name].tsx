import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import AppContainer from '../../components/AppContainer'
import Available from '../../components/category/Available/Available'
import Popular from '../../components/category/popular/Popular'

const Category = () => {
  const params = useLocalSearchParams()

  const name = params.name.toString()[0].toUpperCase() + params.name.slice(1)

  return (
    <AppContainer title={name}>
      <View style={{ flex: 1, paddingTop: '5%', paddingHorizontal: 24, gap: 60 }}>
        <Available />
        <Popular />
      </View>
    </AppContainer>
  )
}

export default Category
