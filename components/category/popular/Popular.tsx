import React from 'react'
import { FlatList, Image, Pressable, ScrollView, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import { styles } from './popular.styles'
import { images } from '../../../constants'
import { useRouter } from 'expo-router'

const Popular = () => {
  return (
    <View>
      <Text style={styles.header}>Popular Doctors</Text>
      <FlatList
        data={[...new Array(20)]}
        renderItem={() => <Card />}
        keyExtractor={(item, index) => `${index}`}
        contentContainerStyle={{ rowGap: 35, marginBottom: 20 }}
      />
    </View>
  )
}

const Card = () => {
  const router = useRouter()

  return (
    <Pressable onPress={() => router.push('/doctor/1')}>
      <View style={styles.card}>
        <Image source={images.user2} />

        <View style={{ flex: 1 }}>
          <View style={styles.rating_container}>
            <AntDesign name="star" size={15} color="#FFC127" />
            <Text style={{ color: '#fff' }}>5.0</Text>
          </View>

          <Text style={styles.title}>Doctor Olamide Simon</Text>
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
    </Pressable>
  )
}

export default Popular
