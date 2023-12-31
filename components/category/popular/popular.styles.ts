import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  header: {
    color: 'rgba(17, 17, 17, 0.50)',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: 0.08,
    marginBottom: 13,
  },
  card: {
    backgroundColor: '#00241D',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    columnGap: 35,
  },
  rating_container: {
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 2,
  },
  title: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20 /* 142.857% */,
    letterSpacing: 0.07,
    textTransform: 'capitalize',
  },
  profession: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20 /* 166.667% */,
    letterSpacing: 0.06,
    textTransform: 'capitalize',
  },
  experience: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20 /* 166.667% */,
    letterSpacing: 0.06,
    textTransform: 'capitalize',
  },
  booking_text: {
    fontSize: 8,
    color: '#fff',
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: 0.04,
    textTransform: 'capitalize',
  },
  flex_container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
})
