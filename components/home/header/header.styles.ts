import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  header_container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  header_image: {
    width: 25,
    height: 25,
  },
  input_container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundCKolor: COLORS.darkWhite,
    borderRadius: 5,
    paddingHorizontal: 15,
    marginTop: 5,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.50)',
  },
  input: {
    paddingRight: 16,
    height: 52,
    fontFamily: 'Nunito_600SemiBold',
    letterSpacing: 0.1,
    paddingHorizontal: 10,
    flex: 1,
    opacity: 0.5,
  },
})
