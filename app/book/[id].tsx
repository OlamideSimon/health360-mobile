import { Stack, useRouter } from 'expo-router'
import React from 'react'
import { Dimensions, ScrollView, Text, View } from 'react-native'
import ScreenHeaderBtn from '../../components/header/ScreenHeaderBtn'
import { images } from '../../constants'
import Card from '../../components/book/Card/Card'
import Footer from '../../components/book/Footer/Footer'
import { FontAwesome5 } from '@expo/vector-icons'
import Reviews from '../../components/book/Reviews/reviews'
import DateTIme from '../../components/book/DateTimePicker/DateTImePicker'

const Book = () => {
  const router = useRouter()
  return (
    <>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: 'Appointment Booking',
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={images.arrowLeft}
              dimension={20}
              handlePress={() => {
                router.back()
              }}
            />
          ),
        }}
      />

      <View style={{ flex: 1, paddingHorizontal: 24, paddingTop: 20, rowGap: 20 }}>
        <Card />

        <DateTIme />

        <View>
          <Text
            style={{
              fontSize: 14,
              lineHeight: 26,
              textDecorationLine: 'underline',
              letterSpacing: 0.07,
              marginBottom: 10,
            }}
          >
            Rate per hour:
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <FontAwesome5 name="dollar-sign" size={13} color="#292D3280" />
            <Text style={{ color: '#111' }}>10$/hr</Text>
          </View>
        </View>

        <Reviews />
        <Footer />
      </View>
    </>
  )
}

export default Book
