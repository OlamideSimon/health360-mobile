import axios from 'axios'
import { URL } from '../../constants'
import { ApiResponse, IPInfoInterface } from '../../interface'
import { apiResponse } from '../api_response'

const unknownError = 'Unknown error occurred'

export const thirdPartyRequests = {
  // fetch user profile
  async fetchIpInfoData<D = any>(
    setLoading?: (loading: boolean) => void
  ): Promise<ApiResponse<D>> {
    setLoading?.(true)
    try {
      let userLoc = await axios.get<IPInfoInterface>(URL.ip_info_url)
      return apiResponse<any>(
        true,
        'Profile fetched successfully',
        userLoc.data
      )
    } catch (err: any) {
      return apiResponse<D>(
        false,
        err?.response?.data?.message || err?.message || unknownError
      )
    } finally {
      setLoading?.(false)
    }
  },
}
