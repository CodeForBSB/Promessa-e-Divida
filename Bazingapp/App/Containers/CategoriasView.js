import React, {PropTypes} from 'react'
import { AppRegistry, View, Text, ListView, TouchableHighlight } from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'
import Routes from '../Navigation/Routes'
import RoundedButton from '../Components/RoundedButton'

// For empty lists
import AlertMessage from '../Components/AlertMessageComponent'


//import jsonfile from 'jsonfile'

// Styles
import styles from './Styles/ListviewCompromisesStyle'



class CategoriasView extends React.Component {

  constructor (props) {
    super(props)


  }


  componentDidMount() {
  }


  componentWillMount () {

  }

  render () {
    return (
      <View style={styles.container}>
          <AlertMessage title='Nothing to See Here, Move Along' show={true} />

      </View>
    )
  }
}

CategoriasView.propTypes = {
  navigator: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps)(CategoriasView)
