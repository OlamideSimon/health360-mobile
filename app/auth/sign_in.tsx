import { useRouter } from 'expo-router'
import { ReactNode, useCallback, useContext, useEffect, useState } from 'react'
import { Image, Pressable, Text, TextInput, View } from 'react-native'
import AppContainer from '../../components/AppContainer'
import { AuthContext } from '../../contexts/auth.context'
import { authRequests } from '../../helpers/api_requests/auth.request'
import { styles } from './auth.styles'
import axios from 'axios'
import getCountryCode from '../../helpers/get_calling_codes'
import { CountryDetails } from '../../interface/api.interface'
import { COLORS, images } from '../../constants'
import ModalPopup from '../../components/ModalPopup'
import RadioGroup from 'react-native-radio-buttons-group'

const sign_in = () => {
  const [activeStep, setActiveStep] = useState<number>(1)
  const [openModal, setOpenModal] = useState<boolean>(false)
  const router = useRouter()

  const authContext = useContext(AuthContext)

  const nextSection = () => {
    const newStep = activeStep + 1
    if (newStep <= 3 && newStep > 0) {
      setActiveStep(newStep)
    } else {
      setOpenModal(true)
    }
  }

  // render elements
  const steps: { [key: number]: ReactNode } = {
    1: <Phone nextSection={nextSection} />,
    2: <OTP nextSection={nextSection} />,
    3: <Details nextSection={nextSection} />,
  }

  return (
    <AppContainer title="Sign in" hideBackButton>
      <View
        style={{
          padding: 30,
          gap: 30,
          marginVertical: 'auto',
        }}
      >
        {steps[activeStep]}
      </View>

      <ModalPopup visible={openModal}>
        <View style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
          <Image source={images.checked} />
          <View>
            <Text style={styles.modal_title}>Account Setup Successful</Text>
            <Text style={styles.modal_description}>Thank you for signing up</Text>
          </View>
          <Pressable style={{ width: '100%' }} onPress={() => router.push('/(tabs)')}>
            <Text style={styles.submit_button}>Continue</Text>
          </Pressable>
        </View>
      </ModalPopup>
    </AppContainer>
  )
}

// Other Components
const Phone = ({ nextSection }: { nextSection: () => void }) => {
  const [isLoading, setLoading] = useState(false)
  const [phone, setPhone] = useState<string>('')
  const [nationality, setNationality] = useState<CountryDetails>({
    code: '',
    country: '',
  })

  useEffect(() => {
    axios.get('https://ipinfo.io/json').then((res) => {
      const data = getCountryCode(res.data?.country)
      setNationality(data!)
      return
    })
  }, [])

  const requestOtp = useCallback(async () => {
    const { message, success, data } = await authRequests.requestOtp(
      {
        country: nationality?.country,
        country_code: `+${nationality?.code}`,
        phone_number: phone,
      },
      setLoading
    )
  }, [])

  const handleSubmission = () => {
    // requestOtp()
    nextSection()
  }

  return (
    <>
      <View style={{ gap: 20 }}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone Number</Text>
          <View style={styles.code_container}>
            <Text style={{ color: COLORS.gray }}>+{nationality?.code}</Text>
            <TextInput
              style={[styles.code_input, { flex: 1 }]}
              placeholder="Enter your Phone Number"
              keyboardType="phone-pad"
            />
          </View>
        </View>
      </View>

      <Pressable onPress={handleSubmission}>
        <Text style={styles.submit_button}>Sign in with phone number</Text>
      </Pressable>
    </>
  )
}

const OTP = ({ nextSection }: { nextSection: () => void }) => {
  const handleSubmission = () => {
    nextSection()
  }

  return (
    <View style={{ gap: 40 }}>
      <View>
        <Text style={styles.title}>Enter OTP</Text>
        <Text style={styles.description}>
          We have just sent you 4 digit code via your Phone +234********8
        </Text>
      </View>

      <View style={styles.otp_container}>
        <TextInput maxLength={1} keyboardType="number-pad" style={styles.otp_input} />
        <TextInput maxLength={1} keyboardType="number-pad" style={styles.otp_input} />
        <TextInput maxLength={1} keyboardType="number-pad" style={styles.otp_input} />
        <TextInput maxLength={1} keyboardType="number-pad" style={styles.otp_input} />
      </View>

      <Text style={styles.countdown}>2:00</Text>

      <Pressable onPress={handleSubmission}>
        <Text style={styles.submit_button}>Continue</Text>
      </Pressable>
    </View>
  )
}

const Details = ({ nextSection }: { nextSection: () => void }) => {
  const handleSubmission = () => {
    nextSection()
  }

  return (
    <View style={{ gap: 30 }}>
      <View>
        <Text style={styles.title}>Complete your account</Text>
        <Text style={styles.description}>Input your verified infomation below</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput style={styles.input} placeholder="Enter your full name" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Age</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your age"
          keyboardType="number-pad"
        />
      </View>

      <View>
        <RadioGroup
          radioButtons={[
            { id: 'male', label: 'Male', value: 'male' },
            { id: 'female', label: 'Female', value: 'female' },
            { id: 'others', label: 'Others', value: 'others' },
          ]}
          layout="row"
        />
      </View>

      <Pressable onPress={handleSubmission}>
        <Text style={styles.submit_button}>Sign up</Text>
      </Pressable>
    </View>
  )
}

export default sign_in
