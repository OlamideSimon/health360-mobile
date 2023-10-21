import {
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import {
  ActivityIndicator,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { COLORS } from '../../constants'
import { AuthContext } from '../../contexts/auth.context'
import { authRequests } from '../../helpers/api_requests/auth.request'
import getCountryCode from '../../helpers/get_calling_codes'
import { AuthPhoneFields } from '../../interface'
import { styles } from './auth.styles'

interface Props {
  phoneFields: AuthPhoneFields
  setPhoneFields: Dispatch<SetStateAction<AuthPhoneFields>>
  nextSection: () => void
}

// Other Components
const PhoneAuthForm = ({ nextSection, phoneFields, setPhoneFields }: Props) => {
  const authContext = useContext(AuthContext)

  const [isLoading, setLoading] = useState(false)
  const [nationality, setNationality] = useState<string>('')

  useEffect(() => {
    if (!authContext?.ip_info?.data?.country) return

    const data = getCountryCode(authContext?.ip_info?.data?.country)
    setNationality(data?.country || '')
    setPhoneFields((prev) => ({
      ...prev,
      country_code: '+' + data?.code || '',
    }))
  }, [authContext?.ip_info?.data?.country])

  const requestOtp = useCallback(async () => {
    if (!phoneFields?.country_code || !phoneFields.phone_number)
      return Alert.alert('Error', 'All fields required')

    setLoading(true)
    const { message, success, data } = await authRequests.requestOtp({
      ...phoneFields,
      country: nationality,
    })
    if (success) {
      nextSection()
    } else {
      Alert.alert('Error', message)
    }
    setLoading(false)
  }, [phoneFields, nationality])

  const changeCountry = () => {}

  return (
    <>
      <View style={{}}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone Number</Text>
          <View style={styles.code_container}>
            <Text style={{ color: COLORS.textInputColor }}>
              {phoneFields?.country_code}
            </Text>
            <TextInput
              style={[styles.code_input, { flex: 1 }]}
              onChangeText={(text) =>
                setPhoneFields((prev) => ({
                  ...prev,
                  phone_number: text.toString(),
                }))
              }
              placeholder='Enter your Phone Number'
              keyboardType='phone-pad'
            />
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={requestOtp}
        style={{ ...styles.submit_button }}
      >
        {isLoading ? (
          <ActivityIndicator color={'#fff'} />
        ) : (
          <Text style={styles.submit_button_text}>Login with phone number</Text>
        )}
      </TouchableOpacity>
    </>
  )
}

export default PhoneAuthForm
