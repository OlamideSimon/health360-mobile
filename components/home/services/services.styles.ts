import { StyleSheet } from 'react-native'
import { COLORS } from '../../../constants'

export const styles = StyleSheet.create({
  service_card: {
    paddingHorizontal: 15,
    backgroundColor: '#00006b',
    // borderRadius: 10,
    height: 170,
    // width: 342,
  },
  card_title: {
    marginTop: 23,
    width: 209,
    fontWeight: '700',
    fontFamily: 'Nunito_700Bold',
    letterSpacing: 0.09,
    fontSize: 18,
    lineHeight: 26,
    color: COLORS.white,
  },
  card_description: {
    color: COLORS.white,
    fontSize: 14,
    marginTop: 13,
    fontWeight: '400',
    lineHeight: 20,
    marginBottom: 'auto',
    width: 236,
  },
  activeCarouselIndicator: {
    width: 6,
    height: 6,
    borderRadius: 50,
    backgroundColor: '#000',
  },
  inActiveCarouselIndicator: {
    width: 6,
    height: 6,
    borderRadius: 50,
    backgroundColor: '#D9D9D9',
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.50)',
  },
})
