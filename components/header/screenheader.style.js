import { StyleSheet } from 'react-native'

import { COLORS, SIZES } from '../../constants'

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  btnImg: {
    borderRadius: SIZES.small / 1.25,
  },
})

export default styles
