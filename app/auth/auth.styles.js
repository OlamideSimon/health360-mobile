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
    fontSize: 14,
    lineHeight: 22,
  },
  code_container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.darkWhite,
    borderRadius: 24,
    paddingHorizontal: 15,
    marginTop: 5,
  },
  code_input: {
    paddingRight: 16,
    height: 52,
    paddingHorizontal: 10,
    color: COLORS.textInputColor
  },
  input: {
    marginTop: 5,
    borderRadius: 24,
    backgroundColor: COLORS.darkWhite,
    paddingRight: 16,
    height: 52,
    paddingHorizontal: 10,
    color: COLORS.textInputColor
  },
  submit_button: {
    backgroundColor: COLORS.primary,
    color: COLORS.white,
    paddingVertical: 16,
    textAlign: 'center',
    borderRadius: 24,
    fontSize: 16,
    fontWeight: '700',
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
  title: {
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '700',
  },
  description: {
    textAlign: 'center',
    lineHeight: 22,
    fontSize: 14,
  },
  otp_container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
  },
  otp_input: {
    borderColor: '#006654',
    backgroundColor: '#fff',
    width: 56,
    height: 56,
    borderWidth: 1,
    borderRadius: 25,
    textAlign: 'center',
    fontSize: 20,
  },
  countdown: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: '#545559',
  },
  modal_title: {
    fontWeight: '700',
    fontSize: 24,
    textAlign: 'center',
  },
  modal_description: {
    fontSize: 14,
    textAlign: 'center',
  },
})
