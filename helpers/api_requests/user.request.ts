import * as SecureStore from 'expo-secure-store'
import { ApiResponse, User } from '../../interface'
import { useApi } from '../api_request'
import { apiResponse } from '../api_response'

const unknownError = 'Unknown error occurred'

export const userRequests = {
  async updateAccount<D = User>(
    reqBody: {
      id: string
      full_name: string
      dob: Date
      gender: string
    },
    setLoading?: (loading: boolean) => void
  ): Promise<ApiResponse<User>> {
    try {
      const resp = await useApi(setLoading).patch('/user/', reqBody)

      await SecureStore.setItemAsync('user', JSON.stringify(resp?.data))

      return apiResponse<User>(true, 'Profile fetched successfully', resp?.data)
    } catch (err: any) {
      return apiResponse(
        false,
        err?.response?.data?.message || err?.message || unknownError
      )
    }
  },
}
