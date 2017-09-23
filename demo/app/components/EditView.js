import React, { Component } from 'react';
import {
  ToolbarAndroid,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
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
       <KeyboardAvoidingView behavior="padding" style={styles.container}>
       <TextInput style={LoginStyles.TextInput}
         placeholder={this.props.name}
         onChangeText={(text) => {
             this.setState({text});
             this.props.onChangeText(text);
           }
        }></TextInput>
       </KeyboardAvoidingView>
       </View>
    );
  }
}
const styles = StyleSheet.create({
   container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  }
});