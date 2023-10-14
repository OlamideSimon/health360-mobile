import { Stack, useRouter } from 'expo-router'
import React from 'react'
import { Image, Pressable, SafeAreaView, Text, TextInput, View } from 'react-native'
import ScreenHeaderBtn from '../../components/header/ScreenHeaderBtn'
import { COLORS, images } from '../../constants'
import { styles } from './auth.styles'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

const sign_in = () => {
  const router = useRouter()

  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: 'Sign in',
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={images.arrowLeft}
              dimension={20}
              handlePress={function (): void {
                throw new Error('Function not implemented.')
              }}
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

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} placeholder="Enter your password" />
          </View>

          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingHorizontal: 5,
            }}
          >
            <BouncyCheckbox
              size={20}
              fillColor={COLORS.gray}
              text="Remember Me"
              iconStyle={{ borderColor: COLORS.gray }}
              innerIconStyle={{ borderWidth: 1 }}
              onPress={(isChecked: boolean) => {}}
              disableBuiltInState
            />

            <Text>Forgot Password</Text>
          </View>

          <Pressable>
            <Text style={styles.submit_button}>Sign in</Text>
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
          Don't have an account?{' '}
          <Text
            style={{ color: COLORS.primary, fontWeight: '600' }}
            onPress={() => router.push('/sign_up')}
          >
            Sign up
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default sign_in
