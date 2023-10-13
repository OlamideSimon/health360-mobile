import { Redirect } from 'expo-router'
import React from 'react'

const index = () => {
  if (true) return <Redirect href={'/sign_in'} />
}

export default index
