import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors'

export default StyleSheet.create({
  bgImageWrapper: {
    position: 'absolute',
    top: 0, bottom: 0, left: 0, right: 0
  },
  bgImage: {
    flex: 1,
    resizeMode: 'stretch',
    width: null,
    height: null
  },
  container: {
    paddingTop: 70,
    //backgroundColor: Colors.ember
  },
  form: {
    //backgroundColor: Colors.gray,
    marginRight: 30,
    marginLeft: 30,
    borderRadius: 4,
    backgroundColor:'rgba(61,61,61,0.2)'
  },
  row: {
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  rowLabel: {
    color: Colors.gray
  },
  textInput: {
    height: 40,
    color: Colors.gray
  },
  textInputReadonly: {
    height: 40,
    color: Colors.steel
  },
  loginRow: {
    paddingBottom: 10,
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
    marginTop: 30,
    marginBottom: 30,
    alignSelf: 'center',
    resizeMode: 'contain'
  }
})
