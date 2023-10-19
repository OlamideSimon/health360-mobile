import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#EFF4FF',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    columnGap: 35,
    marginBottom: 40,
  },
  title: {
    color: '#000',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20 /* 142.857% */,
    letterSpacing: 0.07,
    textTransform: 'capitalize',
  },
  profession: {
    color: '#000',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20 /* 166.667% */,
    letterSpacing: 0.06,
    textTransform: 'capitalize',
  },
  experience: {
    color: '#000',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20 /* 166.667% */,
    letterSpacing: 0.06,
    textTransform: 'capitalize',
  },
  booking_text: {
    fontSize: 8,
    color: '#000',
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
