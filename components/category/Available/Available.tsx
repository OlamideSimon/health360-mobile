import React from 'react'
import { FlatList, Image, Pressable, Text, View } from 'react-native'

import { styles } from './available.styles'
import { useRouter } from 'expo-router'
import { images } from '../../../constants'
import { AntDesign } from '@expo/vector-icons'

const Available = () => {
  const router = useRouter()
  return (
    <View style={{ gap: 15 }}>
      <Text style={styles.heading}>Currently Available</Text>

      <FlatList
        horizontal
        data={[...new Array(10).keys()]}
        renderItem={() => <Card />}
        contentContainerStyle={{ gap: 17 }}
      />
    </View>
  )
}

const Card = () => {
  const router = useRouter()

  return (
    <View style={styles.card_container}>
      <View style={styles.card}>
        <Image
          source={images.heart}
          style={{ width: 15, height: 15, marginLeft: 'auto' }}
        />

        <View style={{ marginTop: 20, gap: 6 }}>
          <View style={styles.rating_container}>
            {/* <Image source={images.heart} style={{ width: 15, height: 15 }} /> */}
            <AntDesign name="star" size={15} color="#FFC127" />
            <Text>5.0</Text>
          </View>

          <Text style={styles.doc_name}>Dr. Olamide Simon</Text>
          <Text style={styles.profession}>Cardiologist</Text>
          <Text style={styles.experience}>+15 years of experience.</Text>
          <View>
            <Text style={styles.booking_text}>booking Periods</Text>
            <View style={styles.flex_container}>
              <View style={styles.flex_container}>
                <AntDesign name="calendar" color="#fff" size={10} />
                <Text style={styles.booking_text}>Mon-Fri</Text>
              </View>
              <View style={styles.flex_container}>
                <AntDesign name="clockcircle" color="#fff" size={10} />
                <Text style={styles.booking_text}>7am-9pm</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Pressable>
        <Text style={styles.button}>View info</Text>
      </Pressable>
    </View>
  )
}

export default Available
