import React, { Component } from 'react';
import {
  ToolbarAndroid,
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Cookie from 'react-native-cookie';
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
                       <View style={LoginStyles.btnView}>
                      <LoginButton name='登录' onPressCallback={this.onPressCallback} style={LoginStyles.btn}/>
                      </View>
                    </View>
                  </View>
      )
  }


  onPressCallback = () => {
    //let formData = new FormData();
    var req  =
        {
        'platform':'telephone',
        'telephone': this.userName,
        'pwd': this.password
        }

   // alert(JSON.stringify(req))
    //formData.append('req', req)
//    formData.append('platform','local')
//    formData.append('phoneNum': this.userName)
//    //formData.append("loginName",this.userName);
//    formData.append("pwd",this.password);
    let url = "http://syhlife.com:8020/pig/login";
    NetUtil.postJson(url,JSON.stringify(req), false, (responseText) => {
          alert(responseText);
          response = JSON.parse(responseText)
          if(response['retcode'] == '0'){
             this.onLoginSuccess(response);
          }else{
           this.onLoginFailed(response);
          }
    })


  };

   _navigateToScreen(screen) {
             //Toast.show(screen)
             const {navigate} = this.props.navigation;
             navigate(screen);
   }
  //跳转到第二个页面去
    onLoginSuccess(response){
    Cookie.set('http://syhlife.com/', 'token',response['token'], {
        path: '/',
        expires: new Date('Thu, 1 Jan 2030 00:00:00 GMT'),
        domain: 'syhlife.com'
    }).then(() => console.log('success'));
    Cookie.set('http://syhlife.com/', 'usertype',response['userType'], {
            path: '/',
            expires: new Date('Thu, 1 Jan 2030 00:00:00 GMT'),
            domain: 'syhlife.com'
    }).then(() => console.log('success'));
    Cookie.set('http://syhlife.com/', 'userid',response['user']['id'], {
            path: '/',
            expires: new Date('Thu, 1 Jan 2030 00:00:00 GMT'),
            domain: 'syhlife.com'
        }).then(() => console.log('success'));
     // var cookie = 'user_session='+ response['user']['id'] +'; path=/; token='+ response['token'] + '; expires=Thu, 1 Jan 2030 00:00:00 -0000; secure; HttpOnly';
//      CookieManager.setFromResponse(
//        'http://syhlife.com/',
//        cookie
//        )
//          .then((res) => {
//            // `res` will be true or false depending on success.
//            console.log('CookieManager.setFromResponse =>', res);
//          });

     this._navigateToScreen('Home')
   }

   //不跳转页面
       onLoginFailed(){
        alert(response['retdesc']);
        this._navigateToScreen('Home')
      }

}