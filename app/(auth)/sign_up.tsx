import { Stack, router } from 'expo-router'
import { ReactNode, useState } from 'react'
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native'
import ScreenHeaderBtn from '../../components/header/ScreenHeaderBtn'
import { COLORS, images } from '../../constants'
import { styles } from './auth.styles'

const sign_up = () => {
  const [activePage, setActivePage] = useState<number>(2)

  const pages: { [key: number]: ReactNode } = {
    1: <EmailReg />,
    2: <OtherDetails />,
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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

      {pages[activePage]}
    </KeyboardAvoidingView>
  )
}

export default sign_up

const EmailReg = () => {
  return (
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
  )
}

const OtherDetails = () => {
  return (
    <View style={{ padding: 30, gap: 50 }}>
      <View style={{ gap: 20 }}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput style={styles.input} placeholder="Enter your name" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} placeholder="Enter your email address" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} placeholder="Your preferred password" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput style={styles.input} placeholder="Confirm your password" />
        </View>

        <Pressable>
          <Text style={styles.submit_button}>Sign up</Text>
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
  )
}
