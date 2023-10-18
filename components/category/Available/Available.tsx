import React from 'react'
import { FlatList, Image, Pressable, Text, View } from 'react-native'

import { styles } from './available.styles'
import { useRouter } from 'expo-router'
import { images } from '../../../constants'

const Available = () => {
  const router = useRouter()
  return (
    <View style={{ gap: 15 }}>
      <Text style={styles.heading}>Currently Available</Text>

      <FlatList
        horizontal
        data={[...new Array(10).keys()]}
        renderItem={() => (
          <View style={styles.card_container}>
            <View style={styles.card}>
              <Image
                source={images.heart}
                style={{ width: 15, height: 15, marginLeft: 'auto' }}
              />

              <View style={{ marginTop: 20, gap: 6 }}>
                <View style={styles.rating_container}>
                  <Image source={images.heart} style={{ width: 15, height: 15 }} />
                  <Text>5.0</Text>
                </View>

                <Text style={styles.doc_name}>Dr. Olamide Simon</Text>
                <Text style={styles.profession}>Cardiologist</Text>
                <Text style={styles.experience}>+15 years of experience.</Text>
                <View>
                  <Text style={styles.booking_text}>booking Periods</Text>
                  <View style={styles.flex_container}>
                    <View style={styles.flex_container}>
                      <Image source={images.calendar} style={styles.booking_image} />
                      <Text style={styles.booking_text}>Mon-Fri</Text>
                    </View>
                    <View style={styles.flex_container}>
                      <Image source={images.clock} style={styles.booking_image} />
                      <Text style={styles.booking_text}>Mon-Fri</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <Pressable>
              <Text style={styles.button}>View info</Text>
            </Pressable>
          </View>
        )}
        contentContainerStyle={{ gap: 17 }}
      />
    </View>
  )
}

export default Available
