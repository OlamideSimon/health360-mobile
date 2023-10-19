import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'

import styles from './screenheader.style'

type Header = {
  iconUrl: any
  dimension: any
  handlePress: () => void
}

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }: Header) => {
  return (
    <Pressable style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={{ ...styles.btnImg, width: dimension, height: dimension }}
      />
    </Pressable>
  )
}

export default ScreenHeaderBtn
