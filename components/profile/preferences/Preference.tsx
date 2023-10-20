import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './preference.styles'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'

const Preferences = () => {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={styles.header}>Preferences</Text>

      <View style={{ gap: 16 }}>
        <View style={styles.listContainer}>
          <MaterialIcons name="account-box" size={16} color="#B3B7BF" />
          <Text>Complete Setup</Text>

          <View style={styles.rightContainer}>
            <AntDesign name="right" size={16} color="#B3B7BF" />
          </View>
        </View>

        <View style={styles.listContainer}>
          <AntDesign name="lock" size={16} color="#B3B7BF" />
          <Text>Privacy and Security</Text>

          <View style={styles.rightContainer}>
            <AntDesign name="right" size={16} color="#B3B7BF" />
          </View>
        </View>
      </View>
    </View>
  )
}

export default Preferences
