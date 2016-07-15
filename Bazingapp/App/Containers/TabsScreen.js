import React, {PropTypes} from 'react'
import { AppRegistry, View, Text, ListView, TouchableHighlight } from 'react-native'
import { Images, Colors } from '../Themes'
import { connect } from 'react-redux'
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ListViewCompromises from './ListViewCompromises'
import MapviewExample from './MapviewExample'
import CategoriasView from './CategoriasView'

import Routes from '../Navigation/Routes'

// For empty lists
import AlertMessage from '../Components/AlertMessageComponent'


//import jsonfile from 'jsonfile'

// Styles
import styles from './Styles/TabsScreenStyle'



class TabScreen extends React.Component {

  constructor (props) {
    super(props)
  }

  static propTypes = {
    navigator: PropTypes.object.isRequired
  }

  componentWillMount () {
    this.props.navigator.state.tapHamburger = () => {
      this.props.navigator.drawer.toggle()
    }
  }

  handlePushRoute = (route) => {
    this.navigator.push(route)
  }


  render () {
    return (
      <View  style={styles.tabs}>

      <ScrollableTabView
        tabBarBackgroundColor={Colors.green1}
        tabBarUnderlineColor={Colors.blueDark}
        tabBarActiveTextColor={Colors.blueDark}
        tabBarInactiveTextColor= "white">
          <ListViewCompromises tabLabel="Destaque"  navigator={this.props.navigator} onPushRoute={this.handlePushRoute}/>
          <CategoriasView tabLabel="Categorias" navigator={this.props.navigator} />
          <MapviewExample tabLabel="Perto de mim" />
      </ScrollableTabView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps)(TabScreen)
