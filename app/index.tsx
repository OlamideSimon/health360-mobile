import { Redirect } from 'expo-router'

const index = () => {
  if (true) return <Redirect href={'/auth/sign_in'} />
}

export default index
