import { CallingCode } from '../interface'

const getCallingCodes: () => Promise<CallingCode[]> = async () => {
  // const all = await axios.get(_get_calling_codes)
  const all = await lazyLoadCountries()
  // console.log('All', all)
  let codes: CallingCode[] = []
  // all.data.forEach((item: any) => {
  all.forEach((item: any) => {
    item.callingCodes.forEach((singleCode: any) => {
      var code: any = {}
      code.callingCode = singleCode //select callingCode
      code.country = item.name // select country's name
      !!item.alpha2Code && (code.alphaCodes = [])
      !!item.alpha2Code && code['alphaCodes'].push(item.alpha2Code) // select alphaCodes
      !!item.alpha3Code && code['alphaCodes'].push(item.alpha3Code)
      code.flag = item.flag // select flag
      codes.push(code)
    })
  })

  return codes
}

const lazyLoadCountries = (): Promise<any> => {
  return import('../data/countries.json').then((module) => module.default)
}

export default getCallingCodes
