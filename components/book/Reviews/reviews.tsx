import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { styles } from './reviews.styles'
import { images } from '../../../constants'

const Reviews = () => {
  return (
    <View>
      <Text style={styles.review_title}>Reviews From Other Clients</Text>
      <FlatList
        data={[...new Array(6).keys()]}
        renderItem={() => <Card />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 15, marginTop: 30, marginBottom: 50, height: 173 }}
      />
    </View>
  )
}

const Card = () => (
  <View style={styles.card}>
    <View style={styles.top_container}>
      <Image source={images.user2} style={styles.card_image} />
      <Text style={styles.card_name}>Kelly Adebisi</Text>
      <Text style={styles.sessions}>15 session booked.</Text>
    </View>
    <View style={styles.bottom_container}>
      <Text style={styles.review}>
        “i have had a wonderful time with dr junaid he is well experienced and understands
        his work as a professional.”
      </Text>
    </View>
  </View>
)

export default Reviews
