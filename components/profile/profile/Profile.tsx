import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { styles } from './profile.styles'
import { images } from '../../../constants'
import { AntDesign } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const ProfileHeader = () => {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Image source={images.user2} style={styles.image} />
      <View style={{ paddingVertical: 5 }}>
        <Text style={styles.name}>Simon Olamide</Text>
        <View style={{ ...styles.rowContainer, flex: 1, gap: 12 }}>
          <View style={styles.rowContainer}>
            <AntDesign name="user" size={16} color="#292D32" />
            <Text style={styles.gender}>Female</Text>
          </View>
          <View style={styles.rowContainer}>
            {/* Nigeria Icon */}
            <AntDesign name="user" size={16} color="#292D32" />
            <Text style={styles.country}>Nigeria</Text>
          </View>
        </View>
      </View>

      <Pressable
        style={styles.btnContainer}
        onPress={() => router.push(`/edit_profile/1`)}
      >
        <Text style={styles.btn}>Edit Profile</Text>
      </Pressable>
    </View>
  )
}

export default ProfileHeader
