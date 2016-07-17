import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  avatarContainer: {
    //borderColor: '#9B9B9B',
    //borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center',

    borderWidth: 1,
    margin: 10,
    borderColor: Colors.green1,
    backgroundColor: Colors.green2,
    padding: 10
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150
  }

})
