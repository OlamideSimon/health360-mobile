import React from 'react'
import { Text, View, Switch } from 'react-native'
import { styles } from './notification.styles'
import { Ionicons } from '@expo/vector-icons'

const Notifications = () => {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={styles.header}>Notifications</Text>

      <View style={styles.listContainer}>
        <Ionicons name="notifications" size={16} color="#B3B7BF" />
        <Text>Enable Notification</Text>

        <View style={styles.rightContainer}>
          <Switch
            trackColor={{ true: '#4361EE' }}
            thumbColor={true ? '#fff' : ''}
            value={false}
          />
        </View>
      </View>
    </View>
  )
}

export default Notifications
