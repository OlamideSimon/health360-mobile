import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'

type Header = {
  iconUrl: any
  dimension: any
  handlePress: () => void
}

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }: Header) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={{ ...styles.btnImg, width: dimension, height: dimension }}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn
