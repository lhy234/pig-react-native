import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, TouchableWithoutFeedback} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Toast from 'react-native-simple-toast';

import {Colors, Images} from '../../resource/';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this._navigateToScreen = this._navigateToScreen.bind(this);
    }

    render() {
        return (
            <View style={styles.view_container} onLayout={this._navigatorToLogin.bind(this)}>
                <View style={styles.view_avatar_name_container}>
                    <View style={styles.view_avatar_container}>
                        <Image
                            style={styles.image_avatar}
                            source={Images.ic_avatar}
                        />
                    </View>
                    <Text
                        style={{fontSize: 18, color: 'black'}}
                    >braveliu</Text>

                </View>

                <TouchableWithoutFeedback onPress={this._navigatorToDefault.bind(this)}>
                    <View>
                        <Text
                            style={[styles.text_item, {backgroundColor: Colors.blue_00B0FF}]}
                        >Default</Text>
                    </View>
                </TouchableWithoutFeedback>

                <Text
                    style={{
                        position: 'absolute',
                        bottom: 8,
                        right: 8,
                        color: '#3197ff',
                        textDecorationLine: 'underline'
                    }}
                >http://www.cnblogs.com/braveliuchina/</Text>
            </View>
        );
    }

    _navigateToScreen(screen) {
        Toast.show(screen)
        const {navigate} = this.props.navigation;
        navigate(screen);
    }

    /*_navigateToOFO() {
        this._navigateToScreen('OFO')
    }

    _navigateToTwitter() {
        this._navigateToScreen('Twitter')
    }

    _navigateToWeChat() {
        this._navigateToScreen('WeChat')
    }

    _navigateToQQBrowser() {
        this._navigateToScreen('QQBrowser')
    }*/
    _navigatorToDefault(){
        this._navigateToScreen('Default1')
    }
    /*_navigatorToLogin(){
        this._navigateToScreen('Login')
    }*/

}

const styles = StyleSheet.create({
    view_container: {
        flex: 1,
    },
    view_avatar_container: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 12
    },
    view_avatar_name_container: {
        marginBottom: 32,
        marginTop: 32,
        alignItems: 'center'
    },
    image_avatar: {
        height: 100,
        width: 100,
        resizeMode: 'contain',
        borderRadius: 200,
    },
    text_item: {
        color: 'white',
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 8,
        textAlign: 'center',
        padding: 16,
        borderRadius: 8,
        fontSize: 18,
    }
})