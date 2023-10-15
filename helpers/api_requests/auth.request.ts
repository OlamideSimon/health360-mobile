import { ApiResponse } from '../../interface'
import { useApi } from '../api_request'
import { apiResponse } from '../api_response'

const unknownError = 'Unknown error occurred'

export const authRequests = {
  // fetch user profile
  async profile<D = any>(
    setLoading?: (loading: boolean) => void
  ): Promise<ApiResponse<D>> {
    try {
      const resp = await useApi(setLoading).get('/auth/profile')
      return apiResponse<D>(true, 'Profile fetched successfully', resp?.data)
    } catch (err: any) {
      return apiResponse(
        false,
        err?.response?.data?.message || err?.message || unknownError
      )
    }
  },

  // request otp
  async requestOtp<D = any>(
    reqBody: { country: string; country_code: string; phone_number: string },
    setLoading?: (loading: boolean) => void
  ): Promise<ApiResponse<D>> {
    try {
      const resp = await useApi(setLoading).post('/auth/request-otp', reqBody)
      return apiResponse<D>(true, 'OTP sent successfully', resp?.data)
    } catch (err: any) {
      return apiResponse(
        false,
        err?.response?.data?.message || err?.message || unknownError
      )
    }
  },

  // login
  async login<D = any>(
    reqBody: { otp: string; country_code: string; phone_number: string },
    setLoading?: (loading: boolean) => void
  ): Promise<ApiResponse<D>> {
    try {
      const resp = await useApi(setLoading).post('/auth/login', reqBody)
      return apiResponse<D>(true, 'Logged in successfully', resp?.data)
    } catch (err: any) {
      return apiResponse(
        false,
        err?.response?.data?.message || err?.message || unknownError
      )
    }
  },
}
