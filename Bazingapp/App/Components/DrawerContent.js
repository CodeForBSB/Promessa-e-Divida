import React, { PropTypes } from 'react'
import { ScrollView, Image,View  } from 'react-native'
import { Images } from '../Themes'
import Drawer from 'react-native-drawer'
import DrawerButton from '../Components/DrawerButton'
import styles from './Styles/DrawerContentStyle'
import Routes from '../Navigation/Routes'

class DrawerContent extends React.Component {
  constructor (props) {
    super(props)
     this.handlePressComponent = props.onPushRoute.bind(this, Routes.LoginScreen)
     this.handlePressExplore = props.onPushRoute.bind(this, Routes.TabsScreen)
    // this.handlePressUsage = props.onPushRoute.bind(this, Routes.UsageExamplesScreen)
    // this.handlePressApi = props.onPushRoute.bind(this, Routes.APITestingScreen)
    // this.handlePressTheme = props.onPushRoute.bind(this, Routes.ThemeScreen)
    // this.handlePressDeviceInfo = props.onPushRoute.bind(this, Routes.DeviceInfoScreen)
  }

  render () {
		const { drawer } = this.context
    return (
      <Drawer
        type="overlay"
        content={Routes.TabScreen}
        tapToClose={true}
        openDrawerOffset={0.2} // 20% gap on the right side of drawer
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        styles={drawerStyles}
        tweenHandler={(ratio) => ({
          main: { opacity:(2-ratio)/2 }
        })}
        >
        <ScrollView style={styles.container}>
          <Image source={Images.logo} style={styles.logo} />
          <DrawerButton text='Explorar' onPress={this.handlePressComponent} />
          <DrawerButton text='Minha Fiscalização' onPress={this.handlePressComponent} />
          <DrawerButton text='Apadrinhados' onPress={this.handlePressComponent} />
          <View style={styles.divider} />
          <DrawerButton text='Configurações' onPress={this.handlePressComponent} />
          <DrawerButton text='Ajuda' onPress={this.handlePressComponent} />
          <DrawerButton text='Contato' onPress={this.handlePressComponent} />
        </ScrollView>
      </Drawer>
    )
  }
}

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.5, shadowRadius: 3},
  main: {paddingLeft: 3},
}

DrawerContent.propTypes = {
  onPushRoute: PropTypes.func.isRequired
}

export default DrawerContent
