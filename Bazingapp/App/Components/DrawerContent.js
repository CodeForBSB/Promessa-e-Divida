import React, { PropTypes } from 'react'
import { ScrollView, Image,View  } from 'react-native'
import { Images } from '../Themes'
import DrawerButton from '../Components/DrawerButton'
import styles from './Styles/DrawerContentStyle'
import Routes from '../Navigation/Routes'

class DrawerContent extends React.Component {
  constructor (props) {
    super(props)
     this.handlePressComponent = props.onPushRoute.bind(this, Routes.LoginScreen)
    // this.handlePressUsage = props.onPushRoute.bind(this, Routes.UsageExamplesScreen)
    // this.handlePressApi = props.onPushRoute.bind(this, Routes.APITestingScreen)
    // this.handlePressTheme = props.onPushRoute.bind(this, Routes.ThemeScreen)
    // this.handlePressDeviceInfo = props.onPushRoute.bind(this, Routes.DeviceInfoScreen)
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Image source={Images.logo} style={styles.logo} />
        <DrawerButton text='Explorar' onPress={this.handlePressComponent} />
        <DrawerButton text='Meu Perfil' onPress={this.handlePressComponent} />
        <DrawerButton text='Meus Fiscalizados' onPress={this.handlePressComponent} />
        <View style={styles.divider} />
        <DrawerButton text='Configurações' onPress={this.handlePressComponent} />
        <DrawerButton text='Ajuda' onPress={this.handlePressComponent} />
        <DrawerButton text='Contato' onPress={this.handlePressComponent} />
      </ScrollView>
    )
  }
}

DrawerContent.propTypes = {
  onPushRoute: PropTypes.func.isRequired
}

export default DrawerContent
