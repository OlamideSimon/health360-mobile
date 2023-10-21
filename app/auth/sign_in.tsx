import { useRouter } from 'expo-router'
import * as SecureStore from 'expo-secure-store'
import { ReactNode, useContext, useEffect, useState } from 'react'
import { ActivityIndicator, View } from 'react-native'
import AppContainer from '../../components/AppContainer'
import OTPAuthForm from '../../components/auth/OTPAuthForm'
import PhoneAuthForm from '../../components/auth/PhoneAuthForm'
import { AuthContext } from '../../contexts/auth.context'
import { AuthPhoneFields, User } from '../../interface'

const sign_in = () => {
  const router = useRouter()

  useEffect(() => {
    const run = async () => {
      const token = await SecureStore.getItemAsync('token')
      const user = await SecureStore.getItemAsync('user')
      console.log('token', token)
      console.log('user', user)
    }
    run()
  }, [])

  const [activeStep, setActiveStep] = useState<number>(1)
  const [phoneNumber, setPhoneNumber] = useState<AuthPhoneFields>({
    country_code: '',
    phone_number: '',
  })

  const authContext = useContext(AuthContext)

  const nextSection = (user?: User) => {
    const newStep = activeStep + 1
    if (newStep <= 2 && newStep > 0) {
      setActiveStep(newStep)
    } else {
      setActiveStep(1)
      if (!user?.country || !user?.full_name || !user?.dob)
        return router.push('/auth/account_setup')
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
