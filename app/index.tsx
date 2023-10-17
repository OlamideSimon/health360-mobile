import { Redirect } from 'expo-router'
import { View } from 'react-native'

const index = () => {
  if (true) return <Redirect href={'/auth/sign_in'} />
}

export default index
