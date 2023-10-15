import { useRouter } from 'expo-router'
import { useCallback, useContext, useState } from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'
import AppContainer from '../../components/AppContainer'
import { AuthContext } from '../../contexts/auth.context'
import { authRequests } from '../../helpers/api_requests/auth.request'
import { styles } from './auth.styles'

const sign_in = () => {
  const router = useRouter()

  const authContext = useContext(AuthContext)

  const [isLoading, setLoading] = useState(false)

  const requestOtp = useCallback(
    async () => {
      const { message, success, data } = await authRequests.requestOtp(
        {
          country: 'Nigeria',
          country_code: '+234',
          phone_number: '9050273391',
        },
        setLoading
      )
    },
    [] // don't forget to register dependencies
  )

  return (
    <AppContainer title='Sign in' hideBackButton>
      <View
        style={{
          padding: 30,
          gap: 50,
        }}
      >
        <View style={{ gap: 20 }}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder='Enter your email address'
              keyboardType='email-address'
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder='Enter your password'
              keyboardType='visible-password'
              secureTextEntry
            />
          </View>

          {/* Sign in btn */}
          <Pressable>
            <Text style={styles.submit_button}>Sign in</Text>
          </Pressable>
        </View>
      </View>
    </AppContainer>
  )
}

export default sign_in
