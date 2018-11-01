// 106ms
Array.prototype.uniq = function () {
  var res = [];
  var jsonString = {};
  var jsonOther = {};
  for(var i = 0; i < this.length; i++){
    if (this[i] instanceof Object){
      res.push(this[i]);
    }else if(!jsonString.hasOwnProperty(this[i]) && typeof this[i] === 'string'){
      res.push(this[i]);
      jsonString[this[i]] = 1;
    } else if(!jsonOther[this[i]] && typeof this[i] !== 'string') {
      res.push(this[i]);
      jsonOther[this[i]] = 1;
    }
  }
  return res;
}
// 163ms
Array.prototype.uniq1 = function () {
  var result = [];
  var flag = true;
  for(var i =0;i<this.length;i++)
  {
    if(result.indexOf(this[i])==-1)
    {
      if(this[i]!=this[i])
      {
        if(flag)
        {
          result.push(this[i]);
          flag = false;
        }
      }
      else
      {
        result.push(this[i]);
      }
    }
  }
  return result;
}
var arr = [false, true, undefined,'1','undefined','NaN','null', null, NaN, 0, 1, {}, {},{}, 'a', 'a', {a: 5}, NaN];