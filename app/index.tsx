import * as SecureStore from 'expo-secure-store'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../contexts/auth.context'

const index = () => {
  const authContext = useContext(AuthContext)

  // if (true) return <Redirect href={'/auth/sign_in'} />

  useEffect(() => {
    const clean = async () => {
      await SecureStore.deleteItemAsync('token')
      await SecureStore.deleteItemAsync('user')
      authContext?.setIsLoggedIn(false)
    }
    // clean()
  }, [])

  return <></>
}

export default index
