import { Stack, useRouter } from 'expo-router'
import { ReactNode } from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
} from 'react-native'
import { images } from '../constants'
import ScreenHeaderBtn from './header/ScreenHeaderBtn'

interface appContainerProps {
  title?: string
  hideBackButton?: boolean
  hideHeader?: boolean
  children: ReactNode | ReactNode[]
}

const AppContainer = ({
  children,
  title,
  hideBackButton,
  hideHeader,
}: appContainerProps) => {
  const router = useRouter()

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <SafeAreaView>
        <Stack.Screen
          options={{
            headerShadowVisible: false,
            headerTitle: title,
            headerLeft: hideBackButton
              ? () => <></>
              : () => (
                  <ScreenHeaderBtn
                    iconUrl={images.arrowLeft}
                    dimension={20}
                    handlePress={() => {
                      router.back()
                    }}
                  />
                ),
            headerShown: hideHeader && false,
          }}
        />

        <ScrollView>{children}</ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default AppContainer
