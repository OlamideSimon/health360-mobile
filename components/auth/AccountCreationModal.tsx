import { useRouter } from 'expo-router'
import { Image, Pressable, Text, View } from 'react-native'
import { images } from '../../constants'
import ModalPopup from '../ModalPopup'
import { styles } from './auth.styles'

interface Props {
  openModal: boolean
  handleClick: () => void
}

const AccountCreationModal = ({ openModal, handleClick }: Props) => {
  // const router = useRouter()
  const router = useRouter()

  return (
    <ModalPopup visible={openModal}>
      <View style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
        <Image source={images.checked} />
        <View>
          <Text style={styles.modal_title}>Account Setup Successful</Text>
          <Text style={styles.modal_description}>Thank you for signing up</Text>
        </View>

        <Pressable
          style={{ width: '100%' }}
          onPress={() => {
            handleClick()
          }}
        >
          <Text style={{ ...styles.submit_button, color: '#fff' }}>
            Continue
          </Text>
        </Pressable>
      </View>
    </ModalPopup>
  )
}

export default AccountCreationModal
