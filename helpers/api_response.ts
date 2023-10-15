import { ApiResponse } from '../interface'

export const apiResponse = <D = any>(
  success: boolean,
  message: string,
  data?: D
): ApiResponse<D> => {
  return {
    success,
    message,
    data,
  }
}
