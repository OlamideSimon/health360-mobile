import { ReactNode } from 'react'
import { IpInfoContextInterface, User } from './'

export interface ContextProps {
  children: ReactNode
}

export interface AuthContextProps {
  token: string | null
  setToken: (token: string | null) => void
  user: User | null
  setUser: (user: any) => void
  ip_info: IpInfoContextInterface
  isLoggedIn: () => boolean
  logout: () => void
}
