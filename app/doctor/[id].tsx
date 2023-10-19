import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import React from 'react'
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import AppContainer from '../../components/AppContainer'
import { COLORS, images } from '../../constants'
import ScreenHeaderBtn from '../../components/header/ScreenHeaderBtn'

const Doctor = () => {
  const router = useRouter()
  const params = useLocalSearchParams()

  return (
    <>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: 'Details',
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
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          {true ? (
            <Image source={images.user2} style={styles.image} />
          ) : (
            <View style={{ ...styles.image, backgroundColor: '#D9D9D9' }} />
          )}
          <Text style={styles.title}>Doctor Simon Olamide</Text>
          <Text style={styles.profession}>Cardiologist</Text>
          <Text style={styles.rate}>10$ / hour</Text>
        </View>

        <View>
          <Text style={styles.sub_headers}>About:</Text>
          <Text style={styles.sub_description}>
            Dr junaid is an oxford graduate in cardiology he has been practicing for over
            15 years and has a dozen records to his belt.
          </Text>
        </View>

        <View>
          <Text style={styles.sub_headers}>Services:</Text>
          {[1, 2, 3].map((_, index) => (
            <Text key={index} style={styles.sub_description}>
              {index + 1}. expertise in giving advice in cardiology.
            </Text>
          ))}
        </View>

        <View style={styles.footer_container}>
          <Pressable style={styles.bookBtn} onPress={() => router.push('/book/1')}>
            <Text style={styles.bookBtnText}>Book Me</Text>
          </Pressable>
        </View>
      </View>
    </>
  )
}

export default Doctor

const styles = StyleSheet.create({
  image: {
    width: 125,
    height: 125,
    borderRadius: 100,
  },
  title: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 20 /* 142.857% */,
    letterSpacing: 0.07,
    textTransform: 'capitalize',
  },
  profession: {
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20 /* 166.667% */,
    letterSpacing: 0.06,
    textTransform: 'capitalize',
  },
  rate: {
    color: 'rgba(0, 0, 0, 0.50)',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 20 /* 200% */,
    letterSpacing: 0.05,
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
  sub_headers: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 26 /* 162.5% */,
    letterSpacing: 0.08,
    textDecorationLine: 'underline',
    marginBottom: 12,
  },
  sub_description: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 26 /* 185.714% */,
    letterSpacing: 0.07,
  },
})
