// 多种状态，不同状态有不同的操作，切换状态，
// 把状态抽出来变成独立的类，提供同样的方法名.这样增加状态就很简单，需要什么就实例化对应的类即可
// if (status === '') {
//   xxx
//   status = 'xxxx';
// } else if (status === '') {

// }

// function state1(data) {
//   this.data = data;
// }
const data = {
  setState(state){ this.state = state},
  state1 = new State1(this)
}
class Data {
  constructor() {
    this.state = null;
  }
  setState(state) {
    this.state = state;
  }
}
class State1 {
  constructor(data) {
    this.data = data; // 多个状态需要共享的数据。
  }
  commonFun() {
    'xxx';
  }
}
// 调用时
const data = new Data();
const state1 = new State1(data);
// 切换状态
data.setState(state1);
// 状态的功能
data.state.commonFun();

// 上面这种情况，状态不固定，状态间切换也不固定。其实不算正宗的状态模式

// 现实中状态变化顺序可能是固定的。s1 - s2 - s3 -s1, 而且不能随便更改变化的顺序。



class Data {
  constructor() {
    this.state = null;
    this.state1 = new State1(data);
  }
  setState(state) {
    this.state = state;
  }
}
class State1 {
  constructor(data) {
    this.data = data; // 多个状态需要共享的数据。
  }
  commonFun() {
    'xxx';
    this.data.setState(this.data.state2);
  }
}