import { StyleSheet } from 'react-native'
import { COLORS } from '../../../constants'

export const styles = StyleSheet.create({
  service_card: {
    backgroundColor: '#00006b',
    borderRadius: 10,
    padding: 20,
    height: 150,
  },
  card_title: {
    marginTop: 'auto',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 26,
    color: COLORS.white,
  },
  card_description: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    marginBottom: 'auto',
  },
})
