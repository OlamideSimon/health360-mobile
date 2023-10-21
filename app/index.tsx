
import * as SecureStore from 'expo-secure-store'
import { useEffect } from 'react'

const index = () => {
  // const authContext = useContext(AuthContext)

  // if (true) return <Redirect href={'/auth/sign_in'} />

  useEffect(() => {
    const clean = async () => {
      await SecureStore.deleteItemAsync('token')
      await SecureStore.deleteItemAsync('user')
    }
    // clean()
  }, [])

  return <></>
}

export default index
