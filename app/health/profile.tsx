import { MaterialIcons } from '@expo/vector-icons'
import { useContext, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import AppContainer from '../../components/AppContainer'
import Notifications from '../../components/profile/notifications/Notifications'
import Others from '../../components/profile/others/Others'
import Preferences from '../../components/profile/preferences/Preference'
import ProfileHeader from '../../components/profile/profile/Profile'
import { AuthContext } from '../../contexts/auth.context'
import ModalPopup from '../../components/ModalPopup'
import { COLORS } from '../../constants'

const Profile = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const authContext = useContext(AuthContext)

  const logout = () => authContext?.logout()

  return (
    <AppContainer title="User Profile" hideBackButton>
      <View style={{ flex: 1, paddingTop: 30, paddingHorizontal: 24 }}>
        <ProfileHeader />

        <Notifications />

        <Preferences />

        <Others />


        <Pressable onPress={() => setShowModal(true)}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>Logout</Text>
            <View style={{ marginLeft: 'auto' }}>
              <MaterialIcons name="logout" size={16} color="#545559" />
            </View>
          </View>
        </Pressable>
      </View>

      <ModalPopup visible={showModal}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Logout</Text>
          <Text style={styles.subtitle}>
            We hope you had a wonderful experience using this product, see you next time!!
          </Text>
          <View style={styles.btnContainer}>
            <Pressable onPress={logout}>
              <Text style={{ ...styles.btn, ...styles.yesBtn }}>Yes</Text>
            </Pressable>
            <Pressable onPress={() => setShowModal(false)}>
              <Text style={{ ...styles.btn, ...styles.noBtn }}>No</Text>
            </Pressable>
          </View>
        </View>
      </ModalPopup>
    </AppContainer>
  )
}

export default Profile

const styles = StyleSheet.create({
  modalContainer: {
    // width: 327,
    // height: 232,
    // backgroundColor: '#fff',
    rowGap: 21,
  },
  title: {
    color: '#111',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32 /* 133.333% */,
    letterSpacing: 0.12,
  },
  subtitle: {
    color: '#6C6C6C',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 22 /* 157.143% */,
    letterSpacing: 0.07,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 31,
  },
  btn: {
    borderRadius: 14,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  yesBtn: {
    backgroundColor: COLORS.primary,
    color: '#fff',
  },
  noBtn: {
    borderColor: '#000053',
    borderWidth: 1,
  },
})
