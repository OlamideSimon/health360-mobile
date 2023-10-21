import { useRouter } from 'expo-router'
import { ReactNode, useContext, useState } from 'react'
import { ActivityIndicator, View } from 'react-native'
import AppContainer from '../../components/AppContainer'
import OTPAuthForm from '../../components/auth/OTPAuthForm'
import PhoneAuthForm from '../../components/auth/PhoneAuthForm'
import { AuthContext } from '../../contexts/auth.context'
import { AuthPhoneFields } from '../../interface'

const sign_in = () => {
  const router = useRouter()

  const [activeStep, setActiveStep] = useState<number>(1)
  const [phoneNumber, setPhoneNumber] = useState<AuthPhoneFields>({
    country_code: '',
    phone_number: '',
  })

  const authContext = useContext(AuthContext)

  const nextSection = () => {
    const newStep = activeStep + 1
    if (newStep <= 2 && newStep > 0) {
      setActiveStep(newStep)
    } else {
      router.push('/health/')
    }
  }

  // render elements
  const steps: { [key: number]: ReactNode } = {
    1: (
      <PhoneAuthForm
        nextSection={nextSection}
        phoneFields={phoneNumber}
        setPhoneFields={setPhoneNumber}
      />
    ),
    2: <OTPAuthForm nextSection={nextSection} phoneNumber={phoneNumber} />,
  }

  return (
    <AppContainer title='Sign in' hideBackButton>
      {authContext?.ip_info?.loading ? (
        <View style={{ marginTop: 20 }}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <View
          style={{
            padding: 30,
            gap: 30,
            marginVertical: 'auto',
          }}
        >
          {steps[activeStep]}
        </View>
      )}
    </AppContainer>
  )
}
export default sign_in
