import { ROLE } from '../types/all'

export interface User {
  id: string
  full_name: string
  country: string
  country_code: string
  PhoneNumber: string
  Role: ROLE
  created_at: Date
  updated_at: Date | null
}
