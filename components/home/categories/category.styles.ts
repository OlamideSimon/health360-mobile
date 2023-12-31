import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  title: {
    fontWeight: '600',
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 16,
    lineHeight: 26,
    letterSpacing: 0.08,
    textAlign: 'center',
  },
  description: {
    fontSize: 12,
    fontFamily: 'Nunito_400Regular',
    fontWeight: '400',
    letterSpacing: 0.06,
    color: 'rgba(0, 0, 0, 0.50)',
    textAlign: 'center',
    paddingHorizontal: 50,
    lineHeight: 20,
  },
  card_background: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 49,
    width: 53,
    borderRadius: 8,
  },
  card_title: {
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 26,
    letterSpacing: 0.05,
    textAlign: 'center',
  },
  card_description: {
    color: '#0000EE',
    fontSize: 5,
    fontWeight: '400',
    lineHeight: 26,
    letterSpacing: 0.025,
    textDecorationLine: 'underline',
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  flex_container: {
    flexDirection: 'row',
    columnGap: 27,
    rowGap: 22,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    // alignContent: 'flex-start',
  },
})
