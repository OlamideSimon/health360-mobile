import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { styles } from './footer.styles'
import { useRouter } from 'expo-router'

const Footer = () => {
  const router = useRouter()
  return (
    <View style={styles.footer_container}>
      <Pressable style={styles.bookBtn} onPress={() => router.push('/book/1')}>
        <Text style={styles.bookBtnText}>Proceed To Payment</Text>
      </Pressable>
    </View>
  )
}

export default Footer
