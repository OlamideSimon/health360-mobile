import { BASE_URL } from '@env'
import { RawAxiosRequestConfig } from 'axios'
import { useEffect, useState } from 'react'
import { useApi } from '../helpers/api_request'

const useFetch = (endpoint: string, option?: RawAxiosRequestConfig) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const axiosOptions: RawAxiosRequestConfig = {
    method: 'GET',
    baseURL: BASE_URL,
    url: endpoint,
    ...option,
  }

  const fetchData = async () => {
    try {
      const response = await useApi().request(axiosOptions)

      setData(response.data)
      console.log('response data', response.data)
      setIsLoading(false)
    } catch (error: any) {
      setError(
        error?.response?.data?.message ||
          error?.message ||
          'Unknown error occurred'
      )
      console.log(error?.response?.data?.message || error?.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const refetch = () => {
    setIsLoading(true)
    fetchData()
  }

  return { data, isLoading, error, refetch }
}

export default useFetch
