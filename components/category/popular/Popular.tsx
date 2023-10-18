import React from 'react'
import { Text, View } from 'react-native'

import { styles } from './popular.styles'

const Popular = () => {
  return (
    <View>
      <Text style={styles.header}>Popular Doctors</Text>
      {[
        ...new Array(20).map((_, index) => <View key={index} style={styles.card}></View>),
      ]}
    </View>
  )
}

export default Popular
