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
  },
  input: {
    paddingRight: 16,
    height: 52,
    paddingHorizontal: 10,
    flex: 1,
  },
})
