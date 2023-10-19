import { Tabs } from 'expo-router'
import { Image } from 'react-native'
import { images } from '../../constants'

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name='index'
        options={{
          tabBarLabel: 'Home',
          title: 'Home',
          tabBarIcon: () => <Image source={images.home} />,
        }}
      />

      <Tabs.Screen
        name='schedule'
        options={{
          tabBarLabel: 'Schedule',
          title: 'Schedule',
          tabBarIcon: () => <Image source={images.calendar} />,
        }}
      />

      <Tabs.Screen
        name='messages'
        options={{
          tabBarLabel: 'Message',
          title: 'Message',
          tabBarIcon: () => <Image source={images.message} />,
        }}
      />

      <Tabs.Screen
        name='profile'
        options={{
          tabBarLabel: 'Profile',
          title: 'Profile',
          tabBarIcon: () => <Image source={images.user} />,
        }}
      />
    </Tabs>
  )
}

export default TabLayout
