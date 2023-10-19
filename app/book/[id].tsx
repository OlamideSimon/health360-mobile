import { Stack, useRouter } from 'expo-router'
import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import ScreenHeaderBtn from '../../components/header/ScreenHeaderBtn'
import { COLORS, images } from '../../constants'
import { AntDesign } from '@expo/vector-icons'

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

      <View style={{ flex: 1, paddingHorizontal: 24, paddingTop: 20, rowGap: 40 }}>
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

        <View>
          <Text style={styles.booking_time_header}>book a time for your session</Text>
        </View>

        <View style={styles.footer_container}>
          <Pressable style={styles.bookBtn} onPress={() => router.push('/book/1')}>
            <Text style={styles.bookBtnText}>Proceed To Payment</Text>
          </Pressable>
        </View>
      </View>
    </>
  )
}

export default Book

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#EFF4FF',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    columnGap: 35,
    marginBottom: 40,
  },
  title: {
    color: '#000',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 20 /* 142.857% */,
    letterSpacing: 0.07,
    textTransform: 'capitalize',
  },
  profession: {
    color: '#000',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20 /* 166.667% */,
    letterSpacing: 0.06,
    textTransform: 'capitalize',
  },
  experience: {
    color: '#000',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20 /* 166.667% */,
    letterSpacing: 0.06,
    textTransform: 'capitalize',
  },
  booking_text: {
    fontSize: 8,
    color: '#000',
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: 0.04,
    textTransform: 'capitalize',
  },
  flex_container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  booking_time_header: {
    color: '#545559',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 20 /* 125% */,
    letterSpacing: 0.08,
    textTransform: 'capitalize',
  },
  footer_container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  bookBtn: {
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    width: 342,
  },
  bookBtnText: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
  },
})
