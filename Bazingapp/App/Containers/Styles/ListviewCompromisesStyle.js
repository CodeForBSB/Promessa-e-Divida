import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  spinnerContainer: {
    flex: 1,
    alignItems: 'center'
  },
  spinner: {
    marginTop: 30,
    left: 0,
    marginBottom: 80
  },

  container: {
    flex: 1,
  },
  listView: {
    flex:1
  },
  iconshare: {
    flex:1,
    alignSelf: 'flex-end',
    margin: 6
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
