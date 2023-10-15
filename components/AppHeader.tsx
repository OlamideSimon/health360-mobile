import { Stack } from 'expo-router'
import { images } from '../constants'
import ScreenHeaderBtn from './header/ScreenHeaderBtn'

interface headerProps {
  title: string
  hideBackButton?: boolean
}

const AppHeader = ({ title, hideBackButton }: headerProps) => {
  return (
    <Stack.Screen
      options={{
        headerShadowVisible: false,
        headerTitle: title,
        headerLeft: hideBackButton
          ? () => null
          : () => (
              <ScreenHeaderBtn
                iconUrl={images.arrowLeft}
                dimension={20}
                handlePress={() => {}}
              />
            ),
      }}
    />
  )
}

export default AppHeader
