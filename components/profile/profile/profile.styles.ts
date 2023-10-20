import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 48,
  },
  image: {
    width: 68,
    height: 68,
    borderRadius: 68,
  },
  name: {
    color: '#111',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 26 /* 185.714% */,
    letterSpacing: 0.07,
  },
  rowContainer: {
    flexDirection: 'row',
    marginTop: 'auto',
    alignItems: 'center',
  },
  gender: {
    color: '#545559',
    fontSize: 10,
    fontWeight: '300',
    lineHeight: 20 /* 200% */,
    letterSpacing: 0.05,
    textTransform: 'capitalize',
  },
  country: {
    color: '#111',
    textAlign: 'center',
    fontSize: 10,
    fontWeight: '300',
    letterSpacing: 0.07,
  },
  btnContainer: {
    marginLeft: 'auto',
    backgroundColor: '#EFFAF3',
    borderRadius: 7,
    padding: 10,
  },
  btn: {
    color: '#59CC7F',
  },
})
