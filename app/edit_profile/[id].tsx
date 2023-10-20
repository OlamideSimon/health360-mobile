import React from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import AppContainer from '../../components/AppContainer'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import { RadioGroup } from 'react-native-radio-buttons-group'
import { COLORS, images } from '../../constants'
import ScreenHeaderBtn from '../../components/header/ScreenHeaderBtn'

const ProfileEdit = () => {
  const router = useRouter()
  const params = useLocalSearchParams()

  return (
    <>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: 'Edit Profile',
          headerLeft: () => (
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

      <View style={{ flex: 1, paddingTop: 20, paddingHorizontal: 24, gap: 20 }}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput style={styles.input} placeholder="Enter your full name" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Age</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your age"
            keyboardType="number-pad"
          />
        </View>

        <View>
          <RadioGroup
            radioButtons={[
              { id: 'male', label: 'Male', value: 'male' },
              { id: 'female', label: 'Female', value: 'female' },
              { id: 'other', label: 'Other', value: 'other' },
            ]}
            layout="row"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Your Location</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your age"
            keyboardType="default"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Your Mobile Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your age"
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.footer_container}>
          <Pressable style={styles.bookBtn} onPress={() => {}}>
            <Text style={styles.bookBtnText}>Save Changes</Text>
          </Pressable>
        </View>
      </View>
    </>
  )
}

export default ProfileEdit

const styles = StyleSheet.create({
  inputContainer: {},
  label: {
    color: COLORS.gray,
    marginLeft: 3,
    fontSize: 14,
    lineHeight: 22,
  },
  input: {
    marginTop: 5,
    borderRadius: 4,
    backgroundColor: COLORS.darkWhite,
    paddingRight: 16,
    height: 52,
    paddingHorizontal: 10,
    color: COLORS.textInputColor,
    borderWidth: 0.5,
    borderColor: '#000',
  },
  footer_container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  bookBtn: {
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    width: 342,
  },
  bookBtnText: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
  },
})
