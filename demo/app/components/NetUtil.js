let NetUtil = {
  postJson(url, data, token, callback){
        alert(token);
        if(token){
        alert('lxy');
                var fetchOptions = {
                          method: 'POST',
                          headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'module': '2',
                            'clientType': 'ios',
                            'sessionToken': ''+ token,
                            'version': '1.0.3',
                            'clientIp': '192.168.0.2',
                            'deviceId': '888',
                          },
                          body: 'req=' + data
                        };
                        fetch(url, fetchOptions)
                        .then((response) => response.text())
                        .then((responseText) => {
                         //  callback(JSON.parse(responseText));
                           callback(responseText);
                        }).done();
        }else{
        var fetchOptions = {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'module': '2',
            'clientType': 'ios',
            'version': '1.0.3',
            'clientIp': '192.168.0.2',
            'deviceId': '888',
          },
          body: 'req=' + data
        };
        alert(fetchOptions);
        fetch(url, fetchOptions)
        .then((response) => response.text())
        .then((responseText) => {
         //  callback(JSON.parse(responseText));
           callback(responseText);
        }).done();
        }
  },
}
export default NetUtil;