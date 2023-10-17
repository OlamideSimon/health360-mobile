import React from 'react'
import { Text, View } from 'react-native'

import { styles } from './services.styles'

const Services = () => {
  return (
    <View>
      <View style={styles.service_card}>
        <Text style={styles.card_title}>Health ways to exercise your body.</Text>
        <Text style={styles.card_description}>
          Health is wealth and here are some few tips to keep you healthy.
        </Text>
      </View>
    </View>
  )
}

export default Services
