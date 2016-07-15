import React, {PropTypes} from 'react'
import { AppRegistry, View, Text, ListView, TouchableHighlight, Image } from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'
import Routes from '../Navigation/Routes'

// For empty lists
import AlertMessage from '../Components/AlertMessageComponent'


//import jsonfile from 'jsonfile'

// Styles
import styles from './Styles/ItemViewPromisesStyle'

const firebase = require('firebase');

// Initialize Firebase
const firebaseConfig = {
  apiKey: "3knN0HE2Y4YG0gVHXfl55vqBzIyRe7GymrjIKS5i",
  authDomain: "promessa-e-divida.firebaseapp.com",
  databaseURL: "https://promessa-e-divida.firebaseio.com",
  storageBucket: "",
};
firebase.initializeApp(firebaseConfig);

class ItemViewPromises extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      dataSource: null
    };

    this.itemRef = firebase.database().ref().child('promises/1')
  }

  componentWillMount() {
    this.itemRef.on('value', (promise) => {
      this.setState({
        dataSource: promise.val()
      })
    })
  }

  render () {
    if (!this.state.dataSource) {
      return <View></View>
    }

    return (
      <View style={styles.itemView}>
        <Text style={styles.title}>{this.state.dataSource.project}</Text>
        <Image
          source={{uri: this.state.dataSource.imagePath}}
          style={{width: 400, height: 225}}
        />
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
          <Image
            source={{uri: this.state.dataSource.imagePath}}
            style={{width: 130, height: 74}}
          />
          <Image
            source={{uri: this.state.dataSource.imagePath}}
            style={{width: 130, height: 74}}
          />
          <Image
            source={{uri: this.state.dataSource.imagePath}}
            style={{width: 130, height: 74}}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps)(ItemViewPromises)
