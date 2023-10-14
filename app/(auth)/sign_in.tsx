import { Stack, useRouter } from 'expo-router'
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import ScreenHeaderBtn from '../../components/header/ScreenHeaderBtn'
import { COLORS, images } from '../../constants'
import { styles } from './auth.styles'

const sign_in = () => {
  const router = useRouter()

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: 'Sign in',
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={images.arrowLeft}
              dimension={20}
              handlePress={() => {}}
            />
          ),
        }}
      />

      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default sign_in
// import React from 'react'
// import {
//   View,
//   KeyboardAvoidingView,
//   TextInput,
//   StyleSheet,
//   Text,
//   Platform,
//   TouchableWithoutFeedback,
//   Button,
//   Keyboard,
// } from 'react-native'

// const KeyboardAvoidingComponent = () => {
//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       style={styles.container}
//     >
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <View style={styles.inner}>
//           <Text style={styles.header}>Header</Text>
//           <TextInput placeholder="Username" style={styles.textInput} />
//           <View style={styles.btnContainer}>
//             <Button title="Submit" onPress={() => null} />
//           </View>
//         </View>
//       </TouchableWithoutFeedback>
//     </KeyboardAvoidingView>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   inner: {
//     padding: 24,
//     flex: 1,
//     justifyContent: 'space-around',
//   },
//   header: {
//     fontSize: 36,
//     marginBottom: 48,
//   },
//   textInput: {
//     height: 40,
//     borderColor: '#000000',
//     borderBottomWidth: 1,
//     marginBottom: 36,
//   },
//   btnContainer: {
//     backgroundColor: 'white',
//     marginTop: 12,
//   },
// })

// export default KeyboardAvoidingComponent
