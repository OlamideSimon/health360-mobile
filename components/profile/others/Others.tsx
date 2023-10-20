import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './others.styles'
import { AntDesign, FontAwesome5 } from '@expo/vector-icons'

const Others = () => {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={styles.header}>Others</Text>

      <View style={{ gap: 16 }}>
        <View style={styles.listContainer}>
          <FontAwesome5 name="telegram-plane" size={16} color="#B3B7BF" />
          <Text>Feedback</Text>

          <View style={styles.rightContainer}>
            <AntDesign name="right" size={16} color="#B3B7BF" />
          </View>
        </View>

        <View style={styles.listContainer}>
          <FontAwesome5 name="info-circle" size={16} color="#B3B7BF" />
          <Text>Help</Text>

          <View style={styles.rightContainer}>
            <AntDesign name="right" size={16} color="#B3B7BF" />
          </View>
        </View>

        <View style={styles.listContainer}>
          <AntDesign name="sharealt" size={16} color="#B3B7BF" />
          <Text>Invite Friends</Text>

          <View style={styles.rightContainer}>
            <AntDesign name="right" size={16} color="#B3B7BF" />
          </View>
        </View>
      </View>
    </View>
  )
}

export default Others
