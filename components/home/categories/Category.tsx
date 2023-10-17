import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './category.styles'

const Category = () => {
  return (
    <View>
      <Text style={styles.title}>Consultation category</Text>
      <Text style={styles.description}>
        Which specialist would you like to connect with today?
      </Text>
    </View>
  )
}

export default Category
