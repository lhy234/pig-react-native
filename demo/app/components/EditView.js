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
import {LoginStyles} from '../resource/';

export default class EditView extends Component {
  constructor(props) {
   super(props);
   this.state = {text: ''};
 }

  render() {
    return (
      <View style={LoginStyles.TextInputView}>
       <TextInput style={LoginStyles.TextInput}
         placeholder={this.props.name}
         onChangeText={(text) => {
             this.setState({text});
             this.props.onChangeText(text);
           }
        }></TextInput>
       </View>
    );
  }
}
