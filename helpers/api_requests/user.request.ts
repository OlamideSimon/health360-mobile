import { ApiResponse, User } from '../../interface'
import { useApi } from '../api_request'
import { apiResponse } from '../api_response'

const unknownError = 'Unknown error occurred'

export const authRequests = {
  async setUpAccount<D = any>(
    reqBody: {
      id: string
      full_name: string
      age: 23
      gender: 'male'
    },
    setLoading?: (loading: boolean) => void
  ): Promise<ApiResponse<User>> {
    try {
      const resp = await useApi(setLoading).patch('/', {})
      return apiResponse<User>(true, 'Profile fetched successfully', resp?.data)
    } catch (err: any) {
      return apiResponse(
        false,
        err?.response?.data?.message || err?.message || unknownError
      )
    }
  },
}
