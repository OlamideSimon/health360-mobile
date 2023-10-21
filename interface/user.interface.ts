import { ROLE } from '../types/all'

export interface User {
  id: string
  full_name: string
  country: string
  country_code: string
  phone_number: string
  profile_image: string
  age: Date | null
  gender: string | null
  role: ROLE
  created_at: Date
  updated_at: Date | null
}

export interface AuthPhoneFields {
  country_code: string
  phone_number: string
}
