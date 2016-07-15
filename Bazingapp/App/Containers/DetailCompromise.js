import React, {PropTypes} from 'react'
import { AppRegistry, View, Text, ListView, TouchableHighlight } from 'react-native'
import { Images, Colors } from '../Themes'
import { connect } from 'react-redux'
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ListViewCompromises from './ListViewCompromises'
import RoundedButton from '../Components/RoundedButton'

import Routes from '../Navigation/Routes'

// For empty lists
import AlertMessage from '../Components/AlertMessageComponent'


//import jsonfile from 'jsonfile'

// Styles
import styles from './Styles/TabsScreenStyle'



class DetailCompromise extends React.Component {

  constructor (props) {
    super(props)
  }

  static propTypes = {
  //  data: PropTypes.object.isRequired
  }



  render () {
    var compromise = this.props.navigator.getCurrentRoutes()[1].passProps

    return (
      <View  style={styles.tabs}>
      <Text>
        {compromise.data._id}
      </Text>
      <Text>
        {compromise.data.goal}
      </Text>

      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps)(DetailCompromise)
