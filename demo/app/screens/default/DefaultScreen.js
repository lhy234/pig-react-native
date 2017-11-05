/**
 * Created by braveliu on 2017/4/13
 * Function:
 * Desc:
 */
import React, {Component} from "react";
import {Text} from "react-native";
import Toast from 'react-native-simple-toast';
import {QRScannerView} from 'ac-qrcode';
import {NetUtil} from '../../components/';
import Cookie from 'react-native-cookie';

export default class DefaultScreen extends Component {
    constructor(props) {
            super(props);
            //this._navigateToScreen = this._navigateToScreen.bind(this);
        }
    render() {
        return (

            < QRScannerView
                onScanResultReceived={this.barcodeReceived.bind(this)}

                renderTopBarView={() => this._renderTitleBar()}

                renderBottomMenuView={() => this._renderMenu()}
            />
        )
    }
    _navigateToScreen(screen, data) {
            Toast.show(screen);
            const {navigate} = this.props.navigation;
            navigate(screen, data);
        }
    _renderTitleBar(){
        return(
            <Text
                style={{color:'white',textAlignVertical:'center', textAlign:'center',fontSize:20,padding:12}}
            >这里添加标题</Text>
        );
    }

    _renderMenu() {
        return (
            <Text
                style={{color:'white',textAlignVertical:'center', textAlign:'center',fontSize:20,padding:12}}
            >这里添加底部菜单</Text>
        )
    }
     _navigatorToSign(response){
                var data = {
                            'locationInfo':'lllllllxxxxxxyy',
                            'signUserList': response['signUserList']};
                this._navigateToScreen('Sign', data);
        }

    barcodeReceived(e) {
        var that = this;
        setTimeout(function(){
        //Toast.show('Type: ' + e.type + '\nData: ' + e.data);
        Cookie.get('http://syhlife.com/', 'token')
                .then((res) => {
                  console.log('Cookiemanager', res); // => 'user_session=abcdefg; path=/;'
                    if(res){
                       var url = 'http://syhlife.com:8020/pig/location_privilege';
                               var req  = {
                                       'userType': '01',
                                       'location': e.data
                                       };
                               var fetchOptions = {
                                  method: 'POST',
                                  headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/x-www-form-urlencoded',
                                    'module': '2',
                                    'clientType': 'ios',
                                    'sessionToken': ''+ res,
                                    'version': '1.0.3',
                                    'clientIp': '192.168.0.2',
                                    'deviceId': '888',
                                  },
                                  body: 'req=' + JSON.stringify(req)
                                };
                                fetch(url, fetchOptions)
                                .then((response) => response.text())
                                .then((responseText) => {
                                    alert(responseText);
                                    that._navigatorToSign(responseText);
                                });
                    }else{
                       that._navigateToScreen('Login');
                    }

                });

        //console.log(e)
        },2000);
    }
}
