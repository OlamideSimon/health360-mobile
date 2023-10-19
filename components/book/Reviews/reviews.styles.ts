import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  review_title: {
    color: '#111',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 26,
    letterSpacing: 0.07,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  card: {
    width: 121,
    height: 153,
  },
  card_image: {
    width: 38,
    height: 38,
    borderRadius: 38,
  },
  card_name: {
    color: '#000',
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 20 /* 200% */,
    letterSpacing: 0.05,
    textTransform: 'capitalize',
  },
  sessions: {
    color: 'rgba(0, 0, 0, 0.50)',
    fontSize: 5,
    fontWeight: '400',
    lineHeight: 20 /* 400% */,
    letterSpacing: 0.025,
    textTransform: 'capitalize',
  },
  top_container: {
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderWidth: 0.5,
  },
  bottom_container: {
    padding: 10,
    backgroundColor: '#00241D',
    height: 64,
    borderBottomEndRadius: 16,
    borderBottomStartRadius: 16,
  },
  review: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 5,
    fontWeight: '400',
    lineHeight: 10 /* 200% */,
    letterSpacing: 0.025,
    textTransform: 'capitalize',
  },
})
