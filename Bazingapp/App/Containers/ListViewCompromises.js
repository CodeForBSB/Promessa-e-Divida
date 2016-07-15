import React, {PropTypes} from 'react'
import { AppRegistry, View, Text, ListView, TouchableHighlight } from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'
import Routes from '../Navigation/Routes'

// For empty lists
import AlertMessage from '../Components/AlertMessageComponent'


//import jsonfile from 'jsonfile'

// Styles
import styles from './Styles/ListviewCompromisesStyle'

const firebase = require('firebase');

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

  /* ***********************************************************
  * STEP 3
  * `_renderRow` function -How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={rowData.title} description={rowData.description} />
  *************************************************************/
  _renderRow (rowData) {

    return <TouchableHighlight onPress={() => {
          //this._pressRow(rowData._id);
          }}>
          <View style={styles.itemView}>
              <Text style={styles.itemText}>{rowData.categoria}</Text>
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
  }

  render () {
    return (
      <View style={styles.container}>
        <AlertMessage title='Nothing to See Here, Move Along' show={this._noRowData()} />
        <ListView
          style={styles.listView}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps)(ListViewCompromises)
