import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { View, Modal, Text, Animated, StyleSheet } from 'react-native'

const ModalPopup = ({
  visible,
  children,
}: {
  visible: boolean
  children: ReactNode[] | ReactNode
}) => {
  const [showModal, setShowModal] = useState<boolean>(visible)
  const scaleValue = useRef(new Animated.Value(0)).current

  useEffect(() => {
    toggleModal()
  }, [visible])

  const toggleModal = () => {
    if (visible) {
      setShowModal(true)
      Animated.spring(scaleValue, {
        toValue: 1,
        useNativeDriver: true,
      }).start()
    } else {
      setTimeout(() => setShowModal(false), 200)
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      })
    }
  }

  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackground}>
        <Animated.View
          style={[styles.modalContainer, { transform: [{ scale: scaleValue }] }]}
        >
          {children}
        </Animated.View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
})

export default ModalPopup
