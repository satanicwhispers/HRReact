import React from 'react';
import {  Text, View } from 'react-native';
import { HeaderComp} from './UIComponents/LayOut/HeaderComponent';
import { Font, AppLoading } from 'expo';
import { Container  } from 'native-base';
import RNReactNativeLocale from 'react-native-locale-listener';
import RNRestart from 'react-native-restart';
import ReactNative from 'react-native';
import I18n from 'react-native-i18n';
export default class App extends React.Component {
  state = { fontsAreLoaded: false };
  changeLayout (language) {
    //alert(language);
    
    RNRestart.Restart();
   };
   componentDidMount () {
    RNReactNativeLocale.addLocaleListener(this.changeLayout);
   };
   componentWillUnmount () {
    RNReactNativeLocale.removeLocaleListener(this.changeLayout);
  }
  async componentWillMount() {
    
    I18n.locale="ar";
    let currentLocale = I18n.currentLocale();
    // Is it a RTL language?
    let isRTL =  currentLocale.indexOf('ar') === 0;
    ReactNative.I18nManager.allowRTL(isRTL);
    await Font.loadAsync({
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf')
    });
    this.setState({fontsAreLoaded: true});
  }
  render() {
    if(!this.state.fontsAreLoaded){return( <Container>
      <AppLoading />
    </Container>);}
    
    return (
   
      <HeaderComp/>
    );
  }
}


