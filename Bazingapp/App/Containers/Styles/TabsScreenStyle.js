import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    marginTop: Metrics.navBarHeight,
    flex: 1,
  },
  tabs: {

    marginTop: 60
  },
  itemView: {
    margin: 10,
    padding: 4,
    backgroundColor: Colors.blueDark
  },
  itemText: {
    ...ApplicationStyles.screen.sectionText
  },

  groupContainer: {
    ...ApplicationStyles.groupContainer
  }
})
