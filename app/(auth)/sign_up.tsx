import { Stack, router } from 'expo-router'
import React from 'react'
import { Image, Pressable, SafeAreaView, Text, TextInput, View } from 'react-native'
import ScreenHeaderBtn from '../../components/header/ScreenHeaderBtn'
import { COLORS, images } from '../../constants'
import { styles } from './signin.styles'

const sign_up = () => {
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: 'Create an account',
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={images.arrowLeft}
              dimension={20}
              handlePress={() => {}}
            />
          ),
        }}
      />

      <View style={{ padding: 30, gap: 50 }}>
        <View style={{ gap: 20 }}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} placeholder="Enter your email address" />
          </View>

          <Pressable>
            <Text style={styles.submit_button}>Continue With Email</Text>
          </Pressable>
        </View>

        <Text style={{ textAlign: 'center', fontSize: 19, color: COLORS.gray }}>
          or continue with
        </Text>

        <View style={{ gap: 10 }}>
          <Pressable>
            <View style={styles.bordered_button}>
              <Image
                source={images.google}
                resizeMode="contain"
                style={{ width: 20, height: 20 }}
              />
              <Text style={{ fontSize: 17 }}>Continue with Google</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.bordered_button}>
              <Image
                source={images.apple}
                resizeMode="contain"
                style={{ width: 20, height: 20 }}
              />
              <Text style={{ fontSize: 17 }}>Continue with Apple</Text>
            </View>
          </Pressable>
        </View>
        <Text style={{ marginTop: 'auto', textAlign: 'center', fontSize: 16 }}>
          Already have an account?{' '}
          <Text
            style={{ color: COLORS.primary, fontWeight: '600' }}
            onPress={() => router.push('/sign_in')}
          >
            Sign in
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default sign_up
