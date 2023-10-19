import { StyleSheet } from 'react-native'
import { COLORS } from '../../../constants'

export const styles = StyleSheet.create({
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
