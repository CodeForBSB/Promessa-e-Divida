import React, {PropTypes} from 'react'
import { AppRegistry, View, ScrollView, Text, TextInput, ListView, TouchableHighlight, Image, Animated, StyleSheet } from 'react-native'
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
import styles from './Styles/ItemViewCompromiseStyle'



class DetailCompromise extends React.Component {

  constructor (props) {
    super(props)

    const width = {approval: 30, onTime: 50, appearance: 90}
    this.state = {
      approval: new Animated.Value(width.approval),
      onTime: new Animated.Value(width.onTime),
      appearance: new Animated.Value(width.appearance)
    }
  }

  static propTypes = {
  //  data: PropTypes.object.isRequired
  }

  componentDidMount () {
    this.handleAnimation()
  }

  handleAnimation () {
    const timing = Animated.timing
    const width = {approval: 40, onTime: 30, appearance: 80}
    const indicators = ['approval', 'onTime', 'appearance']
    Animated.parallel(indicators.map(item => {
      return timing(this.state[item], {toValue: width[item]})
    })).start()
  }

  render () {
    var compromise = this.props.navigator.getCurrentRoutes()[1].passProps
    const {approval, onTime, appearance} = this.state

    return (
      <View style={styles.itemView}>
        <ScrollView style={{flex: 2, padding: 5}}>
          <Text style={styles.title}>{compromise.data.project}</Text>
          <Image
            source={{uri: compromise.data.imagePath}}
            style={{width: 400, height: 225}}
          />
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10}}>
            <Image
              source={{uri: compromise.data.imagePath}}
              style={{width: 130, height: 74}}
            />
            <Image
              source={{uri: compromise.data.imagePath}}
              style={{width: 130, height: 74}}
            />
            <Image
              source={{uri: compromise.data.imagePath}}
              style={{width: 130, height: 74}}
            />
          </View>
          <View>
            <Text style={{color: '#96CA2D', fontSize: 18, fontWeight: 'bold', marginTop: 15}}>
              Deixe aqui sua avaliação
            </Text>
            <TextInput
              style={{}}
              multiline={true}
              editable = {true}
              maxLength = {40}
              placeholder='Seu comentário'
            />
          </View>
        </ScrollView>
        <View style={graphStyles.container}>
          <View style={graphStyles.item}>
            <Text style={graphStyles.label}>aprovação</Text>
            <View style={graphStyles.data}>
              {approval &&
                <Animated.View style={[graphStyles.bar, graphStyles.points, {width: approval}]} />
              }
              <Text style={graphStyles.dataNumber}>{compromise.data.rating.approval}</Text>
            </View>
          </View>
          <View style={graphStyles.item}>
            <Text style={graphStyles.label}>pontualidade</Text>
            <View style={graphStyles.data}>
              {onTime &&
                <Animated.View style={[graphStyles.bar, graphStyles.assists, {width: onTime}]} />
              }
              <Text style={graphStyles.dataNumber}>{compromise.data.rating.onTime}</Text>
            </View>
          </View>
          <View style={graphStyles.item}>
            <Text style={graphStyles.label}>aparência</Text>
            <View style={graphStyles.data}>
              {appearance &&
                <Animated.View style={[graphStyles.bar, graphStyles.rebounds, {width: appearance}]} />
              }
              <Text style={graphStyles.dataNumber}>{compromise.data.rating.appearance}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const graphStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginTop: 6,
    paddingVertical: 10,
    backgroundColor: '#4BB5C1'
  },
  // Item
  item: {
    flexDirection: 'row',
    marginBottom: 5,
    paddingHorizontal: 10
  },
  label: {
    color: '#FFFFFF',
    flex: 1,
    fontSize: 14,
  },
  data: {
    flex: 2,
    flexDirection: 'row'
  },
  dataNumber: {
    color: '#FFFFFF',
    fontSize: 14
  },
  // Bar
  bar: {
    alignSelf: 'center',
    borderRadius: 5,
    height: 8,
    marginRight: 5
  },
  points: {
    backgroundColor: '#F3ACF9'
  },
  assists: {
    backgroundColor: '#B5E655'
  },
  rebounds: {
    backgroundColor: '#97C1FC'
  },
  // controller
  controller: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15
  },
  button: {
    flex: 1,
    position: 'relative',
    top: -1
  },
  chevronLeft: {
    alignSelf: 'flex-end',
    height: 28,
    marginRight: 10,
    width: 28
  },
  chevronRight: {
    alignSelf: 'flex-start',
    height: 28,
    marginLeft: 10,
    width: 28
  },
  date: {
    color: '#6B7C96',
    flex: 1,
    fontSize: 22,
    fontWeight: '300',
    height: 28,
    textAlign: 'center'
  }

})

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps)(DetailCompromise)
