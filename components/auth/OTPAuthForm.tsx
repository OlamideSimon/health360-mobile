import * as Clipboard from 'expo-clipboard'
import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { ActivityIndicator, Alert, Pressable, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import OTPTextView from 'react-native-otp-textinput'
import { AuthContext } from '../../contexts/auth.context'
import { authRequests } from '../../helpers/api_requests/auth.request'
import getCountryCode from '../../helpers/get_calling_codes'
import { maskNumber } from '../../helpers/string.uril'
import { AuthPhoneFields } from '../../interface'
import { styles } from './auth.styles'

interface componentProps {
  phoneNumber: AuthPhoneFields
  nextSection: () => void
}

const OTPAuthForm = ({ nextSection, phoneNumber }: componentProps) => {
  const authContext = useContext(AuthContext)

  const otpInputRef = useRef<OTPTextView>(null)

  const [minute, setMinute] = useState(1)
  const [second, setSecond] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [resendOtp, setResendOtp] = useState(false)
  const [nationality, setNationality] = useState<string>('')
  const [otp, setOTP] = useState('')

  const timer = (remaining: number) => {
    let m = Math.floor(remaining / 60)
    let s = remaining % 60

    // m = m < 10 ? '0' + m : m
    // s = s < 10 ? '0' + s : s
    setMinute(m)
    setSecond(s)
    // document.getElementById('timer').innerHTML = m + ':' + s
    remaining -= 1

    if (remaining >= 0) {
      setTimeout(function () {
        timer(remaining)
      }, 1000)
      return
    }

    // Do timeout stuff here
    // alert('Timeout for otp')
    setResendOtp(true)
  }

  useEffect(() => {
    timer(120)
  }, [])

  const login = async () => {
    if (otp.length != 4) return Alert.alert('Enter 4 digits OTP')
    setIsLoading(true)
    const { message, success, data } = await authRequests.login({
      country_code: phoneNumber.country_code,
      phone_number: phoneNumber.phone_number,
      otp: otp,
    })
    if (success) {
      nextSection()
    } else {
      Alert.alert('Error', message)
    }
    setIsLoading(false)
  }

  const requestOtp = useCallback(async () => {
    if (!resendOtp) return
    if (!phoneNumber?.country_code || !phoneNumber.phone_number)
      return Alert.alert('Error', 'All fields required')

    setIsLoading(true)
    const { message, success, data } = await authRequests.requestOtp({
      ...phoneNumber,
      country: nationality,
    })
    if (success) {
      nextSection()
    } else {
      Alert.alert('Error', message)
    }
    setIsLoading(false)
  }, [phoneNumber, nationality])

  const handleCellTextChange = async (text: string, i: number) => {
    if (i === 0) {
      const clippedText = await Clipboard.getStringAsync()
      if (clippedText.slice(0, 1) === text) {
        otpInputRef.current?.setValue(clippedText, true)
      }
    }
  }

  useEffect(() => {
    if (!authContext?.ip_info?.data?.country) return

    const data = getCountryCode(authContext?.ip_info?.data?.country)
    setNationality(data?.country || '')
  }, [authContext?.ip_info?.data?.country])

  return (
    <View style={{ gap: 40 }}>
      <View>
        <Text style={styles.title}>Enter OTP</Text>
        <Text style={styles.description}>
          We have just sent you 4 digit code via your Phone{' '}
          {phoneNumber.country_code}
          {maskNumber(phoneNumber.phone_number)}
        </Text>
      </View>

      <View style={styles.otp_container}>
        <OTPTextView
          ref={otpInputRef}
          keyboardType='number-pad'
          inputCount={4}
          offTintColor={'#006654'}
          tintColor={'#006654'}
          containerStyle={{
            gap: 8,
          }}
          textInputStyle={{
            backgroundColor: '#fff',
            width: 56,
            height: 56,
            borderWidth: 1,
            borderRadius: 25,
            borderBottomWidth: 1,
          }}
          handleTextChange={setOTP}
          handleCellTextChange={handleCellTextChange}
        />
      </View>

      {/* <View style={styles.otp_container}>
        <TextInput
          maxLength={1}
          keyboardType='number-pad'
          style={styles.otp_input}
        />
        <TextInput
          maxLength={1}
          keyboardType='number-pad'
          style={styles.otp_input}
        />
        <TextInput
          maxLength={1}
          keyboardType='number-pad'
          style={styles.otp_input}
        />
        <TextInput
          maxLength={1}
          keyboardType='number-pad'
          style={styles.otp_input}
        />
      </View> */}

      <Text style={styles.countdown}>
        {minute < 10 && '0'}
        {minute}:{second < 10 && '0'}
        {second}
      </Text>

      <TouchableOpacity onPress={login} style={{ ...styles.submit_button }}>
        {isLoading ? (
          <ActivityIndicator color={'#fff'} />
        ) : (
          <Text style={styles.submit_button_text}>Continue</Text>
        )}
      </TouchableOpacity>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 5,
        }}
      >
        <Text>Didn't receive code?</Text>
        <Pressable onPress={requestOtp}>
          <Text
            style={{
              color: 'rgba(0, 0, 214, 0.80)',
              opacity: resendOtp ? 1 : 0.5,
            }}
          >
            Resend Code
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

export default OTPAuthForm
