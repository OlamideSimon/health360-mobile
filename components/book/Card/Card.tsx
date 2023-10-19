import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { Image, Text, View } from 'react-native'

import { styles } from './card.styles'
import { images } from '../../../constants'

const Card = () => {
  return (
    <View style={styles.card}>
      <Image source={images.user2} />

      <View style={{ flex: 1 }}>
        <Text style={styles.title}>Doctor Olamide Simon</Text>
        <Text style={styles.profession}>Cardiologist</Text>
        <Text style={styles.experience}>+15 years of experience.</Text>
        <View>
          <Text style={styles.booking_text}>booking Periods</Text>
          <View style={styles.flex_container}>
            <View style={styles.flex_container}>
              <AntDesign name="calendar" color="#000" size={10} />
              <Text style={styles.booking_text}>Mon-Fri</Text>
            </View>
            <View style={styles.flex_container}>
              <AntDesign name="clockcircle" color="#000" size={10} />
              <Text style={styles.booking_text}>7am-9pm</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Card
