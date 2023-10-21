//AuthContext.js
import { useRouter } from 'expo-router'
import * as SecureStore from 'expo-secure-store'
import { createContext, useEffect, useState } from 'react'

import { thirdPartyRequests } from '../helpers/api_requests/3rdpart.request'
import { authRequests } from '../helpers/api_requests/auth.request'
import {
  AuthContextProps,
  ContextProps,
  IPInfoInterface,
  User,
} from '../interface'

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
  const [isLoggedIn, setIsLoggedIn] = useState()
  // const isLoggedIn = () => !!token

  const logout = async () => {
    await SecureStore.deleteItemAsync('token')
    await SecureStore.deleteItemAsync('user')

    setUser(null)
    setToken(null)
    router.push('/auth/sign_in')
  }

  useEffect(() => {
    const fetchPosition = async () => {
      const ip =
        await thirdPartyRequests.fetchIpInfoData<IPInfoInterface | null>(
          setIpInfoDataLoading
        )
      if (ip.success && ip.data) {
        setIpInfo(ip.data)
        // console.log('IP_DATA', ip.data)
      }
    }
    if (!ip_info) fetchPosition()
  }, [])
  // }, [ip_info?.country])

  useEffect(() => {
    const getToken = async () => {
      const token = await SecureStore.getItemAsync('token')
      // console.log('token', token)
      if (token) {
        setToken(token)
        const user = await SecureStore.getItemAsync('user')
        // console.log('user', user)
        if (user) {
          const parsedUser = JSON.parse(user)
          setUser(parsedUser)

          // check if user account is completed
          if (!parsedUser?.full_name || !parsedUser?.age || !parsedUser?.gender)
            return router.push('/auth/account_setup')

          return router.push('/health/')
        } else return router.push('/auth/sign_in')
      } else {
        return router.push('/auth/sign_in')
      }
    }
    getToken()
  }, [])

  useEffect(() => {
    if (!isLoggedIn) return
    const fetchUser = async () => {
      const { message, success, data } = await authRequests.profile()
      if (success) {
        if (data) setUser(data)
        // await SecureStore.setItemAsync('user', JSON.stringify(data))
        // if (!data?.full_name || !data?.age || !data?.gender)
        //   router.push('/auth/account_setup')
      } else {
      }
    }

    fetchUser()
  }, [isLoggedIn])

  // useEffect(() => {}, [user])

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
    logout,
    isLoggedIn,
  }

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  )
}
