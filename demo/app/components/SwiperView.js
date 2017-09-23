import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper';
import {Images, LoginStyles} from '../resource/';

export default class SwiperView extends Component {
  render(){
    return(
        <View>
          <Swiper style={styles.wrapper} showsButtons={true} >
                    <Image source={{uri:'https://ww4.sinaimg.cn/thumb180/60718250ly1fjt5g16hcij208c0bat97.jpg'}} style={styles.img}/>
                    <Image source={{uri:'https://ww4.sinaimg.cn/thumb180/60718250ly1fjt5g1b1odj209u06x74l.jpg'}} style={styles.img}/>
                    <Image source={{uri:'https://ww4.sinaimg.cn/thumb180/60718250ly1fjt5g17d40j20dw0adab4.jpg'}} style={styles.img}/>
                </Swiper>
        </View>

    );
  }

//  renderImg(){
//          var imageViews=[];
//          for(var i=0;i<images.length;i++){
//          console.log('cdd', images);
//              imageViews.push(
//                  <Image
//                      key={i}
//                      style={{flex:1}}
//                      source={{uri:images[i]}}
//                      />
//              );
//          }
//          imageViews.push(<Text>lalala</Text>);
//          return imageViews;
//  }
}
const styles = StyleSheet.create({
  wrapper: {
     height: 200
  },
  img: {
     height: 200,
     width: '100%'
  },
  slide1: {
    height: 200,
    //flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//    backgroundColor: '#9DD6EB',
  },
  slide2: {
    height: 200,
    //flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//    backgroundColor: '#97CAE5',
  },
  slide3: {
    height: 200,
    //flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//    backgroundColor: '#92BBD9',
  },
  text: {
    height: 200,
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})