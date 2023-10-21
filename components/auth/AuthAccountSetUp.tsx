import DateTimePicker from '@react-native-community/datetimepicker'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { ActivityIndicator, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import RadioGroup from 'react-native-radio-buttons-group'
import AccountCreationModal from './AccountCreationModal'
import { styles } from './auth.styles'

interface Props {}

const AuthAccountSetUp = ({}: Props) => {
  const router = useRouter()

  const [openModal, setOpenModal] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState(false)
  const [accountSetUpFormData, setAccountSetUpFormData] = useState<{
    full_name: string
    age: Date
    gender: string
  }>({
    full_name: '',
    gender: '',
    age: new Date(),
  })

  const handleSubmission = () => {
    console.log('Form', accountSetUpFormData)
  }

  return (
    <View style={{ gap: 30 }}>
      <AccountCreationModal openModal={openModal} />
      <View>
        <Text style={styles.title}>Complete your account</Text>
        <Text style={styles.description}>
          Input your verified information below
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(fullName) =>
            setAccountSetUpFormData((prev) => ({
              ...prev,
              full_name: fullName,
            }))
          }
          placeholder='Enter your full name'
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Age</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your age'
          keyboardType='url'
          onChangeText={(dob) =>
            setAccountSetUpFormData((prev) => ({
              ...prev,
              age: new Date(dob),
            }))
          }
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text style={{}}>Choose date of birth</Text>
        <DateTimePicker value={accountSetUpFormData?.age} display='default' />
      </View>

      <View>
        <RadioGroup
          radioButtons={[
            { id: 'male', label: 'Male', value: 'male' },
            { id: 'female', label: 'Female', value: 'female' },
            { id: 'other', label: 'Other', value: 'other' },
          ]}
          layout='row'
          selectedId={accountSetUpFormData?.gender}
          onPress={(value) =>
            setAccountSetUpFormData((prev) => ({ ...prev, gender: value }))
          }
        />
      </View>

      <TouchableOpacity
        onPress={handleSubmission}
        style={{ ...styles.submit_button }}
      >
        {isLoading ? (
          <ActivityIndicator color={'#fff'} />
        ) : (
          <Text style={styles.submit_button_text}>Set Up Account</Text>
        )}
      </TouchableOpacity>
    </View>
  )
}

export default AuthAccountSetUp
