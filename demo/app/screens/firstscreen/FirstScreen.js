import React, { Component } from 'react';
import {
  ToolbarAndroid,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import {Images} from '../../resource/';
import {EditView, LoginButton, NetUtil, LoginSuccess} from '../../components/';

export default class FirstScreen extends Component {

  render() {
      return (

                  <View style={LoginStyles.loginview}>
                    <View style={{flexDirection: 'row',height:100,marginTop:1,
                       justifyContent: 'center',
                       alignItems: 'flex-start',}}>
                      <Image source={Images.ic_first}/>
                    </View>
                  </View>
      )
  }
}

const LoginStyles = StyleSheet.create({
  loginview: {
    flex: 1,
    padding: 30,
    backgroundColor: '#ffffff',
  },
});