import { Image, Pressable, Text, TextInput, View } from 'react-native'

import { useContext, useEffect, useState } from 'react'
import { COLORS, images } from '../../../constants'
import { AuthContext } from '../../../contexts/auth.context'
import { styles } from './header.styles'

const Header = () => {
  const authContext = useContext(AuthContext)

  const [name, setName] = useState('')
  const [country, setCountry] = useState('')

  useEffect(() => {
    if (!authContext?.user?.full_name || !authContext?.user?.country) return

    setName(authContext?.user?.full_name.split(' ')[0])
    setCountry(authContext?.user?.country)
  }, [authContext?.user?.full_name, authContext?.user?.country])

  return (
    <View style={{ paddingHorizontal: 6 }}>
      <View style={styles.header_container}>
        <View style={{ gap: 2 }}>
          <Text style={{ fontWeight: '600', fontSize: 16 }}>Hi, {name}</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 3,
            }}
          >
            <Image
              source={images.location}
              alt='location'
              style={{ width: 20, height: 20, opacity: 0.6 }}
            />
            <Text style={{ fontSize: 12, color: COLORS.gray }}>{country}</Text>
          </View>
        </View>

        <Pressable
          style={{
            borderRadius: 30,
            borderWidth: 1,
            borderColor: '#006654',
            padding: 10,
          }}
        >
          <Image
            style={styles.header_image}
            source={images.notification}
            tintColor={'#006654'}
            alt='notifications'
          />
        </Pressable>
      </View>

      <View>
        <Text style={{ fontSize: 14, marginTop: 25, marginBottom: 10 }}>
          Looking for a specialist?
        </Text>
        <View style={styles.input_container}>
          <TextInput
            style={styles.input}
            placeholder='Search'
            placeholderTextColor={'#000'}
          />
          <Image source={images.search} style={{ opacity: 0.5 }} />
        </View>
      </View>
    </View>
  )
}

export default Header
