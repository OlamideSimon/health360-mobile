import { StyleSheet } from 'react-native'
import { COLORS } from '../../../constants'

export const styles = StyleSheet.create({
  heading: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 26,
  },
  card_container: {
    alignItems: 'center',
    gap: 10,
  },
  card: {
    width: 161,
    height: 204,
    flexShrink: 0,
    borderRadius: 20,
    backgroundColor: '#D9D9D9',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  button: {
    paddingVertical: 13,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    backgroundColor: COLORS.primary,
    color: COLORS.white,
  },
  rating_container: {
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 2,
  },
  doc_name: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    letterSpacing: 0.07,
    textTransform: 'capitalize',
  },
  profession: {
    fontSize: 12,
    fontWeight: '400',
    textTransform: 'capitalize',
  },
  experience: {
    fontSize: 12,
    fontWeight: '400',
  },
  booking_text: {
    fontSize: 8,
    color: 'rgba(0, 0, 0, 0.50)',
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: 0.04,
    textTransform: 'capitalize',
  },
  booking_image: {
    width: 10,
    height: 10,
  },
  flex_container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
})
