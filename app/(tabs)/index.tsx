import React from 'react'
import { View } from 'react-native'

import AppContainer from '../../components/AppContainer'
import Header from '../../components/home/header/header'
import Services from '../../components/home/services/services'
import Category from '../../components/home/categories/Category'

const Home = () => {
  return (
    <AppContainer hideTitle hideBackButton>
      <View style={{ flex: 1, paddingTop: '20%', paddingHorizontal: 20, gap: 40 }}>
        <Header />
        <Services />
        <Category />
      </View>
    </AppContainer>
  )
}

export default Home
