import { MaterialIcons } from '@expo/vector-icons'
import { useContext } from 'react'
import { Pressable, Text, View } from 'react-native'
import AppContainer from '../../components/AppContainer'
import Notifications from '../../components/profile/notifications/Notifications'
import Others from '../../components/profile/others/Others'
import Preferences from '../../components/profile/preferences/Preference'
import ProfileHeader from '../../components/profile/profile/Profile'
import { AuthContext } from '../../contexts/auth.context'

const Profile = () => {
  const authContext = useContext(AuthContext)

  return (
    <AppContainer title="User Profile" hideBackButton>
      <View style={{ flex: 1, paddingTop: 30, paddingHorizontal: 24 }}>
        <ProfileHeader />

        <Notifications />

        <Preferences />

        <Others />


        <Pressable onPress={() => authContext?.logout()}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>Logout</Text>
            <View style={{ marginLeft: 'auto' }}>
              <MaterialIcons name='logout' size={16} color='#545559' />
            </View>
          </View>
        </Pressable>
      </View>
    </AppContainer>
  )
}

export default Profile
