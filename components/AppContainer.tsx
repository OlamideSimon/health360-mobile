import { Stack, useRouter } from 'expo-router'
import { ReactNode } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { images } from '../constants'
import ScreenHeaderBtn from './header/ScreenHeaderBtn'

interface appContainerProps {
  title: string
  hideBackButton?: boolean
  children: ReactNode
}

const AppContainer = ({
  children,
  title,
  hideBackButton,
}: appContainerProps) => {
  const router = useRouter()

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
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
                  handlePress={() => {
                    router.back()
                  }}
                />
              ),
        }}
      />

      <ScrollView>{children}</ScrollView>
    </KeyboardAvoidingView>
  )
}

export default AppContainer
