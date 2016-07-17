import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  itemView: {
    marginTop: Metrics.navBarHeight,
    flex:1,
    padding: 4,
    backgroundColor: '#EDF7F2',
  },
  title: {
    color: '#4BB5C1',
    fontSize: 20,
    marginTop: 15,
    marginBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center'
  },
  itemText: {
    ...ApplicationStyles.screen.sectionText
  },

  groupContainer: {
    ...ApplicationStyles.groupContainer
  }
})
