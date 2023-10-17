import React from 'react'
import { Image, Pressable, Text, TextInput, View } from 'react-native'

import { styles } from './index.styles'
import { images } from '../../constants'
import Services from './services_slider/services'
import { Stack } from 'expo-router'

const Index = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={{ flex: 1, paddingTop: '20%', paddingHorizontal: 20, gap: 40 }}>
        <View style={styles.header_container}>
          <View style={{ gap: 5 }}>
            <Text style={{ fontWeight: '600', fontSize: 16 }}>Hi Simon</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 3,
              }}
            >
              <Image
                source={images.location}
                alt="location"
                style={{ width: 20, height: 20 }}
              />
              <Text style={{ fontSize: 12, color: '#78828a' }}>Nigeria</Text>
            </View>
          </View>

          <Pressable>
            <Image
              style={styles.header_image}
              source={images.notification}
              alt="notifications"
            />
          </Pressable>
        </View>

        <View>
          <Text style={{ fontSize: 14 }}>Looking for a specialist?</Text>
          <View style={styles.input_container}>
            <TextInput style={styles.input} />
            <Image source={images.search} />
          </View>
        </View>

        <Services />
      </View>
    </>
  )
}

export default Index
