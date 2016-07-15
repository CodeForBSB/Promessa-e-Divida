import React, {PropTypes} from 'react'
import { AppRegistry,
  Component, View, Text, ListView, TouchableHighlight } from 'react-native'
import { Images, Metrics, Colors } from '../Themes'
import { connect } from 'react-redux'
import Routes from '../Navigation/Routes'
import RoundedButton from '../Components/RoundedButton'
import Icon from 'react-native-vector-icons/FontAwesome'

// For empty lists
import AlertMessage from '../Components/AlertMessageComponent'

<<<<<<< Updated upstream
import Share from 'react-native-share'

=======
import Colors from '../Themes/Colors'
>>>>>>> Stashed changes

//import jsonfile from 'jsonfile'

// Styles
import styles from './Styles/ListViewCompromisesStyle'

const firebase = require('firebase');

var Spinner = require('react-native-spinkit');

// Initialize Firebase
const firebaseConfig = {
  apiKey: "3knN0HE2Y4YG0gVHXfl55vqBzIyRe7GymrjIKS5i",
  authDomain: "promessa-e-divida.firebaseapp.com",
  databaseURL: "https://promessa-e-divida.firebaseio.com",
  storageBucket: "",
};
firebase.initializeApp(firebaseConfig);

class ListViewCompromises extends React.Component {

  constructor (props) {
    super(props)
    this.callThisFunction = this.callThisFunction.bind(this)
    /* ***********************************************************
    * STEP 1
    * This is an array of objects with the properties you desire
    * Usually this should come from Redux mapStateToProps
    var file = '../Fixtures/compromissos.json'
    jsonfile.readFile(file, function(err, obj) {
      dataObjects = obj;
      console.dir(obj)
    })
    *************************************************************/


    /* ***********************************************************
    * STEP 2
    * Teach datasource how to detect if rows are different
    * Make this function fast!  Perhaps something like:
    *   (r1, r2) => r1.id !== r2.id}
    *************************************************************/
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };

    this.itemsRef = firebase.database().ref().child('promises');
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', (promises) => {

      // get children as an array
      var items = [];
      promises.forEach((child) => {
        items.push(child.val());
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });

    });
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }


  componentWillMount () {

  }

  callShare(data) {
    Share.open({
      share_text: data.project + " #pedbsb",
      share_URL: "http://google.cl",
      title: data.goal
    },(e) => {
      console.log(e);
    });
  }

  /* ***********************************************************
  * STEP 3
  * `_renderRow` function -How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={rowData.title} description={rowData.description} />
  *************************************************************/
  _renderRow (rowData) {

    return <TouchableHighlight  onPress={() => {
          this.callThisFunction(rowData);
        }}   >
          <View style={styles.itemView}>
          <TouchableHighlight onPress={() => {
                this.callShare(rowData);
              }}>
              <Icon name='share-alt'
              size={Metrics.icons.medium}
              color={Colors.snow}
              style={styles.iconshare}
              />
          </TouchableHighlight>
              <Text style={styles.itemText}>{rowData.category}</Text>
              <Text style={styles.itemText}>{rowData.project}</Text>
              <Text style={styles.itemText}>{rowData.type}</Text>
              <Text style={styles.itemText}>Meta</Text>
              <Text style={styles.itemText}>{rowData.goal}</Text>
              <Text style={styles.itemText}>Prazo</Text>
              <Text style={styles.itemText}>{rowData.deadline}</Text>
              <Text style={styles.itemText}>Responsável</Text>
              <Text style={styles.itemText}>{rowData.responsible}</Text>

          </View>
        </TouchableHighlight>;
  }

  callThisFunction(rowData) {
    const row = {
      passProps: {
        data: rowData
      }
    }
    const temp = Object.assign({}, Routes.ItemViewPromises, row);
    this.props.navigator.push(temp,rowData)

  }

  /* ***********************************************************
  * STEP 4
  * If your datasource is driven by Redux, you'll need to
  * reset it when new data arrives.
  * DO NOT! place `cloneWithRows` inside of render, since render
  * is called very often, and should remain fast!  Just replace
  * state's datasource on newProps.
  *
  * e.g.
    componentWillReceiveProps (newProps) {
      if (newProps.someData) {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(newProps.someData)
        })
      }
    }
  *************************************************************/

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  _noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  _pressRow (rowID: number) {
    //TODO: detail compromisse
    console.log(this)
  }

  render () {
    if (this._noRowData()) {
      return (
        <View style={styles.spinnerContainer}>
          <Spinner style={styles.spinner} isVisible={this.state.isVisible}
              size={320} type={'WanderingCubes'} color={Colors.blueDark}/>
        </View>
      )
    }
    return (
      <View style={styles.container}>

        <ListView
          style={styles.listView}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
        />

      </View>
    )
  }
}

ListViewCompromises.propTypes = {
  navigator: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps)(ListViewCompromises)
