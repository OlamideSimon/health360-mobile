import { Stack, useRouter } from 'expo-router'
import { ReactNode } from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native'
import { images } from '../constants'
import ScreenHeaderBtn from './header/ScreenHeaderBtn'

interface appContainerProps {
  title?: string
  hideBackButton?: boolean
  hideHeader?: boolean
  children: ReactNode | ReactNode[]
  view?: boolean
}

const AppContainer = ({
  children,
  title,
  hideBackButton,
  hideHeader,
  view,
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

        {view ? (
          <ScrollView>
            <View style={{ flex: 1 }}>{children}</View>
          </ScrollView>
        ) : (
          <ScrollView>{children}</ScrollView>
        )}
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default AppContainer
