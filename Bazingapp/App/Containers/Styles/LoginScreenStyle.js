import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors'

export default StyleSheet.create({
  container: {
    paddingTop: 70,
    backgroundColor: Colors.ember
  },
  form: {
    backgroundColor: Colors.snow,
    margin: 10,
    borderRadius: 4
  },
  row: {
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  rowLabel: {
    color: Colors.charcoal
  },
  textInput: {
    height: 40,
    color: Colors.coal
  },
  textInputReadonly: {
    height: 40,
    color: Colors.steel
  },
  loginRow: {
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'column'
  },
  loginButtonWrapper: {
    flex: 1
  },
  loginButton: {
    flex: 1,
    borderWidth: 1,
    margin: 10,
    borderColor: Colors.green1,
    backgroundColor: Colors.green2,
    padding: 10
  },
  loginText: {
    textAlign: 'center',
    color: Colors.gray
  },
  topLogo: {
    alignSelf: 'center',
    resizeMode: 'contain'
  }
})
