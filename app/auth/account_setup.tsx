import { View } from 'react-native'
import AppContainer from '../../components/AppContainer'
import AuthAccountSetUp from '../../components/auth/AuthAccountSetUp'

const AccountSetUp = () => {
  return (
    <AppContainer hideBackButton hideHeader>
      <View
        style={{
          padding: 30,
          gap: 30,
          marginVertical: 'auto',
        }}
      >
        <AuthAccountSetUp />
      </View>
    </AppContainer>
  )
}

export default AccountSetUp
