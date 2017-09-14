import {
  StyleSheet,
  Image
} from 'react-native';

const LoginStyles = StyleSheet.create({
  loginview: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    padding: 30,
    backgroundColor: '#ffffff',
    alignItems: 'center'
  },
  topimg: {
    width:120,
    height:120
  },
  img: {
    width:120,
    height:120,
    marginTop:80,
    resizeMode: Image.resizeMode.contain
  },
  toptext: {
    height:50,
    marginTop:110,
    alignItems: 'center'
  },
  user: {
    marginTop: 50,
    width:350
  },
  TextInput: {
    backgroundColor: '#ffffff',
    height:45,
    margin:18,
  },
  loginbutton: {
    width:200
  },
  loginText: {
      color: '#ffffff',
       fontWeight: 'bold',
       width:30,
    },
    loginTextView: {
      marginTop: 10,
      height:50,
      backgroundColor: '#3281DD',
      borderRadius:5,
      width: 310,
      flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems:'center',

    },
    btn: {

        flexDirection: 'column',
              alignItems: 'center'
    }
});
export default LoginStyles;