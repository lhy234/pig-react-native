let NetUtil = {
  postJson(url, data, callback){
        var fetchOptions = {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'module': '1',
            'clientType': 'ios',
            'version': '1.0.3',
            'clientIp': '192.168.0.2',
            'deviceId': '888',
          },
          body: 'req=' + data
        };
        alert(JSON.stringify(data))
        fetch(url, fetchOptions)
        .then((response) => response.text())
        .then((responseText) => {
         //  callback(JSON.parse(responseText));
           callback(responseText);
        }).done();
  },
}
export default NetUtil;