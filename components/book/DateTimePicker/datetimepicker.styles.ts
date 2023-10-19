import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  booking_time_header: {
    color: '#545559',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20 /* 125% */,
    letterSpacing: 0.08,
    textTransform: 'capitalize',
    marginBottom: 17,
  },
  dateTimePickerContainer: {
    padding: 8,
    borderWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  datePicker_text: {
    color: '#545559',
    fontSize: 10,
    fontWeight: '300',
    lineHeight: 20 /* 200% */,
    letterSpacing: 0.05,
    textTransform: 'capitalize',
  },
})
