function getUrlParam(sUrl, sKey) {

  var r = [] , s = null  , i = 0;
  var regexp = new RegExp(/([?&])([\w]*)=([^&#]*)/g);

  while((s = regexp.exec(sUrl)) != null){
    if(!r[s[1]])r[s[1]] = s[2];
    else if(typeof(r[s[1]]) == 'object'){
      r[s[1]].push(s[2]);
    }else{
      r[s[1]] = [r[s[1]],s[2]];
    }
  }
  if(sKey){
    //有参数，返回参数值或空
    if(r[sKey]){
      return r[sKey];
    }else{
      return '';
    }
  }else{
    return r;
  }
}
var str = 'http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe';
console.log(getUrlParam(str));