import React from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'
import AppContainer from '../../components/AppContainer'

import { styles } from './index.styles'
import { images } from '../../constants'

const Index = () => {
  return (
    <AppContainer hideHeader>
      <SafeAreaView style={{ flex: 1, paddingTop: '20%', paddingHorizontal: 20 }}>
        <View style={styles.header_container}>
          <View>
            <Text>Hi Simon</Text>
            <Text></Text>
          </View>

          <Image style={styles.header_image} source={images.apple} alt="notifications" />
        </View>

        <View></View>
      </SafeAreaView>
    </AppContainer>
  )
}

export default Index
