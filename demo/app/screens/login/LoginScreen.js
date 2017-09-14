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
import {Images, LoginStyles} from '../../resource/';
import {EditView, LoginButton, NetUtil, LoginSuccess} from '../../components/';

export default class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.userName = "";
    this.password = "";
  }

  render() {
      return (

                  <View style={LoginStyles.loginview}>
                    <View style={LoginStyles.topimg}>
                      <Image source={Images.ic_login} style={LoginStyles.img}/>
                    </View>
                    <View style={LoginStyles.toptext}>
                         <Text>最专业的养猪APP</Text>
                    </View>
                    <View style={LoginStyles.user}>
                      <EditView  name='手机号' onChangeText={(text) => {
                           this.userName = text;
                       }}/>
                      <EditView name='请输入登陆密码' onChangeText={(text) => {
                           this.password = text;
                       }}/>
                       <View style={LoginStyles.btn}>
                      <LoginButton name='登录' onPressCallback={this.onPressCallback}/>
                      </View>
                    </View>
                  </View>
      )
  }


  onPressCallback = () => {
    let formData = new FormData();
    formData.append("loginName",this.userName);
    formData.append("pwd",this.password);
    let url = "http://www.baidu.com";
    NetUtil.postJson(url,formData,(responseText) => {
          alert(responseText);
          this.onLoginSuccess();
    })


  };

  //跳转到第二个页面去
    onLoginSuccess(){
     const { navigator } = this.props;
     if (navigator) {
       navigator.push({
         name : 'LoginSuccess',
         component : LoginSuccess,
       });
     }
   }

}