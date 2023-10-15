export interface CallingCode {
  alphaCodes: Array<string>
  callingCode: string
  country: string
  flag: string
}

export interface IpInfoContextInterface {
  data: IPInfoInterface | null
  loading: boolean
}

export interface IPInfoInterface {
  city: string
  country: string
  ip: string
  loc: string
  org: string
  region: string
  timezone: string
}

export interface ApiResponse<D = any> {
  success: boolean
  message: string
  data?: D
}
