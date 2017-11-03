/**
 * Created by braveliu on 2017/3/13
 * Function: 程序主入口
 * Desc: 在这里做一些全局配置，比如全局 Navigator配置，全局变量初始化等。
 */
import React, {Component} from 'react';
import {AppRegistry, View, StyleSheet, Text, Image, TouchableWithoutFeedback} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Toast from 'react-native-simple-toast';

import {Colors, Images} from './resource/';
import HomesScreen from "./screens/home/HomesScreen";
import LoginScreen from "./screens/login/LoginScreen";
//import OFOScreen from './screens/ofo/OFOScreen';
//import TwitterScreen from './screens/twitter/TwitterScreen';
//import QQBrowserScreen from "./screens/qqbrowser/QQBrowserScreen";
//import WeChatScreen from "./screens/wechat/WeChatScreen";
import DefaultScreen from "./screens/default/DefaultScreen";
//import CookieManager from 'react-native-cookies';
import Cookie from 'react-native-cookie';

export default class FirstScreen extends Component {

  render() {
      return (

                    <View style={{flexDirection: 'row',marginTop:1,
                       justifyContent: 'center',
                       alignItems: 'flex-start',}} onLayout={this._redirectByLoginState.bind(this)}>
                      <Image source={Images.ic_first}/>
                    </View>
      )
  }
  _navigateToScreen(screen) {
          Toast.show(screen)
          const {navigate} = this.props.navigation;
          navigate(screen);
  }
  _navigatorToDefault(){
      this._navigateToScreen('Home')
  }
  _navigatorToLogin(){
      this._navigateToScreen('Login')
  }
  isEmptyObject(obj){
        for(var n in obj){return false}
        return true;
  }
  _redirectByLoginState(){
      Cookie.get('http://syhlife.com/', 'usertype')
        .then((res) => {
          console.log('Cookiemanager', res); // => 'user_session=abcdefg; path=/;'
          var that = this;
          setTimeout(function(){
            if(res){
               that._navigateToScreen('Home');
            }else{
               that._navigateToScreen('Login');
            }

            }, 2000);
        });
  }
}

const App = StackNavigator(
    {
        First: {screen: FirstScreen},
        Home: {screen: HomesScreen},
        /*WeChat: {screen: WeChatScreen},
        Twitter: {screen: TwitterScreen},
        OFO: {screen: OFOScreen},
        QQBrowser: {screen: QQBrowserScreen},*/
        Default1:{screen:DefaultScreen},
        Login:{screen:LoginScreen},
    },
    {
        headerMode: 'none',
    }
);


AppRegistry.registerComponent('demo', () => App);
