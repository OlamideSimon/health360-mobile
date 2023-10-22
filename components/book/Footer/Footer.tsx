import React, { useRef } from 'react'
import { Pressable, Text, View } from 'react-native'
import { styles } from './footer.styles'
import { useRouter } from 'expo-router'
import { paystackProps, Paystack } from 'react-native-paystack-webview'
import { PAYSTACK_PUBLIC_KEY } from '@env'

const Footer = () => {
  const router = useRouter()
  const paystack = useRef<paystackProps.PayStackRef>()
  console.log(PAYSTACK_PUBLIC_KEY)
  return (
    <View style={styles.footer_container}>
      <Paystack
        amount={'10000.00'}
        paystackKey={PAYSTACK_PUBLIC_KEY}
        billingEmail={'simonadepetoye@gmail.com'}
        onCancel={() => {}}
        onSuccess={() => {}}
        ref={paystack}
      />
      <Pressable
        style={styles.bookBtn}
        onPress={() => paystack.current?.startTransaction()}
      >
        <Text style={styles.bookBtnText}>Proceed To Payment</Text>
      </Pressable>
    </View>
  )
}

export default Footer
