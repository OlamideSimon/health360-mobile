//AuthContext.js
import { useRouter } from 'expo-router'
import * as SecureStore from 'expo-secure-store'
import { createContext, useEffect, useState } from 'react'

import { thirdPartyRequests } from '../helpers/api_requests/3rdpart.request'
import { AuthContextProps, ContextProps, IPInfoInterface, User } from '../interface'

const initialAuthState: AuthContextProps = {
  user: null,
  token: null,
  logout: () => null,
  setUser: (user: User) => null,
  ip_info: {
    data: null,
    loading: false,
  },
  isLoggedIn: () => false,
  setToken: (token: string | null) => null,
}

export const AuthContext = createContext<AuthContextProps>(initialAuthState)

export default function AuthProvider({ children }: ContextProps) {
  const router = useRouter()

  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [ip_info, setIpInfo] = useState<IPInfoInterface | null>(null) //? user state
  const [ipInfoDataLoading, setIpInfoDataLoading] = useState(false)

  const isLoggedIn = () => !!token

  const logout = async () => {
    await SecureStore.deleteItemAsync('token')
    await SecureStore.deleteItemAsync('user')

    setUser(null)
    setToken(null)
    router.push('/auth/sign_in')
  }

  useEffect(() => {
    const fetchPosition = async () => {
      const ip = await thirdPartyRequests.fetchIpInfoData<IPInfoInterface | null>(
        setIpInfoDataLoading
      )
      if (ip.success && ip.data) setIpInfo(ip.data)
    }
    if (!ip_info) fetchPosition()
  }, [])
  // }, [ip_info?.country])

  //? declaring value that will be passed down the app through the AuthContext's provider.
  const authContextValue: AuthContextProps = {
    user,
    setUser,
    token,
    setToken,
    ip_info: {
      data: ip_info,
      loading: ipInfoDataLoading,
    },
    logout: logout,
    isLoggedIn,
  }

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>
}
