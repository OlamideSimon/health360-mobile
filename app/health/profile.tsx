import { Pressable, Text, View } from 'react-native'
import AppContainer from '../../components/AppContainer'
import ProfileHeader from '../../components/profile/profile/Profile'
import Notifications from '../../components/profile/notifications/Notifications'
import Preferences from '../../components/profile/preferences/Preference'
import Others from '../../components/profile/others/Others'
import { MaterialIcons } from '@expo/vector-icons'

const Profile = () => {
  return (
    <AppContainer title="User Profile" hideBackButton>
      <View style={{ flex: 1, paddingTop: 30, paddingHorizontal: 24 }}>
        <ProfileHeader />

        <Notifications />

        <Preferences />

        <Others />

        <Pressable style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text>Logout</Text>
          <View style={{ marginLeft: 'auto' }}>
            <MaterialIcons name="logout" size={16} color="#545559" />
          </View>
        </Pressable>
      </View>
    </AppContainer>
  )
}

export default Profile
