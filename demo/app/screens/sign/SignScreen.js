/**
 * Created by braveliu on 2017/4/13
 * Function:
 * Desc:
 */
import React, {Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Toast from 'react-native-simple-toast';
import { RadioButtons } from 'react-native-radio-buttons'
import MultipleChoice from 'react-native-multiple-choice'

export default class SignScreen extends Component {
    constructor(props){
             super(props);
             this.state = {
                 text: '',
                 selectedArr: []
             }
             this.location = this.props.navigation.state.params.locationInfo;
             this.userlist = this.props.navigation.state.params.signUserList;
             this.onSelect = this.onSelect.bind(this)
         }

         onSelect(value){
             var arr = this.state['selectedArr'];
             var removeArr = [];
             var insertArr = arr;
             for(var a in arr){
                if (a.substring(0,4)===value.substring(0,4)){
                   removeArr.push(a);
                }
             }
             if(removeArr.length === 0){
                insertArr.push(value);
             }
             for (var b in removeArr){
                if(insertArr[b]){
                    delete insertArr[b];
                }
             }
             this.setState({
             text: `Selected index: value: ${insertArr.join(',')}`,
             selectedArr: insertArr
             })
         }
         onPressCallback(){
            alert('wcnm');
         }
         tick(option){
                return option;
         }
         append0(num){
            if(num < 10){
                return '0'+ num;
            }
            return num;
         }
         getDate(){
            var dd = new Date();
            var year = dd.getFullYear();
            var month = this.append0(dd.getMonth()+1);
            var day = this.append0(dd.getDate());
            var hour = this.append0(dd.getHours());
            var min = this.append0(dd.getMinutes());
            return year + '-'+month + '-'+ day +" " + hour +":"+ min;
         }
    render() {
        const list =  [
                      "张三"+ '        '+this.getDate(),
                      "刘晓勇"+ '        '+this.getDate(),
                      "苏绍强"+ '        '+this.getDate()
                      ];

          return (
            <View style={{margin: 20}}>
               <MultipleChoice
                                  options={list}
                                  selectedOptions={[]}
                                  maxSelectedOptions={5}
                                  renderIndicator={(option)=>this.tick(option)}
                                  onSelection={(option)=>this.onSelect( option)}
                              />
              <Text>Selected option: {this.state.text || 'none'}</Text>
              <TouchableOpacity onPress={this.onPressCallback}>
                <Text>
                    {'签到'}
                </Text>
              </TouchableOpacity>
              <Text>{this.userlist}</Text>
              <Text>{this.location}</Text>
            </View>);
    }

}
let styles = StyleSheet.create({
    container: {
        marginTop: 40,
        padding: 20
    },
    text: {
        padding: 10,
        fontSize: 14,
    },
})
