function getUrlParam(sUrl, sKey) {
  var values = [];
  var payload;
  if (!sKey || typeof sKey !== 'string') {
    payload = {};
    values = sUrl.match(/[\?&]([\w]*)=([^&,#])*/g);
    if (!values) {
      return {};
    }
    for(var i in values) {
      var value = values[i];
      var key = value.match(/.*=/g).shift().slice(1,-1);
      var data = value.match(/=.*/g).shift().substr(1);
      if (!payload[key]) {
        payload[key] =data;
      } else if (typeof payload[key] == 'string'){
        payload[key]=payload[key].split('&');
        payload[key].push(data);
      } else {
        payload[key].push(data);
      }
    }
    return payload;
  }
  // var reg = new RegExp(sKey+'=[^&,#]','g');
  var reg = new RegExp(sKey+'=[^&,#]','g');
  values = sUrl.match(reg);
  if (!values) {
    return '';
  }
  payload = [];
  for(var i in values) {
    var value = values[i];
    var data = value.match(/=.*/g).shift().substr(1);
    payload.push(data);
  }
  return payload;
}
var str = 'http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe';
console.log(getUrlParam(str));
