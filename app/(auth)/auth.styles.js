import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants'

export const styles = StyleSheet.create({
  container: {
    maxWidth: '80%',
  },
  inputContainer: {},
  label: {
    color: COLORS.gray,
    marginLeft: 3,
  },
  input: {
    marginTop: 5,
    borderRadius: 5,
    backgroundColor: COLORS.darkWhite,
    padding: 15,
  },
  submit_button: {
    backgroundColor: COLORS.primary,
    color: COLORS.white,
    paddingVertical: 18,
    textAlign: 'center',
    borderRadius: 25,
    fontSize: 20,
  },
  bordered_button: {
    backgroundColor: 'transparent',
    borderColor: '#000',
    borderWidth: 1,
    paddingVertical: 12,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
})
