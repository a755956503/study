function strLength(s, bUnicode255For1) {
  var arr = s.split('');
  var add = 0;
  if (!bUnicode255For1) {
    arr.forEach(function(cv) {
      if (cv.charCodeAt(0) > 255) {
        add++;
      }
    })
  }
  return arr.length+add;
}
function isAvailableEmail(sEmail) {
  return sEmail.search(/^(\w+)(\.\w+)*@(\w+)(\.\w+)*.(\w+)$/i) !== -1;
}
var str = 'hello world, 牛客';
var rgb = 'rgb(255, 255, 255)';
function rgb2hex(sRGB) {
  // 这种方式不好判断是否规范输入
  // var reg = /\d+/g;
  // var hex = '#';
  // var num = null;
  // while(num = reg.exec(sRGB)) {
  //   num = Number(num[0]);
  //   // 就是常规的10进制转16进制,下面两行是先算出十位，再算出个位，但实际上不需要。
  //   // var one =parseInt(num / 16).toString(16);
  //   // var two = (num % 16).toString(16);
  //   // hex += (one + two).slice(-2);
  //   hex += ('0'+(num.toString(16)).slice(-2);
  // }
  // return hex;
  var regexp=/rgb\((\d+),\s*(\d+),\s*(\d+)\)/;
  var ret=regexp.exec(sRGB);
  if (!ret){
    return sRGB;
  }
  var str='#';
  for(var i=1;i<=3;i++){
    var m=parseInt(ret[i]);
    if(m<=255&&m>=0){
      str+=(m<16?'0'+m.toString(16):m.toString(16));
    }else{
      return sRGB;
    }
  }
  return str;
}
function cssStyle2DomStyle(sName) {
  return sName.replace(/(?!^)\-(\w)(\w+)/g, function(a, b, c){
    return b.toUpperCase() + c.toLowerCase();
  }).replace(/^\-/, '');
}
function formatDate(oDate, sFormation) {
  var o ={
    'yyyy' : oDate.getFullYear(),
    'yy' : (""+oDate.getFullYear()).slice(-2),
    'MM' : ("0"+(oDate.getMonth()+1)).slice(-2),
    'M': (""+(oDate.getMonth()+1)),
    'dd' : "0"+oDate.getDate(),
    'd' : ""+oDate.getDate(),
    'HH' : oDate.getHours(),
    'H' : ("0"+oDate.getHours()).slice(-2),
    'hh' : ("0"+(oDate.getHours()%12)).slice(-2),
    'h' : ""+oDate.getHours()%12,
    'mm' : ("0"+oDate.getMinutes()).slice(-2),
    'm' : ""+oDate.getMinutes(),
    'ss' : ("0"+oDate.getSeconds()).slice(-2),
    's' : ""+oDate.getSeconds(),
    'w' : ['日','一','二','三','四','五','六'][oDate.getDay()]
  }

  return sFormation.replace(/([a-z]+)/gi,function($1){return o[$1];});

}