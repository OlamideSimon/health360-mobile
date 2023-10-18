import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import AppContainer from '../../components/AppContainer'
import { COLORS, images } from '../../constants'

const Doctor = () => {
  const params = useLocalSearchParams()

  return (
    <AppContainer title="Details">
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
        <Pressable>
          <Text>Book Now</Text>
        </Pressable>
      </View>
    </AppContainer>
  )
}

export default Doctor

const styles = StyleSheet.create({
  image: {
    width: 125,
    height: 125,
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
    backgroundColor: '#FFF',
  },
  bookBtn: {
    backgroundColor: COLORS.primary,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  bookBtnText: {
    fontSize: 12,
    color: '#fff',
    fontFamily: '600',
  },
})
